
//Aysncronous javascript 




const fun2= ()=>{
setTimeout(function(){
    console.log("fun2 is starting ")
},4000)
}




const fun1 =()=>{
    console.log(
        "starting my fun1"
    );
    fun2();
    console.log("fun1 is ending ");

}
fun1();