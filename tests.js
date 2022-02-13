
for(const btn of numberBtns){
    btn.addEventListener("click",()=>{
        //enable double and more digits...
        text = display.innerText + btn.textContent;
        display.innerText = text;
        //reenable ability to press operators since number has been pressed.
        operatorPressed=false;
        //I have pressed a number. 
        hasNumber=true;
        //exp.push(this.textContent);
    });
}



for(let i =0; i<numberBtns.length; i++){
    numberBtns[i].addEventListener("click",()=>{
    //enable double and more digits...
    text = display.innerText + numberBtns[i].textContent;
    display.innerText = text;
    //reenable ability to press operators since number has been pressed.
    operatorPressed=false;
    //I have pressed a number. 
    hasNumber=true;
    //exp.push(this.textContent);
});
}