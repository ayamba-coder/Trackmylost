import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | complaint', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:complaint');
    assert.ok(route);
  });
});
