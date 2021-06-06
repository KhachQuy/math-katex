import {processInput, splitWords} from "./input-processing";

describe('input processing tests', function () {
  test('test1', () => {
    const twoWords = "this is";
    const outputs = splitWords(twoWords);
    expect(outputs.length).toEqual(2);
  });

  test('formula contains space', () => {
    const input = "this is a formula: $ x^2 $";
    const outputs = splitWords(input);
    console.log(`output: ${JSON.stringify(outputs)}`);
    expect(outputs.length).toEqual(5);
  });

  test('input contains formula which also contains spaces', () => {
    const input = "this is a formula: $ x^2 * 3 $. This is the end.";
    const outputs = splitWords(input);
    console.log(`output: ${JSON.stringify(outputs)}`);
    expect(outputs.length).toEqual(9);
  });

  test('input contains multiple formulas', () => {
    const input = "first formula: $ x^2 * 3$, and second formula: $ x^4$.";
    const outputs = splitWords(input);
    console.log(`output: ${JSON.stringify(outputs)}`);
    expect(outputs.length).toEqual(7);
  });

  test('input contains newline', () => {
    const input = "this\nis";
    const outputs = processInput(input);
    console.log(outputs);
    expect(outputs).toEqual("this $\\newline$ is");
  });
});
