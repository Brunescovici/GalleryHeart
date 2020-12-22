//fetch

window.addEventListener("DOMContentLoaded", getData);

function getData() {
    fetch("https://viburnumnoctis.com/wp/wp-json/wp/v2/media")
        .then(res => res.json())
        .then(data => showData(data));
}

function showData(data) {
    data.forEach(setPicture);
    checkArtLeft();
}


//vars

const noneText = document.getElementById("noneLeft");
const seeMore = document.getElementById("seeMoreButton");
let x = 0;

//functions

function setPicture(data) {
    if(data.id < 200) {
        const Template = document.querySelector("#artPics_temp").content;
        const cloneArt = Template.cloneNode(true);
        cloneArt.querySelector(".art_pic").src = data.media_details.sizes.full.source_url;
        const parentCont = document.querySelector(".recentArtwork_picCont");
        parentCont.appendChild(cloneArt);
        x=1;
    }
}

function checkArtLeft() {
    if(x == 0)
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
