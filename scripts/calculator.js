var arg1;
var arg2;
var operation;

function operationHandler(op){

    arg1 = document.getElementById('display').textContent;
    operation = op;
    clearButtonHandler();
}

function equalsHandler(){

    var result;

    arg2 = document.getElementById('display').textContent;

    if (operation === '+') result = parseFloat(arg1) + parseFloat(arg2);
    if (operation === '-') result = parseFloat(arg1) - parseFloat(arg2);
    if (operation === '*') result = parseFloat(arg1) * parseFloat(arg2);
    if (operation === '/') result = parseFloat(arg1) / parseFloat(arg2);

    document.getElementById('display').textContent = result;
    arg1=result;

}

function clearButtonHandler(){
    document.getElementById('display').textContent='';
}

function numberButtonHandler(n){
    document.getElementById('display').textContent += n;
}