import Controller from '@ember/controller';
import classic from 'ember-classic-decorator'
import { action } from '@ember/object'
import { tracked } from '@glimmer/tracking';


@classic
export default class SearchController extends Controller {


  @tracked search_query= "bat"

      @action
      geta(){
          console.log(this.model);
      }

      @action
      findItem(){
        console.log(this.search_query);
      }

}
