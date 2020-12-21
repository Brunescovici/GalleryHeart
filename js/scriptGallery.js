//vars

const artPics = document.getElementsByClassName("art_pic");
const paintings = document.getElementsByClassName("painting");
const photographies = document.getElementsByClassName("photography");
const digitalArts = document.getElementsByClassName("digitalArt");
const medias = document.getElementsByClassName("media");
const filters = document.getElementsByClassName("filter");
const noneText = document.getElementById("noneLeft");

//functions

function checkArtLeft() {
    if(artPics.length == 0)
        noneText.style.display = "block";
    else
        noneText.style.display = "none";
}

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
    if(paintings.length == 0)
        noneText.style.display = "block";
    else
        noneText.style.display = "none";
}

function filterPhotography() {
    resetFilter();
    for(var i=0; i<photographies.length; i++)
        photographies[i].style.display = "block";
    document.querySelector("#photography_filter").classList.add("selected");
    if(photographies.length == 0)
        noneText.style.display = "block";
    else
        noneText.style.display = "none";
}

function filterDigitalArt() {
    resetFilter();
    for(var i=0; i<digitalArts.length; i++)
        digitalArts[i].style.display = "block";
    document.querySelector("#digitalArt_filter").classList.add("selected");
    if(digitalArts.length == 0)
        noneText.style.display = "block";
    else
        noneText.style.display = "none";
}

function filterMedia() {
    resetFilter();
    for(var i=0; i<medias.length; i++)
        medias[i].style.display = "block";
    document.querySelector("#media_filter").classList.add("selected");
    if(medias.length == 0)
        noneText.style.display = "block";
    else
        noneText.style.display = "none";
}

function filterAll() {
    for(var i=0; i<artPics.length; i++)
        artPics[i].style.display = "block";
    for(var i=0; i<filters.length; i++)
        filters[i].classList.remove("selected");
    document.querySelector("#allArt_filter").classList.add("selected");
    if(artPics.length == 0)
        noneText.style.display = "block";
    else
        noneText.style.display = "none";
}

function openBuyMenu() {
    resetFilter();
    document.getElementById("artDesc_cont").style.display = "flex";
}

function openShopWindow() {
    window.open("shop.html", "_self");
}

// event listeners

document.querySelector("#painting_filter").addEventListener("click", filterPainting);
document.querySelector("#photography_filter").addEventListener("click", filterPhotography);
document.querySelector("#digitalArt_filter").addEventListener("click", filterDigitalArt);
document.querySelector("#media_filter").addEventListener("click", filterMedia);
document.querySelector("#allArt_filter").addEventListener("click", filterAll);
document.getElementById("addToCart").addEventListener("click", openShopWindow);
document.getElementsByClassName("art_pic")[0].addEventListener("click", openBuyMenu);

// page loaded

document.onload = checkArtLeft();
