export const calc = (a,b,key) => {
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
      return a*b/100;
  
    default:
      console.log('Invalid operation');
  }
}


export const negate = (a) => {
    return -(a)
  }
  
