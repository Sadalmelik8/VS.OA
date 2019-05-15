﻿//获取cookkie
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
    function buildJson() {
        var std = JSON.stringify({});
        var stdTemplate = JSON.parse(std);
        stdTemplate.sts = 0;
        return stdTemplate;
    }
    var fsession = session.fsession;
    var userName = session.User_NM;
    _template1 = buildJson();
    var s = ("svr=WS_00009" + "&fsession=" + fsession + "&userName=" + userName);
    var URL = "/webservice/?" + s;
    var form = new FormData();
    form.append("data", (JSON.stringify(_template1)));
    setInterval(test, 1000);
    function test() {
        $.ajax({
            type: "post", //请求的方式，也有get请求
            url: URL, //请求地址，后台提供的,这里我在//本地自己建立了个json的文件做例子
            data: form,
            async: true,
            contentType: "application/json",
            data: form,//data是传给后台的字段，后台需要哪些就传入哪些
            dataType: "json", //json格式，后台返回的数据为json格式的。
            cache: false,
            processData: false,
            contentType: false,
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
//消息提醒
$(document).ready(function () {
    $("#messge").click(function () {
        let con = '';
        let drop = document.getElementById('drop');
        if (drop.style.display === 'none') {
            drop.style.display = 'block'
        } else {
            drop.style.display = 'none'
        }
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
        function buildJson() {
            var std = JSON.stringify({});
            var stdTemplate = JSON.parse(std);
            stdTemplate.sts = 0;
            return stdTemplate;
        }
        var fsession = session.fsession;
        var userName = session.User_NM;
        _template1 = buildJson();
        var s = ("svr=WS_00009" + "&fsession=" + fsession + "&userName=" + userName);
        var URL = "/webservice/?" + s;
        var form = new FormData();
        form.append("data", (JSON.stringify(_template1)));
        $.ajax({
            type: "post", //请求的方式，也有get请求
            url: URL, //请求地址
            data: form,//data是传给后台的字段，后台需要哪些就传入哪些
            dataType: "json", //json格式，后台返回的数据为json格式的。
            contentType: "application/json",
            cache: false,
            processData: false,
            contentType: false,
            success: function (result) {
                dataObj = result; //返回的result为json格式的数据
                $.each(dataObj.ret, function (index, item) {
                    con += "<div class='icon' id=" + item.num + ">"
                        + "<span class='date'>" + item.data + "</span>"
                        + "<span class='operation'>" + item.username + item.operation + item.title + "</span>"
                        + "</div>";
                    $("#data").html(con)
                })
            }
        });
    });
    let unread = document.getElementsByClassName("unread")[0];
    let read = document.getElementsByClassName("read")[0];
    $(".unread").click(function () {
        read.style.backgroundColor = '#c7c7c7';
        read.style.color = '#fff';
        unread.style.backgroundColor = '#fff';
        unread.style.color = '#555';
        function buildJson() {
            var std = JSON.stringify({});
            var stdTemplate = JSON.parse(std);
            stdTemplate.sts = 0;
            return stdTemplate;
        }
        var fsession = session.fsession;
        var userName = session.User_NM;
        _template1 = buildJson();
        var s = ("svr=WS_00009" + "&fsession=" + fsession + "&userName=" + userName);
        var URL = "/webservice/?" + s;
        var form = new FormData();
        form.append("data", (JSON.stringify(_template1)));
        $.ajax({
            type: "post", //请求的方式，也有get请求
            url: URL, //请求地址
            data: form,//data是传给后台的字段，后台需要哪些就传入哪些
            dataType: "json", //json格式，后台返回的数据为json格式的。
            contentType: "application/json",
            cache: false,
            processData: false,
            contentType: false,
            success: function (result) {
                dataObj = result; //返回的result为json格式的数据
                $.each(dataObj.ret, function (index, item) {
                    con += "<div class='icon' id=" + item.num + ">"
                        + "<span class='date'>" + item.data + "</span>"
                        + "<span class='operation'>" + item.username + item.operation + item.title + "</span>"
                        + "</div>";
                    $("#data").html(con)
                })
            }
        });
    });
    $(".read").click(function () {
        unread.style.backgroundColor = '#c7c7c7';
        unread.style.color = '#fff';
        read.style.backgroundColor = '#fff';
        read.style.color = '#555';
        function buildJson() {
            var std = JSON.stringify({});
            var stdTemplate = JSON.parse(std);
            stdTemplate.sts = 1;
            return stdTemplate;
        }
        var fsession = session.fsession;
        var userName = session.User_NM;
        _template1 = buildJson();
        var s = ("svr=WS_00009" + "&fsession=" + fsession + "&userName=" + userName);
        var URL = "/webservice/?" + s;
        var form = new FormData();
        form.append("data", (JSON.stringify(_template1)));
        $.ajax({
            type: "post", //请求的方式，也有get请求
            url: URL, //请求地址
            data: form,//data是传给后台的字段，后台需要哪些就传入哪些
            dataType: "json", //json格式，后台返回的数据为json格式的。
            contentType: "application/json",
            cache: false,
            processData: false,
            contentType: false,
            success: function (result) {
                dataObj = result; //返回的result为json格式的数据
                $.each(dataObj.ret, function (index, item) {
                    con += "<div class='icon' id=" + item.num + ">"
                        + "<span class='date'>" + item.data + "</span>"
                        + "<span class='operation'>" + item.username + item.operation + item.title + "</span>"
                        + "</div>";
                    $("#data").html(con)
                })
            }
        });
    });
    $(".icon").click(function (e) {
        let num = e.target.id;
        location.href = "update.html?num=" + num;
    })
});
