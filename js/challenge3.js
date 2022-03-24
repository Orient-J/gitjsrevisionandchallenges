const getamount = document.getElementById("getamount");

const getunit = document.querySelectorAll(".unit");

const setamount = document.getElementsByClassName("setamount");

console.log(getunit);

let getinfo = ()=>{

    if(getunit[0].value !== "choose unit") {

        let amountvalue = getamount.value;
        let unitvalue = getunit[0].value;

        console.log(amountvalue);
        console.log(unitvalue);


    }// console.log(getunit[0].);

};

// console.log(getunit[0].querySelectorAll(".un"));

let uns = getunit[0].querySelectorAll(".un");

let nus = getunit[1].querySelectorAll(".un");
// uns.forEach(function(un,idx){
//
//     console.log(un.value);
//
// });

uns.forEach(function(un,idx){

    if(un.value === getunit.value){
        console.log("hay");
    }

});