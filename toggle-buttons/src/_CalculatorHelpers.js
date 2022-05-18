export const calculate = ( a=0, key='+', b ) => {
  switch (key) {
    case '+':
        return a+b;
  
    case '-':
        return a-b;
   
    case '/':
        return a/b;

    case '*':
        return a*b;
    default:
      console.error('Invalid operation');
  }
}

// eval('')


export const negate = (a) => {
    return -(a)
  }
  
