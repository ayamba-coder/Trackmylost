import Controller from '@ember/controller';
import classic from 'ember-classic-decorator'
import { action } from '@ember/object'

@classic
export default class HomeController extends Controller {
    searchParam = 'Batey'
    @action
    search(){
        this.transitionToRoute('report')
    }
    
}
