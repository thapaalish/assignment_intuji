nums = [8, 7, 2, 5, 3, 1];
nums1 = [5, 2, 6, 8, 1, 9];
target = 10;
target1 = 12;
let indexs = [];
let indexs1 = [];

const twoSum = () => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        indexs.push(nums[i]);
        indexs.push(nums[j]);
      }
    }
  }
};
twoSum();
let i = 0;
console.log(indexs);
console.log(
  `pair found (${indexs[i]}, ${indexs[i + 1]}) or pair found (${
    indexs[i + 2]
  }, ${indexs[i + 3]}) `
);

const twoSum1 = () => {
  for (let i = 0; i < nums1.length; i++) {
    for (let j = i + 1; j < nums1.length; j++) {
      if (nums1[i] + nums1[j] == target1) {
        indexs1.push(nums1[i]);
        indexs1.push(nums1[j]);
      }
    }
  }
};
twoSum1();
let j = 0;
console.log(indexs1);
indexs1.length == 0
  ? console.log(`pair not found`)
  : console.log(
      `pair found (${indexs1[j]}, ${indexs1[j + 1]}) or pair found (${
        indexs1[j + 2]
      }, ${indexs1[j + 3]}) `
    );
