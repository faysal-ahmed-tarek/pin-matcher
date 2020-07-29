var generate_button = document.querySelector(".generate_btn");
var generate_input = document.querySelector(".generate_input");

var PIN_NUMBER = "";
generate_button.addEventListener("click",function(){
    var random_number = Math.floor(Math.random()* (10000 - 1000) + 1000);
    PIN_NUMBER = random_number ;
    generate_input.value = PIN_NUMBER ;

})


var check_input = document.querySelector(".check_input");
var submit = document.querySelector(".submit_btn");
var button = document.querySelectorAll(".button");

var displayValue = "";

for(var i = 0; i < button.length; i++){
    button[i].addEventListener("click",function(){
        var btnInnerText = event.target.innerHTML ;
        displayValue += btnInnerText ;
        check_input.value = displayValue ; 
    })
}

    submit.addEventListener("click",function(){
    if(generate_input.value.length === 0){
            alert("please generate pin number");
            }
            else if(PIN_NUMBER == displayValue){
            document.querySelector(".alert").style.display = "none";
            document.querySelector(".success").style.display = "block";
            }
            else{
            document.querySelector(".success").style.display = "none";
            document.querySelector(".alert").style.display = "block";
            }
    })

//clear Button
var clear_button = document.querySelector(".clear");
clear_button.addEventListener("click",function(){
    displayValue = " " ;
    check_input.value = displayValue ; 
})
//backspace Button
var backspace_button = document.querySelector(".backspace");
backspace_button.addEventListener("click",function(){
    displayValue = displayValue.slice(0,displayValue.length-1);
    check_input.value = displayValue ; 
})