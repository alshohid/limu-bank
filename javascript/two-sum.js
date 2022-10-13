var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        if(nums[i] + nums[i+1] === target)
        {
            
            document.write(`[${i}, ${i+1}]`);

        }
    }
    
};
 var element = prompt("Enter  No. of element ");
var arr= [];
var target =6;
  for (let  i = 0;  i <=element ;  i++) {
    const s = prompt("Enter array element ");
arr.push(s)
    twoSum(arr,target);
  }

