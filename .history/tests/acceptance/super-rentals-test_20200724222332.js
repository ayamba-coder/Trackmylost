import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | super rentals', function(hooks) {
  setupApplicationTest(hooks);

  test('Visiting /about', async function(assert) {
    await visit('/about');
    assert.equal(currentURL, '/about')
  })
});
