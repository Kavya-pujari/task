var input=document.getElementById("input_value");
var output= document.getElementById("output");
var from= document.getElementById("from");
var to= document.getElementById("to");
var clear= document.getElementById("clear");

let temp;
to.value= 'farenhite';

input.addEventListener('input',function(){
    if(from.value=='celsius' && to.value=='farenhite')
    {
        temp= input.value;
        output.value= (temp * 9/5) + 32;
    }

    if(from.value=='farenhite' && to.value=='celsius')
    {
        temp= input.value;
        output.value= (temp - 32) * 5/9 ;
    }
    if(from.value==to.value)
    {
        output.value= input.value;
    }

});

clear.addEventListener('click',function(){
    console.log("pressed");
     input.value=0;
     output.value= 0;
});