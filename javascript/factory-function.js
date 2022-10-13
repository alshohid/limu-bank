 
 //akta fuction create korci and seta akta object return korce 
 
 const stopWatch = ()=>{
    let count = 0;
 
    
    return {


        count(){
            count++;
            return count;
        },


         squaringArray(a){
              const square = (number)=>{
                    let squareResult = Math.pow(number,2);
                    return squareResult;
              }  
             const summingResult =  a.map(square);  
             return summingResult;             
        },
    }
 } 
 
 const clock1 = stopWatch();
 const result1 = clock1.count();
 let array = [10,20,30,40,50];
 const result2 = clock1.squaringArray(array);
 console.log(result1);
 console.log(result2);
