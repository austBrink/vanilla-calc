decimalBtn.onclick = function(){
    if(hasDecimal ==false){
        let addText = display.innerText + this.textContent;
        display.innerText = addText;
        hasDecimal = true;
    }
}

decimalBtn.addEventListener("click", ()=>{
    if(hasDecimal ==false){
        let addText = display.innerText + decimalBtn.textContent;
        display.innerText = addText;
        hasDecimal = true;
    } 
});