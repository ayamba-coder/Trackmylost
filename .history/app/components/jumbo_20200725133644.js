import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    router: service(),
    nav : ['Pen','pencil','juice','fattish']
    
})