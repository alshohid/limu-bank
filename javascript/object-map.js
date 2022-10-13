 
 const students = [
    {id:12,name:"Rahul",address:"Dhaka "},
    {id:13,name:"Bahul",address:"Chittagong  "},
    {id:28,name:"Cahul",address:" Shylet "},
    {id:40,name:"Kahul",address:"Khulna "}
 ];
 //ES 5
 /*
 const nameResult = function(n)
 {
    return n.name;
 }
 */
 //ES 7
 const nameResult = (n)=>{
   return n.name;
 }
 const addressResult = (add)=>{
   return add.address;
 }
 const idResult = (id)=>{
   return id.id > 15;
 }
 
 const allName = students.map( nameResult);
 const  allAddress = students.map(addressResult);
 const allId = students.filter(idResult)
 console.log(allName);
 console.log(allAddress);
 console.log(allId);