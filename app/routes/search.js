import Route from '@ember/routing/route';

export default class SearchRoute extends Route {
    
    async model(){
        return this.store.findAll('person');
    }
}
