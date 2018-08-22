var clicker = document.getElementById("click");
var total = document.getElementById("result");
var balance = 0;
//Balance is the value whenever the eventlistener is activated
clicker.addEventListener("click", function(){
    total.innerHTML=balance=balance+1;
    //for the value to show, it has to increment and be in innerHTML.
    console.log("hello");
    console.log('balance', balance)
    //Have to console log balance to display value.
})


