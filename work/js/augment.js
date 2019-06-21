$(document).ready(function () {
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
    //获取fsession
    var aCookie = GetCookie('wytSession');
    session = eval('(' + aCookie + ')');
    if (session) {
        if (session.fsession == "undefined") {
            window.open('login.html', '_parent');
            return;
        }
        if (session.User_NM) {

        }
        else {
            window.open('login.html', '_parent');
            return;
        }
    }
    else {
        window.open('login.html', '_parent');
        return;
    }
    $("#submit").click(function () {
        //获取fsession
        var aCookie = GetCookie('wytSession');
        session = eval('(' + aCookie + ')');
        if (session) {
            if (session.fsession == "undefined") {
                window.open('login.html', '_parent');
                return;
            }
            if (session.User_NM) {

            }
            else {
                window.open('login.html', '_parent');
                return;
            }
        }
        else {
            window.open('login.html', '_parent');
            return;
        }
        var fsession = session.fsession;
        var userName = session.User_NM;
        var s = ("svr=WS_00011" + "&fsession=" + fsession + "&userName=" + userName);
        var URL = "/webservice/?" + s;
        var form = new FormData();
        if ($("#file")[0].files.length > 0) {
            for (var i = 0; i < $("#file")[0].files.length; i++) {
                var reader = new FileReader();
                reader.readAsDataURL($("#file")[0].files[i]);
                reader.onload = function (e) {
                    var data = '';
                    data += e.target.result + '!@#$%^&*';
                    buildJson(data);
                }
            }
        }
        else {
            var data = '';
            buildJson(data);
        }
        function buildJson(data) {
            let title = document.getElementsByClassName('title')[0].value;
            let particular = document.getElementById('icon').value;
            var std = JSON.stringify({});
            var stdTemplate = JSON.parse(std);
            stdTemplate.title = title;
            stdTemplate.content = particular;
            stdTemplate.pic = data;
            form.append("data", (JSON.stringify(stdTemplate)));
            $.ajax({
                type: 'post',
                url: URL,
                contentType: "application/json",//如果想以json格式把数据提交到后台的话，这个必须有，否则只会当做表单提交
                data: form,
                cache: false,
                processData: false,
                contentType: false,
                dataType: "json",//期待返回的数据类型
                success: function (msg) {
                    if (msg.ret.id == '1') {
                        alert('上传成功');
                    }
                    else {
                        alert('上传失败');
                    }
                },
                error: function () {
                    alert("请求失败");
                }
            });
        }
    });
});
