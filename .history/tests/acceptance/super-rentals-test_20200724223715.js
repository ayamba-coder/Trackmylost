import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | super rentals', function(hooks) {
  setupApplicationTest(hooks);


  test('visiting /about', async function(assert) {
    await visit('/about');

    assert.equal(currentURL(), '/about');
    assert.dom('h2').hasText('About Super Rentals');

    assert.dom('.jumbo a.button').hasText('Contact Us');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/contact');
  });

  test('visiting /contact', async function(assert) {
    await visit('/contact');

    assert.equal(currentURL(), '/contact');
    assert.dom('h2').hasText('Contact Us');

    assert.dom('a').hasText('+1 (503) 555-1212');
    await click('a');
  });
});