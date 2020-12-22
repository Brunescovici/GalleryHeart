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
    document.querySelectorAll(".art_pic").forEach(function(item) {
        item.addEventListener('click', function() {
            picLink = item.src;
            openBuyMenu();
        });
    });
}

//vars

const artPics = document.getElementsByClassName("art_pic");
const paintings = document.getElementsByClassName("painting");
const photographies = document.getElementsByClassName("photography");
const digitalArts = document.getElementsByClassName("digitalArt");
const medias = document.getElementsByClassName("media");
const filters = document.getElementsByClassName("filter");
const noneText = document.getElementById("noneLeft");
let x = 0, picLink;

//functions

function setPicture(data) {
    if(data.id < 200) {
        const Template = document.querySelector("#artPics_temp").content;
        const cloneArt = Template.cloneNode(true);
        cloneArt.querySelector(".art_pic").src = data.media_details.sizes.full.source_url;
        const parentCont = document.querySelector(".art_cont");
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
    document.getElementById("artDesc_cont").style.display = "none";
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
    document.getElementById("artDesc_cont").style.display = "none";
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
    document.getElementById("artDesc_cont").style.display = "none";
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
    document.getElementById("artDesc_cont").style.display = "none";
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
    document.getElementById("artDesc_cont").style.display = "none";
}

function openBuyMenu() {
    resetFilter();
    document.getElementById("artDesc_cont").style.display = "flex";
    document.querySelector("#picShortInfo_cont img").src = picLink;
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


// page loaded

document.onload = checkArtLeft();
