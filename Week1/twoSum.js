/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
//Time complexity: O(n)
//Space complexity: O(1)
var twoSum = function(numbers, target) {
    let left =0;
    let right = numbers.length-1;

    while(left < right){
        let total = numbers[left] + numbers[right];

        if (total == target){
            return [left+1, right+1];
        }
        else if(total > target){
            right--;
        }
        else{
            left++;
        }
    }
};