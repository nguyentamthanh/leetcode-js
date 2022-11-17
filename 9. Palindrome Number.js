var isPalindrome = function (x) {
  x = String(x);
  y = x.split("").reverse().join("");
  return x == y ? true : false;
};
var x = 121;
isPalindrome(x);
