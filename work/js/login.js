function preLogin() {
    if (event.keyCode == 13) {
        login();
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
var login = function () {
    var rnd = 18181;
    var username = document.getElementById('nm').value;
    var s = "svr=WS_00001&rnd=" + rnd + "&mobile=" + username;
    var URL = "/webservice/?" + s;
    $.ajax({
        type: 'get',
        url: URL,
        datatype: 'json',
        cache: false,
        processData: false,
        contentType: false,
        success: function (msg) {
            try {
                if (msg.status == "ok") {
                    document.cookie = 'wytSession=' + msg.ret.fsession;
                }
            }
            catch (e) { }
        }
    })
}
var logins = function () {
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
    tohtml = "index.html";
    var username = document.getElementById('nm').value;
    var password = document.getElementById('pw').value;
    var s = "svr=WS_00000&mobile=" + username + "&smscode=" + password + "&fsession=" + fsession;
    var URL = "/webservice/?" + s;
    $.ajax({
        type: 'get',
        url: URL,
        datatype: 'json',
        cache: false,
        processData: false,
        contentType: false,
        success: function (msg) {
            try {
                if (msg.status == "ok") {
                    var aCookie = '{\'ORG_NM\':\'' + msg.ret.username;
                    aCookie += '\',\'fsession\':\'' + msg.ret.session;
                    aCookie += '}';
                    var expdate = new Date();
                    expdate.setTime(expdate.getTime() + (86400 * 1000 * 1));
                    document.cookie = 'wytSession=' + escape(aCookie)
                        + ';expires=' + expdate.toGMTString();
                    window.open(tohtml, '_self');
                }
            }
            catch (e) { }
        }
    })
}
$(document).ready(function () {
    var tohtml = "";
    $('#session').click(function () {
        login();
    })
    $('#dl').click(function () {
        logins();
    })
})

