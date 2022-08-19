let value = 0
let display = document.getElementById('display');
let buttons = document.getElementById('buttons');

function displayFunc(value){
    // 文字列だったら1個まで制限
    // 表示関連

    if(display.innerHTML.length < 20){
        if(value == "+" || value == "-" || value == "/" || value == "×" ){
            if(display.innerHTML.match(/[+/×-]/) == null && display.innerHTML !== "0" ) {
                value = display.innerHTML + value;
                display.innerHTML = value;
            }
        }else if(value == "00"){
            if(display.innerHTML !== "0" ) {
                value = display.innerHTML + value;
                display.innerHTML = value;
            }
        }else{
            if(display.innerHTML == "0"){
            display.innerHTML = value;
            }else{
            value = display.innerHTML + value;
            display.innerHTML = value;
            }
        }
    }
}

function clearDisplay(){
    display.innerHTML = 0;
}

function resultDisplay(){
    if(display.innerHTML.indexOf("+") !== -1 ){
        splitNum = display.innerHTML.split(/[+/×-]/);
        splitNumInt = splitNum.map(Number);
        result = splitNumInt[0] + splitNumInt[1];
        display.innerHTML = result;
    }else if(display.innerHTML.indexOf("-") !== -1 ){
        splitNum = display.innerHTML.split(/[+/×-]/);
        splitNumInt = splitNum.map(Number);
        result = splitNumInt[0] - splitNumInt[1];
        display.innerHTML = result;
    }else if(display.innerHTML.indexOf("×") !== -1 ){
        splitNum = display.innerHTML.split(/[+/×-]/);
        splitNumInt = splitNum.map(Number);
        result = splitNumInt[0] * splitNumInt[1];
        display.innerHTML = result;
    }else if(display.innerHTML.indexOf("/") !== -1 ){
        splitNum = display.innerHTML.split(/[+/×-]/);
        splitNumInt = splitNum.map(Number);
        result = splitNumInt[0] / splitNumInt[1];
        display.innerHTML = result;
    }
}