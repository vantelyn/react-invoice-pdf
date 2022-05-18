const isValidInput = (key) => {
  const validInputs = ['.','0','1','2','3','4','5','6','7','8','9'];
  return validInputs.includes(key);
}

const isInteger = (number) => {
  return Number.isInteger(number);
}

const commify = (string) => {
  var parts = string.split(".");
  const numberPart = parts[0];
  const decimalPart = parts[1];
  const thousands = /\B(?=(\d{3})+(?!\d))/g;
  return numberPart.replace(thousands, ",") + (parts.length>1 ? "." + (decimalPart ? decimalPart : ""): "");
}

export const modifyInputs = (string, key, memory=1) => {
  switch (key) {

    case '%':
      const numValue = Number(string);
      string = (numValue * memory / 100).toString();
      break;
  
    case '±':
      if(string.charAt(0) === '-')
        string = string.substring(1);
      else
        string = '-'+string;
      break;

    default:
      console.error('Invalid operation');
  }
  return {
    userInputString: string,
    userInputFloat: parseFloat(string),
    userInputFormattedString: commify(string)
  };
}

export const calculate = ( a=0, key='+', b ) => {

  switch (key) {
    case '+':
        return a+b;
  
    case '-':
        return a-b;
   
    case '÷':
    case '/':
        return a/b;

    case '×':
    case '*':
        return a*b;

    default:
      console.error('Invalid operation');
  }
}

export const addValidKeyToInputs = (key, string) => {
  const number = parseFloat(string);

  if( isValidInput(key) )

    if( key === '.' )
      isInteger(number) && (string = number.toString() + key)

    else if( string === '0' )
      string = key;

    else
      string = string + key;

  return {
    userInputString: string,
    userInputFloat: parseFloat(string),
    userInputFormattedString: commify(string)
  }; 
}

export const removeLastKeyFromInputs = (string) => {
  string = string.slice(0, -1);

  if(string === '')
    string = '0';
  
  return {
    userInputString: string,
    userInputFloat: parseFloat(string),
    userInputFormattedString: commify(string)
  }; 
}

