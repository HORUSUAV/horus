/*
window.onload = function () {
    const nameList = [
        "ayberk",
        "can",
        "emre",
        "umut",
        "ekin",
        "samil",
        "burak",
        "cagin"
    ];
    console.log("Selam konsolda birsey mi yazdik diye baktigini goruyorum.")
    var ayberkImg = document.getElementById("ayberkDiv");
    var umutImg = document.getElementById("umutDiv");
    var ekinImg = document.getElementById("ekinDiv");
    var samilImg = document.getElementById("samilDiv");
    var burakImg = document.getElementById("burakDiv");
    var caginImg = document.getElementById("caginDiv");
    var canImg = document.getElementById("canImage");
    var emreImg = document.getElementById("emreDiv");
    if (ayberkImg) {
        ayberkImg.addEventListener("click", function () {
            if (document.getElementById("ayberk").children[2].style.display === "block") {
                document.getElementById("ayberk").children[2].style.display = "none"

            } else {
                document.getElementById("ayberk").children[2].style.display = "block"
            }
        })
    }
    if (umutImg) {
        umutImg.addEventListener("click", function () {
            if (document.getElementById("umut").children[2].style.display === "block") {
                document.getElementById("umut").children[2].style.display = "none"

            } else {
                document.getElementById("umut").children[2].style.display = "block"
            }
        })
    }
    if (canImg) {
        console.log("can")
        canImg.addEventListener("click", function () {
            if (document.getElementById("can").children[2].style.display === "block") {
                document.getElementById("can").children[2].style.display = "none"

            } else {
                document.getElementById("can").children[2].style.display = "block"
            }
        })
    }
    if (emreImg) {
        emreImg.addEventListener("click", function () {
            if (document.getElementById("emre").children[2].style.display === "block") {
                document.getElementById("emre").children[2].style.display = "none"

            } else {
                document.getElementById("emre").children[2].style.display = "block"
            }
        })
    }
    if (caginImg) {
        caginImg.addEventListener("click", function () {
            if (document.getElementById("cagin").children[2].style.display === "block") {
                document.getElementById("cagin").children[2].style.display = "none"

            } else {
                document.getElementById("cagin").children[2].style.display = "block"
            }
        })
    }
    if (burakImg) {
        burakImg.addEventListener("click", function () {
            if (document.getElementById("burak").children[2].style.display === "block") {
                document.getElementById("burak").children[2].style.display = "none"

            } else {
                document.getElementById("burak").children[2].style.display = "block"
            }
        })
    }
    if (samilImg) {
        samilImg.addEventListener("click", function () {
            if (document.getElementById("samil").children[3].style.display === "block") {
                document.getElementById("samil").children[3].style.display = "none"

            } else {
                document.getElementById("samil").children[3].style.display = "block"
            }
        })
    }
    if (ekinImg) {
        ekinImg.addEventListener("click", function () {
            if (document.getElementById("ekin").children[2].style.display === "block") {
                document.getElementById("ekin").children[2].style.display = "none"

            } else {
                document.getElementById("ekin").children[2].style.display = "block"
            }
        })
    }
}
*/
$(document).ready(function () {

    var btn = $(".btn");

    btn.click(function () {
        $(".col-content p").toggle("slow");

        $(this).css({
            "background-color": "#614E9C",
            "color": "#fff"
        });

        if ($(this).text() === "AYRINTILI B??LG??") {
            $(this).html("AYRINTILARI G??ZLE");
        }

        else {
            $(this).html("AYRINTILI B??LG??");
        }
    });

    btn.hover(function () {
        $(this).css({
            "background-color": "#eaeaea",
            "color": "#333",
            "cursor": "pointer"
        })
    }, function(){
            $(this).css({
                "background-color": "#614E9C",
                "color": "#fff"
            });
        });
        
       
    //Img hover information. Buggy, not recommended to use
    /*
    img.hover(function(){
        let next = $(this).next();
        let parag = next.children("p");

        if( $(parag).attr("value")==1){
        }
        else {
            $(parag).toggle("slow");
        }
        
    });*/

    // img hover visuals + new test
    var img = $(" .imgDiv");
    img.hover(function(){
        $(this).css("background-color", "purple");
        let next = $(this).next();
        let parag = next.children("p");

        if( $(parag).attr("value")==1 &&  $(parag).attr("clickedwhilevisible")==1){
        }
        else if((parag).attr("value")==1){

        }
        else {
            $(parag).toggle("slow");
        }

        }, function(){
            let next = $(this).next();
        let parag = next.children("p");
        $(this).css("background-color", "transparent");

        if( $(parag).attr("clickedwhilevisible")==1){
            //console.log("check clickedwhilevisible");
            //console.log($(parag).attr("clickedwhilevisible"));
            $(parag).attr("clickedwhilevisible", "0");
        }
        else if((parag).attr("value")==1){
        }
        else{
            $(parag).toggle("slow");
        }
      });

    //Img click information
    img.click(function(){
        let next = $(this).next();
        let parag = next.children("p");
        if($(parag).is(":visible") && $(parag).attr("value")==1){
            $(parag).attr("clickedwhilevisible", "1");
            $(parag).attr("value","0");
            $(parag).toggle("slow");
           }
        else if($(parag).is(":visible")){
         $(parag).attr("value", "1");
         $(parag).attr("clickedwhilevisible", "1");

         }
         
        if(!$(parag).is(":visible")){
            $(parag).attr("value", "1");
            $(parag).toggle("slow");
        }

            //console.log($(parag).attr("clickedwhilevisible"));

    
        
     });
    


});
