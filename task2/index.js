function findPairs(nums, target) {
  const seen = new Set(); // Use a Set to store the numbers we have seen so far
  for (const num of nums) {
    const complement = target - num;
    if (seen.has(complement)) {
      console.log(`Pair found (${complement}, ${num})`);
    }
    seen.add(num); // Add the current number to the Set
  }
}

// Example usage
const nums = [8, 7, 2, 5, 3, 1];
const target = 10;
findPairs(nums, target);
