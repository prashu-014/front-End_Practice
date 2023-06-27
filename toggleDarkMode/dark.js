



// togglebtn.addEventListener('click', function handleClick() {

// });



function toggle() {
    let body = document.body;
    var togglebtn = document.getElementById("togglebtn");

    // dark mode using toggle 
    body.classList.toggle("darkmode");



    // button text change on click 
    const intialText = "Dark Mode";

    if (togglebtn.textContent.toLowerCase().includes(intialText.toLowerCase())) {
        togglebtn.textContent = "Light Mode";

    }
    else {
        togglebtn.textContent = intialText;
    }

}

