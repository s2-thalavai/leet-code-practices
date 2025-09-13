// Two Sum using ES6+ syntax
const twoSumHashES6 = (nums, target) => {
  const map = new Map();
  for (let [i, num] of nums.entries()) {
    const complement = target - num;
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(num, i);
  }
  throw new Error("No solution found");
};

// usage
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSumHashES6(nums, target);
console.log(`Indices: [${result[0]}, ${result[1]}]`);
