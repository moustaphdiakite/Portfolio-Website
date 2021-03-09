const dropMenu = document.getElementById("dropdown-content");

const dropButton = document.getElementById("dropdownbutton");


function showDropdown() {
    dropMenu.classList.toggle("show");
}


dropButton.addEventListener("mouseover", showDropdown);


window.onclick = function(event) {
    if (!event.target.matches(".dropdownbutton")) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show")
            }
        }
    }
}