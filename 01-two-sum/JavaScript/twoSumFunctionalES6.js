const twoSumFunctional = (nums, target) => {
  const map = nums.reduce((acc, num, i) => {
    acc.set(num, i);
    return acc;
  }, new Map());

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement) && map.get(complement) !== i) {
      return [i, map.get(complement)];
    }
  }
  throw new Error("No solution found");
};

console.log("Functional:", twoSumFunctional([3, 2, 4], 6)); // Output: [1, 2]
