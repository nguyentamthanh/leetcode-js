// function findMedianSortedArrays(nums1, nums2) {
//   let m = nums1.length;
//   let n = nums2.length;
//   if (m > n) {
//     [nums1, nums2, m, n] = [nums2, nums1, n, m];
//   }
//   let imin = 0;
//   let imax = m;
//   let halfLen = Math.floor((m + n + 1) / 2);
//   while (imin <= imax) {
//     let i = Math.floor((imin + imax) / 2);
//     let j = halfLen - i;
//     if (i < m && nums2[j - 1] > nums1[i]) {
//       imin = i + 1;
//     } else if (i > 0 && nums1[i - 1] > nums2[j]) {
//       imax = i - 1;
//     } else {
//       let maxOfLeft;
//       if (i === 0) {
//         maxOfLeft = nums2[j - 1];
//       } else if (j === 0) {
//         maxOfLeft = nums1[i - 1];
//       } else {
//         maxOfLeft = Math.max(nums1[i - 1], nums2[j - 1]);
//       }
//       if ((m + n) % 2 === 1) {
//         return maxOfLeft;
//       }
//       let minOfRight;
//       if (i === m) {
//         minOfRight = nums2[j];
//       } else if (j === n) {
//         minOfRight = nums1[i];
//       } else {
//         minOfRight = Math.min(nums1[i], nums2[j]);
//       }
//       return (maxOfLeft + minOfRight) / 2;
//     }
//   }
// }
// console.log(findMedianSortedArrays([1, 2, 3], [4, 5, 8]));

// const addArray = (arr1, arr2) => {
//   let result = [...new Set([...arr1, ...arr2])];
//   return result;
// };
const findMedianSortedArrays = (arr1, arr2) => {
  let result = [...new Set([...arr1, ...arr2])];
  result = result.sort((a, b) => a - b);
  let len = result.length;
  let average_position = Math.floor(len / 2);
  if (len % 2 === 0) {
    if (len > 2) {
      return (result[average_position - 1] + result[average_position]) / 2;
    } else {
      return result[0];
    }
  } else {
    return result[average_position];
  }
};
console.log(findMedianSortedArrays([1, 1], [1, 2]));
// function findMedian(arr) {
//   arr.sort((a, b) => a - b);
//   let mid = Math.floor(arr.length / 2);
//   console.log(
//     "🚀 ~ file: 4. Median of Two Sorted Arrays.js:60 ~ findMedian ~ mid",
//     mid
//   );
//   if (arr.length % 2 === 0) {
//     return (arr[mid - 1] + arr[mid]) / 2;
//   } else {
//     return arr[mid];
//   }
// }

// console.log(
//   "🚀 ~ file: 4. Median of Two Sorted Arrays.js:58 ~ findMedian ~ findMedian",
//   findMedian([1, 2, 5, 6, 7])
// );
