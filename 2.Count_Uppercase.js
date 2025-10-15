function countUppercase(inputs) {
  let count = 0;

  for (const input of inputs) {
    if (input >= "A" && input <= "Z") {
      count++;
    }
  }
  //   for (let i = 0; i < str.length; i++) {
  //     let char = str[i];
  //     if (char >= 'A' && char <= 'Z') {
  //       count++;
  //     }
  //   }

  return count;
}
console.log(countUppercase("Hello World"));
