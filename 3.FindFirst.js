function printFirstAndLast(inputs) {
  if (inputs.length === 0) {
    console.log("inputsing is empty");
    return;
  }

  console.log(inputs[0], inputs[inputs.length - 1]);
}

printFirstAndLast("Utsob");
