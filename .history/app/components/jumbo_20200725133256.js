import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    router: service(),
    nav = ['Pen','pencil','juice','fattish']
    
})