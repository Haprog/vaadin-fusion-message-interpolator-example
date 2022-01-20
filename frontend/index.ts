import { Binder } from '@vaadin/form';
import { Router } from '@vaadin/router';
import { get, registerTranslateConfig, use } from 'lit-translate';
import { routes } from './routes';
import { appStore } from './stores/app-store';

// Configure lit-translate
const translateConfig = registerTranslateConfig({
  loader: lang => fetch(`/i18n/${lang}.json`).then(res => res.json()),
});
use('fi');

Binder.interpolateMessageCallback = (message, validator, binderNode) => {
  // Try to find a translation for the specific type of validator
  let key = `validationError.${validator.constructor.name}`;

  // Special case for DecimalMin and DecimalMax validators to use different message based on "inclusive" property
  if (['validationError.DecimalMin', 'validationError.DecimalMax'].includes(key)) {
    key += (validator as any).inclusive ? '.inclusive' : '.exclusive';
  }

  if (translateConfig.lookup(key, translateConfig)) {
    return get(key, validator as any);
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
