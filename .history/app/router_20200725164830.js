import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('I Found',{path:'report-found-item'});
  this.route('Login');
  this.route('Become A Collector');
});
