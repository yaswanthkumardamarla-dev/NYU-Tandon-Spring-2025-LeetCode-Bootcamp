/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let product = 1;
    let zeroCount = 0;
    let n = nums.length;
    let result = new Array(n).fill(0);

    for(let num of nums){
        if(num == 0) zeroCount++;
        else product *= num;
    }

    if(zeroCount > 1) return result;
    if(zeroCount ==1){
        for(let i=0; i<n; i++){
            if(nums[i] ==0){
                result[i] = product;
            }
        }
    }
    else{
        for(let i=0; i<n; i++){
            result[i] = product / nums[i];
        }
    }
    return result;
};