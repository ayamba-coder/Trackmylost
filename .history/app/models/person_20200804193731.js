import Model, {attr} from '@ember-data/model';

export default class PersonModel extends Model {
    @attr surname;
    @attr givenNames;
    @attr dob;
    @attr townPicked;
}
