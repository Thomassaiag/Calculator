const screen=document.getElementById("screen")
const buttons=document.querySelectorAll("input[class^=buttonClass]")

console.log(buttons)


for (i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        console.log(this.value)
        console.log("click detected")
        if(screen.innerHTML==""){
            console.log("if")
            screen.innerHTML=this.value
        }
        else{
            console.log("else")
            screen.innerHTML+=this.value
        }
    })
}
