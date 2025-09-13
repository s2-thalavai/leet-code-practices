function twoSumBrute(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

// calling twoSumBrute method
const nums = [2, 7, 11, 15];
const target = 9;
console.log("Brute Force Result:", twoSumBrute(nums, target)); // Output: [0, 1]

console.log("Brute Force Result:", twoSumBrute([3, 2, 4], 6)); // Output: [1, 2]

