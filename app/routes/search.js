import Route from '@ember/routing/route';

export default class SearchRoute extends Route {
    model(){
       return this.modelFor('application')
    }
}
