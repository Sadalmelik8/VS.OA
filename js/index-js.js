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




//获取fsession
var Fsession = function () {
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
}
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
    Fsession();
})
function hide() {
    var a = document.getElementById("hide");
    var div = document.getElementsByClassName("left")[0];
    var iframe = document.getElementsByClassName("center")[0];
    if (a.src == "file:///C:/Users/Administrator/Desktop/login/img/left.png") {
        a.src = "file:///C:/Users/Administrator/Desktop/login/img/right.png";
        div.style.display = "none";
        iframe.style.width = "1870px";
    }
    else {
        a.src = "file:///C:/Users/Administrator/Desktop/login/img/left.png";
        div.style.display = "block";
        iframe.style.width = "1628px";
    }

}