import { Binder } from '@vaadin/form';
import { Router } from '@vaadin/router';
import { routes } from './routes';
import { appStore } from './stores/app-store';
import { MessageInterpolator } from './localization';

MessageInterpolator.setMessages(new Map<string | RegExp, string>([
  [
    '{javax.validation.constraints.Size.message}',
    'Merkkijonon pituus ei kelpaa. Literal \\{error}.', // escape {error} to show it literally instead of interpolating to undefined
  ],
  ['{com.example.my.size.constraint}', 'Merkkijonon pituuden tulee olla vähintään {min} ja enintään {max} merkkiä, oli {size} merkkiä.'],
  ['{com.example.my.size.constraint.min}', 'Merkkijonon pituuden tulee olla vähintään {min}'],
  ['must not be blank', 'ei saa olla tyhjä'],
  ['must not be empty', 'ei saa olla tyhjä'],
  [
    /size must be between (?<min>.+) and (?<max>.+)/, // named capturing groups
    'Merkkijonon pituuden tulee olla väliltä {min} - {max}, oli {size}',
  ],
  [
    /size must be between (.+) and (.+)/, // unnamed capturing groups
    'Merkkijonon pituuden tulee olla väliltä {1} - {2}, oli {size}',
  ],
]));

Binder.interpolateMessageCallback = MessageInterpolator.callback;

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
