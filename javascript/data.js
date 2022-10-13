const input = document.getElementById("gussing-input");
const btn = document.getElementById("gussing-btn");
const msg = document.getElementById("msg");
let play = false;
btn.addEventListener("click",function(){
    if(!play)
    {
        play= true;

        btn.innerHTML= "Gusses";
        msg.style.display = "block";
        

        

    }

})