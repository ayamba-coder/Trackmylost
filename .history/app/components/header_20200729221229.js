import Component from '@glimmer/component';

export default class HeaderComponent extends Component {
    constructor(owner,args) {
        super(owner, args);        
    }
    nav = ['home','report','login','Become A Collector']
}
