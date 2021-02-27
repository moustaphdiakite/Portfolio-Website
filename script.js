let imgTarget = document.getElementById("image1");
let imgTarget2 = document.getElementById("image2");

function summaryDisplay() {
    document.getElementById("project-summary").style.display = "flex"
}

function summaryDisplayNone() {
    document.getElementById("project-summary").style.display = "none"
}

imgTarget.addEventListener("mouseover", summaryDisplay);
imgTarget.addEventListener("mouseleave", summaryDisplayNone);
imgTarget2.addEventListener("mouseover", summaryDisplay);
imgTarget2.addEventListener("mouseleave", summaryDisplayNone);