import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object'


export default class ApplicationRoute extends Route {
    model() {
      //  return this.store.findAll('loser')
    }

    @service intl;
    async beforeModel(){
        const translations = await fetch('/translations/en-us.json');
        const translationsfr = await fetch('/translations/fr-fr.json');
        const translationsAsJson = await translations.json();
        const translationsAsJsonfr = await translationsfr.json();
        this.intl.addTranslations('en-us', translationsAsJson);
        this.intl.addTranslations('fr-fr', translationsAsJsonfr);
        console.log('App is loading');
    }
      @action
      loading(transition, originRoute) {
        let controller = this.controllerFor('application');
        controller.set('currentlyLoading', true);
        return true;
      }

}
