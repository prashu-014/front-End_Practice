let generateBtn = document.getElementById("generate");



function validate()
{
    
    let min = document.getElementById("min").value;
    let max = document.getElementById("max").value;

    min.trim();
    max.trim();

    if(min === "" || max === " ")
    {
        alert('Please Enter the number');
    }

}

function random()
{
    let min = document.getElementById("min");
    let max = document.getElementById("max");


    console.log(min+max);

   
    let minValue = Number(min.value);
        let maxValue = Number(max.value);

        if(minValue > maxValue)
        {
            minValue = maxValue + minValue ;
            maxValue = minValue - maxValue ;
            minValue = minValue - maxValue ;

            min.value = minValue ;
            max.value = maxValue ;

        }

        let num = Math.floor(Math.random() * (maxValue - minValue +1 )) + minValue ;

        document.getElementById("result").innerText = num ; 


}


// on refresh value blank
function refresh()
{
   document.getElementById("min").value= "";
   document.getElementById("max").value= "";
   document.getElementById("result").innerText = 0;

}



// work on the window refresh button 
//window.addEventListener("load",random());


 generateBtn.addEventListener("click",random);

