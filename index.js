const screen=document.getElementById("screen")
const buttons=document.querySelectorAll("input[class=buttonClass]")
const buttonEqual=document.querySelector(".buttonClassEqual")
const buttonClear=document.querySelector(".buttonClassClear")
let inputInt=[]
let inputOperateur=[]

//affichage des frappe de touche sur l'écran. Stockage des nombres et opérateurs dans 2 tableaux
for (i=0;i<buttons.length;i++){// on parcourts les boutons de class buttonClass
    // let spliter= /\*|\+|\-|\/|\(|\)/ // regexp permettant de spliter la chaine de caractère selon les opérateurs saisis
    buttons[i].addEventListener("click",function(){ // l'even listener permet de récupérer la valeur de chaque object bouton
        console.log(this.value)
        console.log(parseInt(this.value))
        console.log(isNaN(parseInt(this.value)))
        console.log("click detected")
        if(screen.innerHTML==""){ //si l'écran est vide, on affiche la 1ere frappe saisie
            // console.log("if")
            screen.innerHTML=this.value
        }
        else{
            // console.log("else")
            screen.innerHTML+=this.value // sinon on affiche une concaténation
        }
        if (isNaN(parseInt(this.value))){ //si la valeur du bouton n'est pas un entier, on la stocke dans le tableau des opérateurs
            inputOperateur.push(this.value)
        } else{
            inputInt=screen.innerHTML.split("")
            console.log(inputInt) // on stocke toutes les frappes dans le tableau
            inputInt=inputInt.filter(element=>isNaN(parseInt(element))==false) // on ne garde que les entiers
            console.log(inputInt)
        }
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

// effacement de l'écran
buttonClear.addEventListener("click",function(){
    screen.innerHTML=""
    inputInt=[]
    inputOperateur=[]
})

//fonction de gestion des priorités de calcul
const resultDisplay =(tableOperateurs, tableInt)=>{
    console.log('tritable')
    let operationResult=0
    // tant que TableOpérateur contient * et / on exécute la boucle for
    while (tableOperateurs.includes("*") || tableOperateurs.includes("/")){
        for (let i=0;i<tableOperateurs.length;i++){
            // console.log(`i=${i}`);
            // console.log(`element=${tableOperateurs[i]}`)
            // console.log(parseFloat(tableInt[i]))
            // console.log(parseFloat(tableInt[i+1]))
            switch (tableOperateurs[i]){
                case "*": // si l'opérateur est *, on multiplie les 2 int de tableInt correspondant aux index de l'opérateur
                    operationResult=parseFloat(tableInt[i])*parseFloat(tableInt[parseInt(i)+1])
                    tableInt.splice(parseInt(i),2,operationResult) // on remplace dans le tableInt, les 2 élements par le résultat de l'opération
                    tableOperateurs.splice(parseInt(i),1)// on retire l'opérateur en question
                    console.log(tableInt)
                    console.log(tableOperateurs)
                    i=-1 // on recommence le parcours de la boucle for à 0, pour
                    break
                case "/": //idemn pour l'opérateur /
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
    // quand tableOperateur ne contient plus les opérateurs prioritaires, on exécute les calculs des autres opérateurs dans l'ordre, selon le même principe, mais sans retirer l'opérateur
    for (let j=0;j<tableOperateurs.length;j++){
        console.log(`j=${j}`);
        console.log(`element=${tableOperateurs[j]}`)
        console.log(parseFloat(tableInt[j]))
        console.log(parseFloat(tableInt[j+1]))
        switch (tableOperateurs[j]){
            case "+":
                operationResult=parseFloat(tableInt[j])+parseFloat(tableInt[parseInt(j)+1])
                tableInt.splice(parseInt(j),2,operationResult)
                tableOperateurs.splice(parseInt(j),1)
                console.log(tableInt)
                console.log(tableOperateurs)
                j=-1
                break
            case "-":
                operationResult=parseFloat(tableInt[j])-parseFloat(tableInt[parseInt(j)+1])
                tableInt.splice(parseInt(j),2,operationResult)
                tableOperateurs.splice(parseInt(j),1)
                console.log(tableInt)
                console.log(tableOperateurs)
                j=-1
                break    
        }
    }   
    
    console.log(operationResult)
    return operationResult

}


const parenthisisPriorities=(tableOperateurs, tableInt)=>{
    while (tableOperateurs.includes("(")){
        console.log(tableOperateurs)
        console.log(tableInt)
        let indexOP=parseInt(tableOperateurs.indexOf("("))
        let indexCP=parseInt(tableOperateurs.indexOf(")"))
        console.log(`indexOP=${indexOP}`)
        console.log(`indexCP=${indexCP}`)
        let newTableOperateurs=tableOperateurs.slice(indexOP+1,indexCP)
        console.log(newTableOperateurs)
        let newTableInt=tableInt.slice(indexOP,indexCP)
        console.log(newTableInt)
        let parenthisisResult=resultDisplay(newTableOperateurs,newTableInt)
        tableOperateurs.splice(indexOP,(indexCP-indexOP)+1)
        tableInt.splice(indexOP,(indexCP-indexOP),parenthisisResult)
        inputOperateur=tableOperateurs
        inputInt=tableInt
        console.log(inputOperateur)
        console.log(inputInt)
    }

}

// parenthisisPriorities(['(','+','-','*',')','+','*','-','(','*',')'],['1', '2', '3', '4', '2', '4', '3', '6'])


const allFunctions=()=>{
    screen.innerHTML=""
    parenthisisPriorities(inputOperateur,inputInt)
    screen.innerHTML=resultDisplay(inputOperateur,inputInt)
    

}

buttonEqual.addEventListener("click",allFunctions)


// resultDisplay(['+', '*', '/'],['1', '2', '3', '4'])