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
    var fsession = session.fsession;
    var userName = session.ORG_NM;
    var s = ("svr=WS_000010" + "&fsession=" + fsession + "&userName=" + userName);
    var URL = "/webservice/?" + s;
    setInterval(test(), 1000);
    function test() {
        $.ajax({
            type: "get", //请求的方式，也有get请求
            url: URL,
            async: true,
            dataType: "json", //json格式，后台返回的数据为json格式的。
            success: function (result) {
                dataObj = result; //返回的result为json格式的数据)
            }
        })
    }
})
function hide() {
    var a = document.getElementById("hide");
    var div = document.getElementsByClassName("left")[0];
    var iframe = document.getElementsByClassName("center")[0];
    if (a.src == "img/left.png") {
        a.src = "img/right.png";
        div.style.display = "none";
        iframe.style.width = "1870px";
    }
    else {
        a.src = "img/left.png";
        div.style.display = "block";
        iframe.style.width = "1628px";
    }

}