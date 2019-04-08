Introduction

Karma has two parts, server and client (or clients).
Server is the main part, it:
* watches your files
* communicates with clients and manages them (through SOCKET connection)
* serves the code and tests to clients (through HTTP)
* reposts test results to you
￼
Client runs tests against the code and reports the results to server.


yarn add karma

yarn add karma-cli

yarn add karma-jasmine jasmine-core karma-chrome-launcher


karma init
js/*.js
test/*_spec.js

test/fizzbuzz_spec.js

describe("fizzbuzz", function() {
  describe("#process", function() {
    it("returns Fizz if number is divisible by 3", function() {
      expect(fizzbuzz.process(3)).toBe("Fizz");
      expect(fizzbuzz.process(6)).toBe("Fizz");
    });

    it("returns Buzz if number is divisible by 5", function() {
      expect(fizzbuzz.process(5)).toBe("Buzz");
      expect(fizzbuzz.process(10)).toBe("Buzz");
    });

    it("returns FizzBuzz if number is divisible by both 3 and 5", function() {
      expect(fizzbuzz.process(15)).toBe("FizzBuzz");
      expect(fizzbuzz.process(30)).toBe("FizzBuzz");
    });

    it("returns number itself if number is not divisible by 3 or 5", function() {
      expect(fizzbuzz.process(4)).toBe(4);
    });
  });
});

karma start

js/fizzbuzz.js

var fizzbuzz = (function() {
  function process(n) {
    if (!(n % 15)) {
      return "FizzBuzz";
    }
    if (!(n % 3)) {
      return "Fizz";
    }
    if (!(n % 5)) {
      return "Buzz";
    }
    return n;
  }

  return {
    process: process
  };
})();
