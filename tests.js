equalsBtn.addEventListener("click",()=>{
    if(hasNumber){
        displayEval();
        evaluateExpression()  
}
});

function displayEval(){
     //all this was literaslly for ==
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
}

function evaluateExpression(){
//asssuming result is 0 to start.
let result = 0;
let x = 0;
let y = 0;

//an algorithm for evaluate...Loop through the expression except for last two. That will be last operation and last number....
   for (let i=0; i<currentExpression.length-2; i++){
       //if we have landed on a number...in otherwords if we are not on a valid operator then we want to proceed...
       if(!["+","-","*","/"].includes(currentExpression[i])){
           x = +currentExpression[i];
           y = +currentExpression[i+2];
           switch(currentExpression[i+1]){
                case "+":
                    result = x + y;
                break;
                case "-":
                    //this is trash...What if x and y are decimals
                    result = x - y;
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


//OLD CODE 
