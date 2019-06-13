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





//获取cookkie
function GetCookie(key) {
    var aCookie = document.cookie.split("; ");
    for (var i = 0; i < aCookie.length; i++) {
        var aCrumb = aCookie[i].split("=");
        if (key == aCrumb[0]) {
            return unescape(aCrumb[1]);
        }
    }
}
$(document).ready(function () {
    //获取fsession
    var aCookie = GetCookie('wytSession');
    session = eval('(' + aCookie + ')');
    if (session) {
        if (session.fsession == "undefined") {
            window.open('login.html', '_self');
            return;
        }
    }
    else {
        window.open('login.html', '_self');
        return;
    }
})
// function hide() {
//     var a = document.getElementById("hide");
//     var div = document.getElementsByClassName("left")[0];
//     var iframe = document.getElementsByClassName("center")[0];
//     if (a.src == window.location.origin + "/img/left.png") {
//         a.src = window.location.origin + "/img/right.png";
//         div.style.display = "none";
//         iframe.style.width = "1870px";
//     }
//     else {
//         a.src = window.location.origin + "/img/left.png";
//         div.style.display = "block";
//         iframe.style.width = "1628px";
//     }
//
// }
function hide() {
    var a = document.getElementById("hide");
    var div = document.getElementsByClassName("left")[0];
    var iframe = document.getElementsByClassName("center")[0];
    let td = document.getElementsByClassName("firsttd")[0];
    if (a.src == window.location.origin + "/img/left.png") {
        a.src = window.location.origin + "/img/right.png";
        div.style.display = "none";
        iframe.style.width = "100%";
        td.style.display = 'none';
    }
    else {
        a.src = window.location.origin + "/img/left.png";
        div.style.display = "block";
        div.style.width = "113%";
        iframe.style.width = "100%";
        td.style.display = 'block';
    }

}
