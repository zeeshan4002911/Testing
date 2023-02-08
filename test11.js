// [-1,0,1,2,-1,-4]
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// [[-1,-1,2],[-1,0,1]]
// Notice that the solution set must not contain duplicate triplets.
var threeSum = function (nums) {
    let result = [];
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        if (i != 0 && nums[i] == nums[i - 1]) continue;
        for (let j = i + 1; j < nums.length; j++) {
            // if (nums[j] == nums[j - 1]) continue;
            for (let k = j + 1; k < nums.length; k++) {
                // if (nums[k] == nums[k - 1]) continue;
                if ((nums[i] + nums[j] + nums[k]) === 0) {
                    let temp_arr = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
                    if (!map.hasOwnProperty(JSON.stringify(temp_arr))) {
                        result.push(temp_arr);
                        map[JSON.stringify(temp_arr)] = 10
                    }
                }
            }
        }
    }
    result.sort();
    return result;
};

console.log(threeSum([0,0,0]));