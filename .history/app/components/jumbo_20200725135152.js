import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class JumboComponent extends Component {
    @service('router') router;
    nav = ['Pen','pencil','juice','fattish']
    
}
