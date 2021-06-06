export const processInput = (input) => {
  const words = splitWords(input.replace(/\n/g, ' $\\newline$ '));
  const joined = words.join(' ');
  return joined;
};


export const splitWords = (input) => {
  const words = input.split(/\\s+/g);
  return groupSpecialInputGroups(words);
};

const groupSpecialInputGroups = (wordGroups) => {
  const foundIndex = wordGroups.findIndex((word) => {
    return word === '$';
  });

  if (foundIndex === -1) {
    return wordGroups;
  }

  // once the $ is found, split them into 2 groups.
  // for examples: ['formula:', '$', 'x^2', '$', 'ending']
  //  this will split it into ['formula:'] and ['x^2', '$', 'ending']
  const firstGroup = wordGroups.slice(0, foundIndex);
  const secondGroup = wordGroups.slice(foundIndex + 1);

  const newSecondGroup = regroupAfterExtractFormula(secondGroup);
  return [...firstGroup, ...newSecondGroup];
};

const regroupAfterExtractFormula = (startingFormulaWordGroups) => {
  const foundIndex = startingFormulaWordGroups.findIndex((word) => {
    return word === '$'
      || word === '$,'
      || word === '$.'
      || word.endsWith('$')
      || word.endsWith('$,')
      || word.endsWith('$.');
  });

  // we know the first element forth belong to a formula, keep reading until we hit the closing formula $.
  //  We are then split it into 2 groups, the first group belongs to the formula, the second
  const formulaGroup = startingFormulaWordGroups.slice(0, foundIndex + 1);
  const otherGroups = groupSpecialInputGroups(startingFormulaWordGroups.slice(foundIndex + 1));
  const formula = formulaGroup.join('');

  return [`$${formula}`, ...otherGroups];
}
