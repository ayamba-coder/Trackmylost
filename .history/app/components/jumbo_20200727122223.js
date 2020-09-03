import Component from '@glimmer/component';

export default class JumboComponent extends Component {
    constructor(owner,args) {
        super(owner, args);
        $('#toggle').click(function(){
            console.log('hey you just clcikde');
        })
    }
    nav = ['home','report','Login','Become A Collector']
}
