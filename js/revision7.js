let tag = document.createElement("div");

let createtext = document.createTextNode("Testing Js");

tag.appendChild(createtext);

tag.classList.add("plane");

tag.style.border = "1px solid black";

tag.style.width = "200px";

tag.style.height = "300px";

tag.style.margin = "auto";

document.body.style.height = "100vh";

document.body.style.overflow = "hidden";

// document.body.style.transition = "0.1s";

document.body.appendChild(tag);

let calldiv = document.querySelector("div");

calldiv.addEventListener("mousemove",changecolor);

function changecolor(e){

    // console.log(calldiv.innerText);

    calldiv.textContent = `Cordinate X : ${e.offsetX} & Coordinate Y : ${e.offsetY}`;

    // document.body.style.backgroundColor = `#${e.offsetX}${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},e`;
};

console.log(calldiv);

console.log(tag);
