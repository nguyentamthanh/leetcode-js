const removeDuplicates = function (nums) {
  let k = [];
  let count = 0;
  let last = NaN;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== last) {
      nums[count] = nums[i];
      last = nums[i];
      k.push(nums[count]);
      count++;
    }
  }
  console.log(k);
  return count;
};
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
removeDuplicates(nums);
