function longestCommonPrefix(strs) {
  if (strs.length == 0) return "";
  var len1 = strs.length;
  var len2 = strs[0].length;
  var temp = "";
  var res = "";
  outer: for (var i = 0; i < len2; i++) {
    temp = strs[0][i];
    console.log(
      "🚀 ~ file: 14. Longest Common Prefix.js ~ line 9 ~ longestCommonPrefix ~ temp",
      temp
    );
  }
}
longestCommonPrefix(["flower", "flow", "flight"]);
