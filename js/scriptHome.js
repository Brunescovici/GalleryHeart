//vars

const artPics = document.getElementsByClassName("art_pic");
const noneText = document.getElementById("noneLeft");
const seeMore = document.getElementById("seeMoreButton");

//functions

function checkArtLeft() {
    if(artPics.length == 0)
        noneText.style.display = "block";
    else
        noneText.style.display = "none";
}

function openGalleryPage() {
    window.open("gallery.html", "_self");
}

// event listeners

seeMore.addEventListener("click", openGalleryPage);

// page loaded

document.onload = checkArtLeft();
