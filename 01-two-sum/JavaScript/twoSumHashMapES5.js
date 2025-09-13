function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
}

// calling twoSumBrute method
const nums = [2, 7, 11, 15];
const target = 9;
console.log("Brute Force Result:", twoSum(nums, target)); // Output: [0, 1]

console.log("HashMap:", twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
