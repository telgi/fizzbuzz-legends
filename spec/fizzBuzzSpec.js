describe('FizzBuzz', function() {

  var fizzbuzz;

  describe('knows when a number is', function() {

    it('divisible by 15', function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.play(15)).toEqual("fizzbuzz");
    });

    it('divisible by 5', function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.play(5)).toEqual("buzz");
    });

    it('divisible by 15', function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.play(3)).toEqual("fizz");
    });

    it('returns a number', function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.play(11)).toEqual(11);
    });

  });

});
