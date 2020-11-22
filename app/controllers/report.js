import Controller from '@ember/controller';
import { action } from '@ember/object'
import classic from 'ember-classic-decorator'
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';



@classic
export default class ReportController extends Controller {
    @service intl;
    @tracked surname = undefined
    @tracked othername = undefined
    @tracked samaritan = undefined
    @tracked type = undefined;
    @tracked loading=false;
    @tracked doc_type = ['id','passport','license','cc']
    @action
    submit(){
        let newLoser = this.store.createRecord('loser',{
            surname:this.surname,
            samaritan:this.samaritan,
            type:this.type,
            othername:this.othername
        })
        newLoser.save();
    }

    // not proud of myself doing this.No proper way to bind
    @action
    selectType(e){
       // console.log(this.type);
        this.set("type",e.target.value);
    }
}
