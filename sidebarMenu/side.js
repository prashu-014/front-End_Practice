let navbar = document.getElementById("nav");
let toggle = document.getElementById("toggle");

toggle.addEventListener("click",function()
{
    navbar.classList.toggle("sidebar");
});