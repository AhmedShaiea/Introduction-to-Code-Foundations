console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('index.js', 'utf8');

describe('', function () {
  it('', function() {
    let structure = function() {
      message = $text
    };

    let varCallbacks = [
      function($text) {
        if ($text.value === 'Change the message!') {
          return {failure: 'Change your code so `message` equals other text instead of `Change the message!`.'};
        }
        return true;
      }
    ];

    let isMatch = Structured.match(code, structure, {varCallbacks: varCallbacks});
    let failureMessage = varCallbacks.failure || 'Did you set `message` equal to some text surrounded by quotation marks?';
    assert.isOk(isMatch, failureMessage);
  });
});