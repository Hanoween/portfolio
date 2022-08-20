new fullpage('#fullPage', {
    licenseKey: "KG3FH-7EPZ8-K1UNH-TJ4GI-NDKYL",
    autoScrolling: true,
})

let i = 0
var dropbtn = document.querySelectorAll(".dropbtn");
dropbtn.forEach((element) => {
    hover(element, i);
    i++;
});

function hover(element, i) {
    element.addEventListener("mouseover", () => {
        dropbtn.forEach((manga) => {
            manga.style.zIndex = "1";
        });
        element.style.zIndex = "3";
        document.querySelectorAll("#myDropdown")[i].classList.toggle("show");
        element.style.webkitFilter = "brightness(120%)";
    });
};

window.addEventListener("mouseover", (event) => {
    if (!event.target.matches('.dropbtn')) {
        var dropdown = document.querySelectorAll(".dropdown-content, .sidedrop-content");
        dropdown.forEach((drop) => {
            if (drop.classList.contains("show")) drop.classList.remove("show");
        })
        dropbtn.forEach((image) => {
            image.style.webkitFilter = null;
            image.style.zIndex = null;
        });
    }
});

