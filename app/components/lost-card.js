import Component from '@glimmer/component';
import classic from 'ember-classic-decorator'
import { action } from '@ember/object'
import { tracked } from '@glimmer/tracking';


@classic
export default class LostCardComponent extends Component {
    @tracked details;    
    @action
    getCardInfo(){
        
    }
}
