/*let numbers= [1,5,6,7,8,9,10];
let newArray = [];
for (let index = 0; index < numbers.length; index++) {
    const element =  numbers[index];
    const result = Math.pow(element,2);
   newArray.push(result);
 console.log(newArray);
}*/


const numbers = [2,4,5,6,7,8,9,10];

 const result = numbers.map(function(element){
 const r= Math.pow(element,3);
 return r;

})
console.log(result);
hh80uoo