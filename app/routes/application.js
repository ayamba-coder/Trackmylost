import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

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
    }

}
