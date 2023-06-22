
let celsius =document.getElementById("celsius");
let fahrenherit =document.getElementById("fahrenherit");



function celTofar()
{
    let output = (parseFloat(celsius.value)*9/5)+32;

    fahrenherit.value = parseFloat(output.toFixed(2));

    //console.log(output);
}
function farTocel()
{
    let output = (parseFloat(fahrenherit.value) - 32) * 5/9;
    celsius.value = parseFloat(output.toFixed(2));
    
   // console.log(output);
}