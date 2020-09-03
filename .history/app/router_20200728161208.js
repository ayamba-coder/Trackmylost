import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('home',{path: '/'})
  this.route('report',{path:'report-found-document'});
  this.route('Login');
  this.route('Become A Collector');
  this.route('get-employed',{path:'employment'});
});
