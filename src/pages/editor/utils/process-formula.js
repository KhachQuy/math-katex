import { Group } from "@material-ui/icons";

export const processFormula = (formula) => {
  //  (y / 2)/(x^2)  === > \\frac{\\frac{y}{2}}{x^2}
  
  formula = formula.replace(' ', '')
  const words = formula.split('')

  function find (a_str, signal){
    const found = ((element) => {
      return element == signal;
    })
    return a_str.findIndex(found)
  };

  // (...
  const open = find(words, '(');
  const close = find(words.splice(open+1), ')')

  const group = words.slice(open,close)
  console.log(group)


  return formula
};
//  quan le 