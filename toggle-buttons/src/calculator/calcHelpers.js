/* eslint-disable no-new-func */
/* eslint-disable no-eval */
export const isValidInput = (key) => {
  const validInputs = ['.','0','1','2','3','4','5','6','7','8','9'];
  return validInputs.includes(key);
}

export const isInteger = (number) => {
  return Number.isInteger(number);
}

export const addValidKeyToInputString = (key, string) => {
  const number = eval(string);

  if( isValidInput(key) )

    if( key === '.' )
      isInteger(number) && (string = number.toString() + key)

    else if( string === '0' )
      string = key;

    else
      string = string + key;

  return string; 
}

export const removeLastKeyFromInputString = (string) => {
  string = string.slice(0, -1);

  if(string === '')
    return '0';
  
  return string;
}