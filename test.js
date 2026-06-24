const assert = require('assert');
describe('Basic Tests', () => {
  it('should load dependencies without error', () => {
    assert.ok(require('lodash'));
    assert.ok(require('axios'));
    assert.ok(require('express'));
  });
  it('should pass a sanity check', () => {
    assert.strictEqual(1 + 1, 2);
  });
});
