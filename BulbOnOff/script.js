let bulb = document.querySelector("#bulb")
let btn = document.querySelector('#toggleButton')

let flag = false

btn.addEventListener("click",function(){
    // console.log("ok");
    
    if(flag==false){
        bulb.style.backgroundColor = "Yellow"
        flag = true
        // console.log("on");
        
    } else{
        bulb.style.backgroundColor = "white"
        flag = false
    }
})


console.log(btn);
