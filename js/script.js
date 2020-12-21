//vars

const artPics = document.getElementsByClassName("art_pic");
const paintings = document.getElementsByClassName("painting");
const photographies = document.getElementsByClassName("photography");
const digitalArts = document.getElementsByClassName("digitalArt");
const medias = document.getElementsByClassName("media");
const filters = document.getElementsByClassName("filter");

//functions

function resetFilter() {
    for(var i=0; i<artPics.length; i++)
        artPics[i].style.display = "none";
    for(var i=0; i<filters.length; i++)
        filters[i].classList.remove("selected");
}

function filterPainting() {
    resetFilter();
    for(var i=0; i<paintings.length; i++)
        paintings[i].style.display = "block";
    document.querySelector("#painting_filter").classList.add("selected");
}

function filterPhotography() {
    resetFilter();
    for(var i=0; i<photographies.length; i++)
        photographies[i].style.display = "block";
    document.querySelector("#photography_filter").classList.add("selected");
}

function filterDigitalArt() {
    resetFilter();
    for(var i=0; i<digitalArts.length; i++)
        digitalArts[i].style.display = "block";
    document.querySelector("#digitalArt_filter").classList.add("selected");
}

function filterMedia() {
    resetFilter();
    for(var i=0; i<medias.length; i++)
        medias[i].style.display = "block";
    document.querySelector("#media_filter").classList.add("selected");
}

function filterAll() {
    for(var i=0; i<artPics.length; i++)
        artPics[i].style.display = "block";
    for(var i=0; i<filters.length; i++)
        filters[i].classList.remove("selected");
    document.querySelector("#allArt_filter").classList.add("selected");
}

// event listeners

document.querySelector("#painting_filter").addEventListener("click", filterPainting);
document.querySelector("#photography_filter").addEventListener("click", filterPhotography);
document.querySelector("#digitalArt_filter").addEventListener("click", filterDigitalArt);
document.querySelector("#media_filter").addEventListener("click", filterMedia);
document.querySelector("#allArt_filter").addEventListener("click", filterAll);
