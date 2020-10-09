import Controller from '@ember/controller';
import classic from 'ember-classic-decorator'
import { action } from '@ember/object'

@classic
export default class SearchController extends Controller {
      @action
      geta(){
          console.log(this.model);
      }

}
