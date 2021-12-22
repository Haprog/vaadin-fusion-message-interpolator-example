import { Route } from '@vaadin/router';
import './views/main-layout';

export type ViewRoute = Route & {
  title?: string;
  icon?: string;
  children?: ViewRoute[];
};

export const views: ViewRoute[] = [
  // place routes below (more info https://vaadin.com/docs/latest/fusion/routing/overview)
  {
    path: '',
    icon: '',
    title: '',
    redirect: 'validation-test-form'
  },
  {
    path: 'validation-test-form',
    component: 'validation-test-form-view',
    icon: 'la la-wpforms',
    title: 'Validation Test Form',
    action: async (_context, _command) => {
      await import('./views/validation-test-form/validation-test-form-view');
      return;
    },
  },
  {
    path: 'person-form',
    component: 'person-form-view',
    icon: 'la la-user',
    title: 'Person Form',
    action: async (_context, _command) => {
      await import('./views/personform/person-form-view');
      return;
    },
  },
  {
    path: 'address-form',
    component: 'address-form-view',
    icon: 'la la-map-marker',
    title: 'Address Form',
    action: async (_context, _command) => {
      await import('./views/addressform/address-form-view');
      return;
    },
  },
];
export const routes: ViewRoute[] = [
  {
    path: '',
    component: 'main-layout',
    children: [...views],
  },
];
