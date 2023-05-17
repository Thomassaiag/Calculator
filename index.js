const screen=document.getElementById("screen")
const buttons=document.querySelectorAll("input[class=buttonClass]")
const buttonEqual=document.querySelector(".buttonClassEqual")
const buttonClear=document.querySelector(".buttonClassClear")
let inputInt=[]
let inputOperateur=[]


for (i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        let spliter= /\*|\+|\-|\//
        console.log(this.value)
        console.log(parseInt(this.value))
        console.log("click detected")
        if(screen.innerHTML==""){
            // console.log("if")
            screen.innerHTML=this.value
        }
        else{
            // console.log("else")
            screen.innerHTML+=this.value
        }
        if (isNaN(parseInt(this.value))){
            inputOperateur.push(this.value)
        }
        inputInt=screen.innerHTML.split(spliter)
        console.log(inputInt)
        console.log(inputOperateur)

    })
}



buttonEqual.addEventListener("click",function(){
    let result=parseInt(inputInt[0])
    console.log(inputInt)
    console.log(result)
    for (i=1;i<inputInt.length;i++){
        console.log('boucle')
        console.log(parseInt(inputInt[i]))
        operateur=inputOperateur[parseInt(i)-1]
        // console.log(operateur)
        switch(operateur){
            case "+":
            result+=parseInt(inputInt[i])
            break
            case "-":
            result-=parseInt(inputInt[i])
            break
            case "*":
            result*=parseInt(inputInt[i])
            break
            case "/":
            result/=parseInt(inputInt[i])
            break
        }
        console.log(`result=${result}`)
    }
    console.log(result)
    screen.innerHTML=""
    screen.innerHTML=result
})

buttonClear.addEventListener("click",function(){
    screen.innerHTML=""
    inputInt=[]
    inputOperateur=[]
})