let imgTarget = document.getElementById("image1");
let imgTarget2 = document.getElementById("image2");

function summaryDisplay() {
    document.getElementById("project-summary").style.display = "flex"
}

imgTarget.addEventListener("mouseover", summaryDisplay);
imgTarget2.addEventListener("mouseover", summaryDisplay);
