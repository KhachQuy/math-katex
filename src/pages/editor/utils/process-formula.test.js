import {processFormula} from "./process-formula";

describe('process formula tests', function () {
  describe('fraction tests', function () {
    test.each([
      ['1/2', '\\frac{1}{2}'],
      ['(y / 2)/(x^2)', '\\frac{\\frac{y}{2}}{x^2}']
    ]) ('can parse formula', (input, expected) => {
      const output = processFormula(input);
      expect(output).toEqual(expected);
    });
  });
});
