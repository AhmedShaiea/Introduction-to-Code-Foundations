console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('index.js', 'utf8');

describe('', function () {
  it('', function() {
    let structure = function() {
      drawName($text)
    };

    let varCallbacks = [
      function($text) {
        if ($text.value === 'Enter your name here') {
          return {failure: 'Did you change `Enter your name here` to your own name?'};
        }
        return true;
      }
    ];

    let isMatch = Structured.match(code, structure, {varCallbacks: varCallbacks});
    let failureMessage = varCallbacks.failure || 'Did you enter your own name in `\'\'` inside `drawName()`?';
    assert.isOk(isMatch, failureMessage);
  });
});