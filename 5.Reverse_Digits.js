function reverseNumber(num) {
  let str = num.toString();
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return Number(reversed);
}
reverseNumber(12345)// 54321
