import Component from '@glimmer/component';

export default class JumboComponent extends Component {
    constructor(owner,args) {
        super(owner, args);
        $('.example .teal.button').popup({
    on: 'click'
  })
;
$('.example input')
  .popup({
    on: 'focus'
  })
;
        
    }
    nav = ['home','report','Login','Become A Collector']
}
