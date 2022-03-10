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
            if (document.getElementById("ayberk").style.display === "block") {
                document.getElementById("ayberk").style.display = "none"

            } else {
                document.getElementById("ayberk").style.display = "block"
            }
        })
    }
    if (umutImg) {
        umutImg.addEventListener("click", function () {
            if (document.getElementById("umut").style.display === "block") {
                document.getElementById("umut").style.display = "none"

            } else {
                document.getElementById("umut").style.display = "block"
            }
        })
    }
    if (canImg) {
        console.log("can")
        canImg.addEventListener("click", function () {
            if (document.getElementById("can").style.display === "block") {
                document.getElementById("can").style.display = "none"

            } else {
                document.getElementById("can").style.display = "block"
            }
        })
    }
    if (emreImg) {
        emreImg.addEventListener("click", function () {
            if (document.getElementById("emre").style.display === "block") {
                document.getElementById("emre").style.display = "none"

            } else {
                document.getElementById("emre").style.display = "block"
            }
        })
    }
    if (caginImg) {
        caginImg.addEventListener("click", function () {
            if (document.getElementById("cagin").style.display === "block") {
                document.getElementById("cagin").style.display = "none"

            } else {
                document.getElementById("cagin").style.display = "block"
            }
        })
    }
    if (burakImg) {
        burakImg.addEventListener("click", function () {
            if (document.getElementById("burak").style.display === "block") {
                document.getElementById("burak").style.display = "none"

            } else {
                document.getElementById("burak").style.display = "block"
            }
        })
    }
    if (samilImg) {
        samilImg.addEventListener("click", function () {
            if (document.getElementById("samil").style.display === "block") {
                document.getElementById("samil").style.display = "none"

            } else {
                document.getElementById("samil").style.display = "block"
            }
        })
    }
    if (ekinImg) {
        ekinImg.addEventListener("click", function () {
            if (document.getElementById("ekin").style.display === "block") {
                document.getElementById("ekin").style.display = "none"

            } else {
                document.getElementById("ekin").style.display = "block"
            }
        })
    }
}
