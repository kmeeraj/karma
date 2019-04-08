describe("fizzbuzz", function(){
  describe("#process",function(){
    it("return fizz if divisible by 3 ",function(){
      expect(fizzbuzz.process(3)).toBe("Fizz");
      expect(fizzbuzz.process(6)).toBe("Fizz");
    });
    it("return fizz if divisible by 5 ",function(){
      expect(fizzbuzz.process(5)).toBe("Buzz");
      expect(fizzbuzz.process(10)).toBe("Buzz");
    });
    it("return fizz if divisible by 3 and 5 ",function(){
      expect(fizzbuzz.process(15)).toBe("FizzBuzz");
      expect(fizzbuzz.process(30)).toBe("FizzBuzz");
    });
    it("return number itself ",function(){
      expect(fizzbuzz.process(4)).toBe(4);
    });
  });
});
