// Window Objects

    let win = window;

    // win = window.alert("hey");

    // win = window.confirm("Have you had your dinner");

    // win = window.prompt("Please enter something");

    // val = window.print();

    win = window.outerWidth;
    win = window.innerWidth;

    win = window.outerHeight;
    win = window.innerHeight;

    win = window.scrollX;
    win = window.scrollY;

    console.log(win);

// Location Objects

    let loc = window.location;

    // loc.href = "https://github.com";

    // loc.reload()


    console.log(loc);


// Navigator Objects

    let nav = window.navigator;

    nav = window.navigator.userAgent;

    nav = window.navigator.cookieEnabled;

    nav = window.navigator.language;

    nav = window.navigator.onLine;

    console.log(nav);


// History Objects

    let his = window.history;

    his = window.history.length;

    // window.history.go(5);

    console.log(his);

// ______________________________________________________________________________



    let element = document.createElement("h1");

        // element.innerText = "hi";
        // element.textContent = "hay";
        // element.innerHTML = "hello";

    console.log(element);

    let cls = element.className;

        element.className = "sth";

    console.log(cls);

    let id = element.id;

        element.id = "sthid"

    console.log(id);

    let textnode = document.createTextNode("What's up");

    console.log(textnode);

    element.append(textnode);

    let div = document.querySelector("div");

    console.log(div);

    console.log(document.body);

    let divele = document.body.querySelector("div");

    console.log(divele);

    document.querySelector("body").replaceChild(element,div);

    element.remove();