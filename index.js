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



// buttonEqual.addEventListener("click",function(){
//     let result=parseInt(inputInt[0])
//     console.log(inputInt)
//     console.log(result)
//     for (i=1;i<inputInt.length;i++){
//         console.log('boucle')
//         console.log(parseInt(inputInt[i]))
//         operateur=inputOperateur[parseInt(i)-1]
//         // console.log(operateur)
//         switch(operateur){
//             case "+":
//             result+=parseInt(inputInt[i])
//             break
//             case "-":
//             result-=parseInt(inputInt[i])
//             break
//             case "*":
//             result*=parseInt(inputInt[i])
//             break
//             case "/":
//             result/=parseInt(inputInt[i])
//             break
//         }
//         console.log(`result=${result}`)
//     }
//     console.log(result)
//     screen.innerHTML=""
//     screen.innerHTML=result
// })

buttonClear.addEventListener("click",function(){
    screen.innerHTML=""
    inputInt=[]
    inputOperateur=[]
})


const resultDisplay =(tableOperateurs, tableInt)=>{
    console.log('tritable')
    let operationResult=0
    while (tableOperateurs.includes("*") || tableOperateurs.includes("/")){
        for (let i=0;i<tableOperateurs.length;i++){
            console.log(`i=${i}`);
            console.log(`element=${tableOperateurs[i]}`)
            console.log(parseFloat(tableInt[i]))
            console.log(parseFloat(tableInt[i+1]))
            switch (tableOperateurs[i]){
                case "*":
                    operationResult=parseFloat(tableInt[i])*parseFloat(tableInt[parseInt(i)+1])
                    tableInt.splice(parseInt(i),2,operationResult)
                    tableOperateurs.splice(parseInt(i),1)
                    console.log(tableInt)
                    console.log(tableOperateurs)
                    i=-1
                    break
                case "/":
                    operationResult=parseFloat(tableInt[i])/parseFloat(tableInt[parseInt(i)+1])
                    tableInt.splice(parseInt(i),2,operationResult)
                    tableOperateurs.splice(parseInt(i),1)
                    console.log(tableInt)
                    console.log(tableOperateurs)
                    i=-1
                    break
                case "+":
                    console.log("not a * or /")
                    break
                case "-":
                    console.log("not a * or /")
                    break
            }
        }
    }
    console.log(tableInt)
    console.log(tableOperateurs)
    for (let j=0;j<tableOperateurs.length;j++){
        console.log(`j=${j}`);
        console.log(`element=${tableOperateurs[j]}`)
        console.log(parseFloat(tableInt[j]))
        console.log(parseFloat(tableInt[j+1]))
        switch (tableOperateurs[j]){
            case "+":
                operationResult=parseFloat(tableInt[j])+parseFloat(tableInt[parseInt(j)+1])
                tableInt.splice(parseInt(j),2,operationResult)
                console.log(tableInt)
                console.log(tableOperateurs)
                break
            case "-":
                operationResult=parseFloat(tableInt[j])-parseFloat(tableInt[parseInt(j)+1])
                tableInt.splice(parseInt(j),2,operationResult)
                console.log(tableInt)
                console.log(tableOperateurs)
                break    
        }
    }   
    
    console.log(operationResult)
    screen.innerHTML=""
    screen.innerHTML=operationResult

}

buttonEqual.addEventListener("click",function(){resultDisplay(inputOperateur,inputInt)})


// resultDisplay(['+', '*', '/'],['1', '2', '3', '4'])