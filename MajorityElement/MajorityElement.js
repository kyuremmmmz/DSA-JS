/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const ht = {};
    for (const key of nums) {
        ht[key] = ht[key] + 1 || 1;
    }

    for (const key in ht) {
        if (ht[key] > Math.floor(nums.length / 2)) {
            return key;
        }
        return key;
    }
};

