import EmberRouter from '@ember/routing/router';
import config from 'highstreetly-ui/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('legal', function () {
    this.route('acceptable-use');
    this.route('covid');
    this.route('data-processing');
    this.route('privacy');
    this.route('terms');
  });
  this.route('contact');
});
