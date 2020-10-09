import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object'
import { inject as service } from '@ember/service'


export default class HeaderComponent extends Component {
    @service intl;
    constructor(owner,args) {
        super(owner, args);        
    }
    @tracked navItems = [
        {title:'home',icon:'home'},
        {title:'search',icon:'search'},
        {title:'report',icon:'file excel'},
        {title:'alertme',icon:'file word'},
        {title:'login',icon:'signing'},
        {title:'signup',icon:'signup'}
    ]

    @action
    switchLang(e){
        this.intl.setLocale(e.target.value)
    }
}