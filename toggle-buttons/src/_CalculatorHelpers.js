export const calc = ( a, key, b ) => {
  switch (key) {
    case '+':
        return a+b;
  
    case '-':
        return a-b;
   
    case '/':
        return a/b;

    case '*':
        return a*b;
  
    case '%':
        return a*(b||1)/100;
        
    case '±':
        return -(a);
  
    default:
      console.log('Invalid operation');
  }
}

// eval('')


export const negate = (a) => {
    return -(a)
  }
  
