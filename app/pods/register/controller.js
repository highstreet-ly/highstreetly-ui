import Controller from '@ember/controller';
import Env from 'highstreetly-ui/config/environment';
import { computed } from '@ember/object';
import { action } from '@ember/object';

export default class RegisterController extends Controller {
  @computed('Env.sonatribe.launched')
  get isLaunched() {
    return Env.sonatribe.launched;
  }

  @action
  didSelectBusinessType(bt){
    console.log(bt)
  }
}
