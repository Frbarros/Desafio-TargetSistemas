function checkFibonacci(input) {
    let starNumber = 0;
    let nextNumber = 1;
    let sum;
  
    while (starNumber <= input) {
      if (starNumber === input) {
        return true;
      }
      sum = starNumber + nextNumber;
      starNumber = nextNumber;
      nextNumber = sum;
    }
  
    return false;
}

  
let input = 54; // Número a ser verificado
if (checkFibonacci(input)) {
    console.log(`${input} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${input} não pertence à sequência de Fibonacci.`);
}
  