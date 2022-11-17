var nums = [2, 7, 11, 15];
var target = 9;

var twoSum = function (nums, target) {
  var hash = {};
  var len = nums.length;
  for (var i = 0; i < len; i++) {
    if (nums[i] in hash) return [hash[nums[i]], i];
    console.log(hash);
    hash[target - nums[i]] = i;
  }
  return [-1, -1];
};

console.log(twoSum(nums, target));
// /*twoSum(nums, target);
