// 2154. Keep Multiplying Found Values by Two



// You are given an array of integers nums. You are also given an integer original which is the first number that needs to be searched for in nums.

// You then do the following steps:

// If original is found in nums, multiply it by two (i.e., set original = 2 * original).
// Otherwise, stop the process.
// Repeat this process with the new number as long as you keep finding the number.
// Return the final value of original.







/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    
    nums.sort((a,b) => a-b)
    // current num = original
    let currentNum = original 
    
    //for loop over nums until i = original
         for(let i = 0; i < nums.length;i++){   
            
        //when original is found muliply by 2
             if(nums[i] == currentNum){
            // make current num = to the remainder
                 
                currentNum = currentNum * 2; 
             }
    
        }
    
    return currentNum
};