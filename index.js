const screen=document.getElementById("screen")
const button=document.getElementById("buttonClass1")


button.addEventListener("click",function(){
    console.log(screen.innerHTML)
    if(screen.innerHTML==""){
        console.log("if")
        screen.innerHTML=button.value
    }
    else{
        screen.innerHTML+=button.value
    }
})