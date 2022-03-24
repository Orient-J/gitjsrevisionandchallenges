// FUNCTION

    // Manuel Function

        function funone(){
            console.log("hay");
        };

        funone();

        function funtwo(){

            let x = 3;

            return x;
        };

        funtwo();
        console.log(funtwo());

    // Parameter Function

        // Single

            function funthree(para1){

                console.log(para1);
            };

            funthree("kyaw pyae sone");

        // Multi

            function funfour(para1,para2){

                return para1 + para2;
            };

            console.error(funfour(50,60));

        // Default

            function funfive(para1, para2 = 50){

                return para1 * para2;
            };

            console.log(funfive(2));

    // Constructor Function

        const funsix = new Function("a","b","c", "return a+b+c");

        console.log(funsix("kyaw",20,true));

    // Nameless Function

        const funseven = function(){

            console.log("hi");
        };

        funseven();


    // Self Invoking Function

        (function(){
            console.log("hello");
        })();


    // Arrow Funtion

        const funarr = ()=>{
            console.log("whats up");
        };

        funarr();


let arrfunthree = ()=> (
    {
        name : "Aung Aung",
        age : 25
    }
);

console.log("this is arr function without parameter = " + arrfunthree())