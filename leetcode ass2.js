question(1)
//Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

//You must not use any built-in exponent function or operator
  // solutions
  var mySqrt = function(x) {
 
    return Math.floor(Math.sqrt(x));
};

       //Question 2

      // Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//You can return the answer in any order.
   //solution
   var twoSum = function(nums, target){
    
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }
  

  //Question 3
  //Given an integer array nums, return true if any value appears at least
  // twice in the array, and return false if every element is distinct.
 // solution
 var containsDuplicate = function(nums) {
    for (var i = 0; i < nums.length; i++) 
        {
            for (var j = 0; j < nums.length; j++) 
            {
                if (i != j) 
                {
                    if (nums[i] == nums[j]) 
                    {
                        return true; 
                    }
                }
            }
        }
        return false; 
};

//Question 4

//Given a non-empty array of integers nums, every element appears twice 
//except for one. Find that single one.

//You must implement a solution with a linear runtime complexity 
//and use only constant extra space.

function stray(nums) {
    let  numbers = nums.sort((a, b) => a - b);
      if (nums[0] !== nums[1]) {
        return nums[0];
      }
      else {
        return nums[nums.length - 1];
      }
    }
 //Question 5
//  Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

//  We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
 
//  You must solve this problem without using the library's sort function.
 
//solution
 
 var sortColors = function(nums) {
 
    let red = 0;
    let white = 0;
    
    for (let i =0; i < nums.length; i++) {
        if(nums[i] === 0){
            red++
        } else if (nums[i] === 1) {
          white++
        }
    }
    for (let j =0; j < nums.length; j++) {
        if( j < red){
            nums[j] = 0
        } else  if( j < (red + white)){
            nums[j] = 1
        } else {
          nums[j] = 2
        }
    }
  
  return nums   
};

//Question 6
// Given the roots of two binary trees p and q, write a 
// function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally 
// identical, and the nodes have the same value.
 
//solution
var isSameTree = function(p, q) {
    if ((!p && q) || (p && !q) || (p && q && p.val !== q.val)) return false;
  if (p && q) return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  return true; 
};

//Question 7