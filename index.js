const screen=document.getElementById("screen")
const buttons=document.querySelectorAll("input[class^=buttonClass]")

console.log(buttons)


for (i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        console.log(buttons[i].value)
        console.log("click detected")
        if(screen.innerHTML==""){
            console.log("if")
            // screen.innerHTML=buttons[i].value
        }
        else{
            console.log("else")
            // screen.innerHTML+=buttons[i].value
        }
    })
}
