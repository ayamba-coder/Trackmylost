import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('home',{path: '/'})
  this.route('report',{path:'report-found-document'});
  this.route('login');
  this.route('signup',{path: 'Become-a-collector'});
  this.route('policy',{path:'terms&conditions'});
  this.route('search');
  this.route('complaint');
});
