import Component from '@glimmer/component';

export default class HeaderComponent extends Component {
    constructor(owner,args) {
        super(owner, args);        
    }
    nav = ['home','search','report','complaint','login','signup','policy']
}
