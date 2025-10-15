function factorial(n) {
  if (n < 0) return "Invalid input"; 

  let result = 1;
  let i = 1;

  while (i <= n) {
    result *= i; 
    i++;
  }

  return result;
}

console.log(factorial(5));  
console.log(factorial(0)); 
console.log(factorial(7));  
