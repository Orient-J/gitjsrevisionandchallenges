const gettext = document.getElementById("text");

const text = "EID MUBANAK";

let textarr = Array.from(text);

console.log(textarr);

textarr.forEach(function(textval,idx){
    // console.log(textval);
    // console.log(`<span>${textval}</span>`);

    let spantag = document.createElement("span");

    spantag.appendChild(document.createTextNode(textval));

    spantag.setAttribute("style",`animation-duration:0.8s;animation-delay: ${idx}s`);

    gettext.appendChild(spantag);

    console.log(spantag);

});

let btn = document.getElementsByTagName("button")[0];

btn.addEventListener("click",function(){

    if(gettext.classList.contains("active")){

        gettext.classList.remove("active");
        btn.innerText = "Click To See Animation";

    }else{

        gettext.classList.add("active");
        btn.textContent = "Remove Animation";
    }


});




