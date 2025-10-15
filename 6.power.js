function power(input1, input2) {
  let result = 1; 
  for (let i = 0; i < input2; i++) {
    result *= input1; 
  }

  console.log(result);
  return result;
  
}

power(2, 3)