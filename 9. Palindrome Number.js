function palindrome(num) {
  x = String(num);
  let y;
  y = x.split("").reverse().join("");
  if (x == y) {
    return true;
  }
  return false;
}
console.log(palindrome(121));
