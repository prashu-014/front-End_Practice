let box = document.querySelector(".colorBox"),
        input = document.querySelector("input");

    input.addEventListener("input", () => {
        box.style.backgroundColor = input.value;
        box.style.borderRadius = input.value;
    });