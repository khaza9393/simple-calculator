
function evalExpression(){
    let expression=document.getElementById("display").value;
    let result=0;
    try{
        result=eval(expression);
        document.getElementById("display").value=result;
    }
    catch(error){
        document.getElementById("display").value="error";
       
    }
    }
    function clearDisplay(){
        document.getElementById("display").value="";

    }
   function appendNumber(num){
    document.getElementById("display").value += num;
    
}
function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}
function appendOperator(op){
    document.getElementById("display").value +=op;
}