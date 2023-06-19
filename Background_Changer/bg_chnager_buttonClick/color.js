let btns = document.getElementsByClassName("btn");

for(let i = 0; i<btns.length; i++)
{
    btns[i].addEventListener("click",function()
    {
        let buttonstyle = getComputedStyle(this);
        let buttonBgColor = buttonstyle["backgroundColor"];

        document.body.style.backgroundColor = buttonBgColor;
    }
    );

}