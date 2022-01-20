import { Binder, Validator } from '@vaadin/form';
import * as Validators from '@vaadin/form/Validators';
import { Router } from '@vaadin/router';
import { get, registerTranslateConfig, use, lookup } from 'lit-translate';
import type { Values } from 'lit-translate';
import { routes } from './routes';
import { appStore } from './stores/app-store';

// Configure lit-translate
const translateConfig = registerTranslateConfig({
  loader: lang => fetch(`/i18n/${lang}.json`).then(res => res.json()),
  lookup: (key, config) => {
    // First check for root level property including periods/dots in the key
    if (config.strings && typeof config.strings[key] === 'string') {
      return config.strings[key] as string;
    }
    // Fall back to default implementation
    return lookup(key, config);
  }
});
use('fi');

// Build a map from the Validators wildcard import
const validatorToName = new Map<Validator<any>, string>(
  Object.entries(Validators).map(([id, v]) => [v.prototype, id])
);

function getValidatorName(validator: Validator<any>) {
  return validatorToName.get(Object.getPrototypeOf(validator)) || validator.constructor.name;
}

function getMessagePropertyId(validator: Validator<any>) {
  return `validationError.${getValidatorName(validator)}`;
}

Binder.interpolateMessageCallback = (message, validator, binderNode) => {
  // Use the validator instance properties as values for variable interpolation
  const values = validator as unknown as Values;

  // Try to find translation for the message (in case of custom message provided from Java annotation)
  if (translateConfig.lookup(message, translateConfig)) {
    return get(message, values);
  }

  let messagePropertyId = getMessagePropertyId(validator);

  // Special case for DecimalMin and DecimalMax validators to use different message based on "inclusive" property
  if (['validationError.DecimalMin', 'validationError.DecimalMax'].includes(messagePropertyId)) {
    messagePropertyId += (validator as any).inclusive ? '.inclusive' : '.exclusive';
  }

  // Try to find a default translation for the specific type of validator
  if (translateConfig.lookup(messagePropertyId, translateConfig)) {
    return get(messagePropertyId, values);
  }

  // Fall back to original message if no translations are found
  return message;
};

export const router = new Router(document.querySelector('#outlet'));

router.setRoutes(routes);

window.addEventListener('vaadin-router-location-changed', (e) => {
  appStore.setLocation((e as CustomEvent).detail.location);
  const title = appStore.currentViewTitle;
  if (title) {
    document.title = title + ' | ' + appStore.applicationName;
  } else {
    document.title = appStore.applicationName;
  }
});
