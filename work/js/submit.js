$(document).ready(function () {
    $("#submit").click(function () {
        var aCookie = GetCookie('wytSession');
        session = aCookie;
        var fsession = session.fsession;
        var userName = session.User_NM;
        _template1 = buildJson();
        var s = ("svr=WS_00002" + "&fsession=" + fsession + "&userName=" + userName);
        var URL = "/WS/?" + s;
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
        let num = document.getElementsByClassName('title')[0].id;
        let particular = document.getElementById('icon').value;
        var std = JSON.stringify({});
        var stdTemplate = JSON.parse(std);
        stdTemplate.num = num;
        stdTemplate.content = particular;
        return stdTemplate;
    }
});
