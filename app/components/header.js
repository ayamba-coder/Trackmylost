import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class HeaderComponent extends Component {
    constructor(owner,args) {
        super(owner, args);        
    }
    @tracked nav = ['home','search','report','alertme','login','signup']
    navItems = [
        {title:'home',icon:'home'},
        {title:'search',icon:'search'},
        {title:'report',icon:'file excel'},
        {title:'alertme',icon:'file word'},
        {title:'login',icon:'signing'},
        {title:'signup',icon:'signup'}
    ]
    
    init(){
        this._super(arguments);
        this.navItems.forEach(function(item){
            console.log(item.title);
        })
        console.log(124);
    }
}