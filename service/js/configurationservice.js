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
$(document).ready(function () {
    var datas = "";
    $('#btn').click(function () {
        var data = document.getElementById('data').value;
        var s = "";
        if (data != "") {
            datas += data + "<br/>";
            document.getElementById('get').innerHTML = datas;
            var t = new Date().getTime();
            var URL = "/finservices/?" + data + "&t=" + t;
            $.ajax({
                type: "post",
                url: URL,
                cache: true,
                processData: false,
                contentType: false,
                success: function (msg) {
                    try {
                        s = JSON.stringify(msg);
                        $("#get2").val(s);
                        alert(s);
                    }
                    catch (e) {
                        alert(e);
                    }
                },
                erryFunction() {
                }
            });
        }
    });
    $('#p1').click(function () {
        readInfoToWeb();
    });
    //自动保存
    var readInfoToWeb = function () {
        var file = new File([datas], { type: "text/plain;charset=utf-8" });
        f5();
        console.log(timed);
        saveAs(file, timed);
    };
    // 默认日期
    var f5 = function () {
        var now = new Date();
        var nowTime = now.toLocaleString();
        var date = nowTime.substring(0, 10);//截取日期
        var time = nowTime.substring(14, 20); //截取时间
        var week = now.getDay(); //星期
        var hour = now.getHours(); //小时
        times = date + hour + time;
        timed = "";
        for (var i = 0; i < times.length; i++) {
            timed += times[i];
        }
    }

});
