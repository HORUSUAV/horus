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

        if ($(this).text() === "AYRINTILI BİLGİ") {
            $(this).html("AYRINTILARI GİZLE");
        }

        else {
            $(this).html("AYRINTILI BİLGİ");
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
        
    



});
