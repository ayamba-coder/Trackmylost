import Controller from '@ember/controller';
import classic from 'ember-classic-decorator'
import { action } from '@ember/object'

@classic
export default class HomeController extends Controller {
    @action
    tick(){
        console.log(12548);
    }
}
