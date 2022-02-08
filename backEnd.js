//for displaying expression
var displayString = "";
//for saving expression and appending...
var exp = []; // clear button access 
var clear = document.getElementById("clear");
//signaling if operator was pressed. Don't allow consecutive operations.
var operatorPressed = true;
//get readouts 
var display = document.getElementById("readout");
var rcrd = document.getElementById("record");
//?
var text = "";
var deci = document.getElementById("dec");
//signal if decimal was pressed. Cannot duel decimal in same number.
var deciPrsd = false;

//clear clears readouts and resets the signals on special buttons to allow pressing/onclick again. Also resets storage array for expression.
clear.onclick = function(){
    exp=[];
    display.innerText = "";
    rcrd.innerText = "";
    text = "";
    deciPrsd = false;
    operatorPressed = false;
    numPrsd = false;
}

var negPos = document.getElementById("negpos");
//negate the readout conent when negative positve toggle is triggered.
negPos.onclick = function(){
    if(numPrsd == true){
        var disInt = parseFloat(display.innerText);
    disInt = disInt * -1;
    display.innerText = disInt;
    } 
}

deci.onclick = function(){
    if(deciPrsd ==false){
        var addText = display.innerText + this.textContent;
        display.innerText = addText;
        deciPrsd = true;
    }
}

//for the number buttons.
var btns = document.getElementsByClassName("numButton");

//need to let the code know I depressed a number. If I have, then allow operation. if not, do not allow operation. 
var numPrsd = false;

//looping through to add listeners.
for(let i =0; i<btns.length; i++){
    btns[i].addEventListener("click",function(){
        //enable double and more digits...
        text = display.innerText + this.textContent;
        display.innerText = text;
        //reenable ability to press operators since number has been pressed.
        operatorPressed=false;
        //I have pressed a number. 
        numPrsd = true;
        //exp.push(this.textContent);
    });
}

// number type 
//hit opertator saves into array both the curent display and the operation. clears screen. and back to base. 

var ops = document.getElementsByClassName("operator");

//get an array ready for storing what's going into it. Only need this now that we 


for(let i =0; i < ops.length; i++){
    ops[i].addEventListener("click",function(){
        //condition one. prevent consecutive operators in expression. condition 2 check to see if preceded by number... 
        if(operatorPressed==false && numPrsd == true){
            //save off what loaded in display...
            let prevNum = display.innerText;
            exp.push(prevNum);
            exp.push(this.textContent);
            display.textContent="";
            //add record of what we are doing.... 
            rcrd.innerText=prevNum + this.textContent;
            deciPrsd = false;
            operatorPressed=true;
            numPrsd = false;
        }
    });
}

//decimal handling...
deci.onclick = function(){
    if(deciPrsd ==false){
        var addText = display.innerText + this.textContent;
        display.innerText = addText;
        deciPrsd = true;
    }
}

//      EQUALS FUNCTIONALITY. 

var eq = document.getElementById("equal");

eq.onclick = function(){

    //dont even execute unless we have entered a number LAST...
    if(numPrsd == true){
        
    //asssuming result is 0 to start.
    var result = 0;
    //get whatever is on screen from last button press...
    var lastNum = display.innerText;
    //add that last number into the expression array..
    exp.push(lastNum);

    //get a string ready 
    let myString = "";

    //what?? A. for the superscript in the upper left.
    for(let i =0; i < exp.length; i++){ 
      myString = myString + exp[i];
    }

    rcrd.innerText = myString + "=";
    myString = myString + lastNum;
    display.innerText = myString;

    var x = 0;
    var y = 0;
    // if exp array is less that 2 in length... my funky algorithm right here 
       for (let i=0; i<exp.length-2; i++){
           if(!(exp[i]=="+") && !(exp[i]=="-") && !(exp[i]=="*") && !(exp[i]=="/")){
               x = parseFloat(exp[i]);
               y = parseFloat(exp[i+2]);
               switch(exp[i+1]){
                    case "+":
                        result = x + y;
                    break;
                    case "-":
                        result = x-y;
                        break;
                    case "*":
                        result = x*y;
                        break;
                    case "/":
                        result = x/y;
                        break;
                    }
                exp[i+2] = result;
       }
   }
   //what if just a number and then the equals sign?? 
   if(exp.length == 1){
       result = lastNum;
   }
   display.innerText = result;
   exp=[];
    }
}

