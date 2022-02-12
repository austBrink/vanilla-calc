//create letiable for displaying current expression...
let displayString = "";


//create structure for saving expression...
let currentExpression = []; // clear button access 
let clearBtn = document.getElementById("clear");
//signaling if operator was pressed. Don't allow consecutive operations.
let operatorPressed = true;
//get readouts 
let display = document.getElementById("readout");
let record = document.getElementById("record");
//?
let text = "";
let decimalBtn = document.getElementById("dec");
//signal if decimal was pressed. Cannot duel decimal in same number.
let hasDecimal = false;

//clear clears readouts and resets the signals on special buttons to allow pressing/onclick again. Also resets storage array for expression.
clearBtn.addEventListener("click", ()=>{
    currentExpression=[];
    display.innerText = "";
    record.innerText = "";
    text = "";
    hasDecimal = false;
    operatorPressed = false;
    hasNumber = false;
});

let negateBtn = document.getElementById("negpos");
//negate the readout conent when negative positve toggle is triggered.
negateBtn.addEventListener("click",()=>{
    if(hasNumber == true){
        let disInt = parseFloat(display.innerText);
    disInt = disInt * -1;
    display.innerText = disInt;
    }  
});
decimalBtn.addEventListener("click", ()=>{
    if(hasDecimal == false){
        let addText = display.innerText + decimalBtn.textContent;
        display.innerText = addText;
        hasDecimal = true;
    }
});
//for the number buttons.
let numberBtns = document.getElementsByClassName("numButton");

//need to let the code know I depressed a number. If I have, then allow operation. if not, do not allow operation. 
let hasNumber = false;

//looping through to add listeners.
for(let i =0; i<numberBtns.length; i++){
    numberBtns[i].addEventListener("click",()=>{
        //enable double and more digits...
        text = display.innerText + numberBtns[i].textContent;
        display.innerText = text;
        //reenable ability to press operators since number has been pressed.
        operatorPressed=false;
        //I have pressed a number. 
        hasNumber = true;
        //exp.push(this.textContent);
    });
}

// number type 
//hit opertator saves into array both the curent display and the operation. clears screen. and back to base. 

let operationBtns = document.getElementsByClassName("operator");

//get an array ready for storing what's going into it. Only need this now that we 


for(let i =0; i < operationBtns.length; i++){
    operationBtns[i].addEventListener("click",()=>{
        //condition one. prevent consecutive operators in expression. condition 2 check to see if preceded by number... 
        if(operatorPressed==false && hasNumber == true){
            //save off what loaded in display...
            let prevNum = display.innerText;
            currentExpression.push(prevNum);
            currentExpression.push(operationBtns[i].textContent);
            display.textContent="";
            //add record of what we are doing.... 
            record.innerText=prevNum + operationBtns[i].textContent;
            hasDecimal = false;
            operatorPressed=true;
            hasNumber = false;
        }
    });
}

//decimal handling...
decimalBtn.addEventListener("click", ()=>{
    if(hasDecimal ==false){
        let addText = display.innerText + decimalBtn.textContent;
        display.innerText = addText;
        hasDecimal = true;
    } 
});

//EQUALS FUNCTIONALITY. 


//this whole thing is trash.... why is it so bloody long? THIS NEEDS REWRITTEN! 

let equalsBtn = document.getElementById("equal");

equalsBtn.onclick = function(){

    //dont even execute unless we have entered a number LAST...
    if(hasNumber == true){
        
    //asssuming result is 0 to start.
    let result = 0;
    //get whatever is on screen from last button press...
    let lastNum = display.innerText;
    //add that last number into the expression array..
    currentExpression.push(lastNum);

    //get a string ready 
    let tempString = "";

    //what?? A. for the superscript in the upper left.
    for(let i =0; i < currentExpression.length; i++){ 
      tempString = tempString + currentExpression[i];
    }

    record.innerText = tempString + "=";
    tempString = tempString + lastNum;
    display.innerText = tempString;

    let x = 0;
    let y = 0;

    // if exp array is less that 2 in length... my funky algorithm right here 
       for (let i=0; i<currentExpression.length-2; i++){
           if(!(currentExpression[i]=="+") && !(currentExpression[i]=="-") && !(currentExpression[i]=="*") && !(currentExpression[i]=="/")){
               x = parseFloat(currentExpression[i]);
               y = parseFloat(currentExpression[i+2]);
               switch(currentExpression[i+1]){
                    case "+":
                        result = x + y;
                    break;
                    case "-":
                        //this is trash...What if x and y are decimals
                        result = x-y;
                        break;
                    case "*":
                        //more trash
                        result = x*y;
                        break;
                    case "/":
                        //why do you code trash?
                        result = x/y;
                        break;
                    }
                currentExpression[i+2] = result;
       }
   }
   //what if just a number and then the equals sign?? 
   if(currentExpression.length == 1){
       result = lastNum;
   }
   display.innerText = result;
   currentExpression=[];
    }
}

