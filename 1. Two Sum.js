function twosum(nums, target) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] != null) return [hash[nums[i]], i];
    hash[target - nums[i]] = i;
  }
  return [-1, -1];
}
twosum([1, 2, 3, 4, 5], 9);
console.log(twosum([1, 2, 3, 4, 5], 9));
