import Component from '@glimmer/component';

export default class JumboComponent extends Component {
    constructor(owner,args) {
        super(owner, args);
        console.log(Ember.$);
    }
    nav = ['home','report','Login','Become A Collector']
}
