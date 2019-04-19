//function hide() {
//    var a = document.getElementById("hide");
//    var div = document.getElementsByClassName("left")[0];
//    var iframe = document.getElementsByClassName("center")[0];
//    if (a.innerText == "收起") {
//        a.innerText = "展开"
//        div.style.display = "none";
//        iframe.style.width = "1870px";

//    }
//    else {
//        a.innerText = "收起"
//        div.style.display = "block";
//        iframe.style.width = "1628px";
//    }
//}

function hide() {
    var a = document.getElementById("hide");
    var div = document.getElementsByClassName("left")[0];
    var iframe = document.getElementsByClassName("center")[0];
    if (a.src == "http://localhost:54450/img/left.png") {
        a.src = "http://localhost:54450/img/right.png";
        div.style.display = "none";
        iframe.style.width = "1870px";
    }
    else {
        a.src = "http://localhost:54450/img/left.png";
        div.style.display = "block";
        iframe.style.width = "1628px";
    }

}