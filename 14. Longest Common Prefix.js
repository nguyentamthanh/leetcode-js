function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  strs.forEach(function (str) {
    while (str.indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix.length === 0) return "";
    }
  });
  return prefix;
}
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
