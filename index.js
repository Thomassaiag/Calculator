const screen=document.getElementById("screen")
const buttons=document.querySelectorAll("input[class=buttonClass]")
const buttonEqual=document.querySelector(".buttonClassEqual")
let inputInt=[]
let inputOperateur=[]
console.log(buttons)


for (i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        let spliter= /\*|\+|\-|\//
        console.log(this.value)
        console.log(parseInt(this.value))
        console.log("click detected")
        if(screen.innerHTML==""){
            console.log("if")
            screen.innerHTML=this.value
        }
        else{
            console.log("else")
            screen.innerHTML+=this.value
        }
        if (isNaN(parseInt(this.value))){
            inputOperateur.push(this.value)
        }
        // inputInt=screen.innerHTML.split("+").join(',').split("-").join(',').split("/").join(',').split("*")
        inputInt=screen.innerHTML.split(spliter)
        console.log(inputInt)
        console.log(inputOperateur)

    })
}



buttonEqual.addEventListener("click",function(){
    let result=0
    console.log(inputInt)
    for (let element of inputInt){
        console.log('boucle')
        console.log(element)
        console.log(parseInt(element))
        result+=parseInt(element)
        
    }
    console.log(result)
    screen.innerHTML=""
    screen.innerHTML=result
})