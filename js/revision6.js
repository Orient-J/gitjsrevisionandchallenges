// Event

    let eventsee = document.querySelector(".event");
    let divsee = document.querySelector(".div");
    let inputsee = document.querySelector(".input");

    eventsee.addEventListener("click",showevent);
    divsee.addEventListener("mousedown",showevent);
    inputsee.addEventListener("keyup",showevent);

    function showevent(e){
        console.log(e);
        console.log(e.type);
        console.log(e.handled);
        e.preventDefault();

        if(e.button === 0){
            console.log(e.button + " is left button");
        }else if(e.button === 1){
            console.log(e.button + " is middle button")
        }else if(e.button === 2){
            console.log(e.button + " is right button")
        }
    };

    const clickdiv = document.querySelector(".divclick");
    const btnpara = document.querySelector(".parabtn");


    clickdiv.addEventListener("mouseup",clickdivtag);
    btnpara.addEventListener("click",clickbtntag);

    function clickdivtag(e){
        console.log(e.type + "this is div click")
    };

    function clickbtntag(e){
        console.log(e.type + "this is btn click");
    };

