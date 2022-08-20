let value = 0;
let display = document.getElementById('display');

function displayFunc(value){

    if(display.innerHTML.length < 20){
        if(value == "+" || value == "/" || value == "*" ){
            if(display.innerHTML.match(/[\+\/\*]/) == null && display.innerHTML !== "0" ) {
                display.innerHTML += value;
            }
        }else if(value == "-"){
            if(display.innerHTML == "0"){
                display.innerHTML = value;
                }else if(display.innerHTML.match(/\-$/) !== null){
                    value = "";
                }else{
                    display.innerHTML += value;
                }
        }else if(value == "00"){
            if(display.innerHTML !== "0" ) {
                display.innerHTML += value;
            }
        }else{
            if(display.innerHTML == "0"){
            display.innerHTML = value;
            }else{
                display.innerHTML += value;
            }
        }
    }
}

function clearDisplay(){
    display.innerHTML = 0;
}

function resultDisplay(){
    display.innerHTML = eval(display.innerHTML);
}