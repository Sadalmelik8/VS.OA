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
    $("#submit").click(function () {
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
        var userName = session.User_NM;
        _template1 = buildJson();
        var s = ("svr=WS_00002" + "&fsession=" + fsession + "&userName=" + userName);
        var URL = "/webservice/?" + s;
        var form = new FormData();
        form.append("data", (JSON.stringify(_template1)));
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
                if (msg.status == 'ok') {
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
    });
    function buildJson() {
        let title = document.getElementsByClassName('title')[0].value;
        let particular = document.getElementById('icon').value;
        var std = JSON.stringify({});
        var stdTemplate = JSON.parse(std);
        stdTemplate.title = title;
        stdTemplate.content = particular;
        stdTemplate.pic = "";
        return stdTemplate;
    }
});
