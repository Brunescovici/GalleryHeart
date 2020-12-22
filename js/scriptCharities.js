//fetch

window.addEventListener("DOMContentLoaded", getData);

let x;

function getData() {
    fetch("https://viburnumnoctis.com/wp/wp-json/wp/v2/media")
        .then(res => res.json())
        .then(data => showData(data));
}

function getData2(id) {
    fetch("https://viburnumnoctis.com/wp/wp-json/wp/v2/charity/" + id)
        .then(res => res.json())
        .then(data => showData2(data));
}

function showData(data) {
    data.forEach(setCharity);
}

function showData2(data) {
    x = data.title.rendered;
}

function setCharity(data) {
    if(data.id > 200) {
        const Template = document.querySelector("#charities_template").content;
        const cloneArt = Template.cloneNode(true);
        cloneArt.querySelector(".charities_description_cont img").src = data.media_details.sizes.full.source_url;
        getData2(data.id - 1);
        console.log(x);
        const parentCont = document.querySelector(".content_cont");
        parentCont.appendChild(cloneArt);
    }
}

// cloneArt.querySelector(".charities_description_cont h1 i").textContent = data2.title.rendered;
