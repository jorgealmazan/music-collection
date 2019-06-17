import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('artists', function() {
    this.route('artist', { path: ':id'}, function(){
      this.route('albums', { path: '/albums/'})
    });
  });
});

export default Router;
