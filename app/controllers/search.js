import Controller from '@ember/controller';
import classic from 'ember-classic-decorator'
import { action } from '@ember/object'
import { tracked } from '@glimmer/tracking';


@classic
export default class SearchController extends Controller {


  @tracked search_query= undefined
  @tracked search_result = undefined

      @action
     async findItem(value){
        this.search_result = value
        this.store.findRecord('loser',1)
      }

}
