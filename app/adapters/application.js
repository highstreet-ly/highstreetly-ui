import JSONAPIAdapter from '@ember-data/adapter/json-api';
import Env from 'highstreetly-ui/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  constructor() {
    super(...arguments);
    this.host = Env.sonatribe.Api;
    this.namespace = Env.sonatribe.apiNamespace;
  }
}
