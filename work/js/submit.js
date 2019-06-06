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
    //$("#submit").click(function () {
    //    //获取fsession
    //    var aCookie = GetCookie('wytSession');
    //    session = eval('(' + aCookie + ')');
    //    if (session) {
    //        if (session.fsession == "undefined") {
    //            window.open('login.html', '_self');
    //            return;
    //        }
    //    }
    //    else {
    //        window.open('login.html', '_self');
    //        return;
    //    }
    //    var fsession = session.fsession;
    //    var userName = session.User_NM;
    //    var s = ("svr=WS_00002" + "&fsession=" + fsession + "&userName=" + userName);
    //    var URL = "/webservice/?" + s;
    //    var form = new FormData();
    //    if ($("#file")[0].files.length > 0) {
    //        for (var i = 0; i < $("#file")[0].files.length; i++) {
    //            var reader = new FileReader();
    //            reader.readAsDataURL($("#file")[0].files[i]);
    //            reader.onload = function (e) {
    //                var data = '';
    //                data += e.target.result + '!@#$%^&*';
    //                buildJson(data);
    //            }
    //        }
    //    }
    //    else {
    //        var data = '';
    //        buildJson(data);
    //    }
    //    function buildJson(data) {
    //        let title = document.getElementsByClassName('title')[0].value;
    //        let particular = document.getElementById('icon').value;
    //        var std = JSON.stringify({});
    //        var stdTemplate = JSON.parse(std);
    //        var level = document.getElementsByClassName('level')[0];
    //        if (title !== '' && particular !== '') {
    //            stdTemplate.title = title;
    //            stdTemplate.content = particular;
    //            stdTemplate.pic = data;
    //            stdTemplate.level = level.value;
    //            form.append("data", (JSON.stringify(stdTemplate)));
    //            $.ajax({
    //                type: 'post',
    //                url: URL,
    //                contentType: "application/json",//如果想以json格式把数据提交到后台的话，这个必须有，否则只会当做表单提交
    //                data: form,
    //                cache: false,
    //                processData: false,
    //                contentType: false,
    //                dataType: "json",//期待返回的数据类型
    //                success: function (msg) {
    //                    if (msg.ret.id == '1') {
    //                        alert('上传成功');
    //                    } else {
    //                        alert('上传失败');
    //                    }
    //                },
    //                error: function () {
    //                    alert("请求失败");
    //                }
    //            });
    //        } else {
    //            alert("标题和内容不能为空")
    //        }
    //    }
    //});
    $("#submit").click(function () {
        //获取fsession
        let _title = document.getElementsByClassName('title')[0].value;
        let _icon = document.getElementById('icon');
        if (_icon.innerText === '' || _title === ''){
            console.log(_title);
            console.log(_icon.innerText);
            console.log(_icon.innerHTML);
            console.log(_icon.value);
            alert('标题或者内容为空');
        } else {
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
            var s = ("svr=WS_00017" + "&fsession=" + fsession + "&userName=" + userName);
            var URL = "/webservice/?" + s;
            var form = new FormData();
            //document.addEventListener('paste', function (event) {
            //    var items = (event.clipboardData || window.clipboardData).items;
            //    var file = null;
            //    var num = '';
            //    if (items && items.length) {
            //        // 搜索剪切板items
            //        for (var i = 0; i < items.length; i++) {
            //            if (items[i].type.indexOf('image') !== -1) {
            //                file = items[i].getAsFile();
            //                break;
            //            }
            //        }
            //        console.log(file);
            //        num = items.length;
            //    }
            //    if (!file) {
            //        return;
            //    }
            //    // 此时file就是我们的剪切板中的图片对象
            //    // 如果需要预览，可以执行下面代码
            //    var reader = new FileReader()
            //    reader.onload = function (event) {
            //        preview.innerHTML = '<img src="' + event.target.result + '" class="upload-image">';
            //    }
            //    reader.readAsDataURL(file);
            //});
            $("#file").each(function () {
                if ($("#file")[0].files.length > 0) {
                    for (var i = 0; i < $("#file")[0].files.length; i++) {
                        var file = $("#file")[0].files[i];
                        buildJson(file);
                    }
                }
                else {
                    var file = "";
                    buildJson(file);
                }
            });
            $.ajax({
                type: "POST",
                url: URL,
                data: form,
                dataType: "json",
                cache: false,
                processData: false,
                contentType: false,
                success: function (msg) {
                    if (msg.ret.id == '1') {
                        alert('上传成功');
                    } else {
                        alert('上传失败');
                    }
                },
                error: function () {
                    alert("请求失败");
                }
            });
            function buildJson(file) {
                var title = document.getElementsByClassName('title')[0].value;
                var particular = document.getElementById('icon').value;
                var level = document.getElementsByClassName('level')[0].value;
                var std = JSON.stringify({});
                var stdTemplate = JSON.parse(std);
                stdTemplate.title = title;//标题
                stdTemplate.content = particular;//内容
                stdTemplate.level = level;//紧急度
                if (form.get("data") != null) {
                    form.append("files", file);
                }
                else {
                    form.append("data", (JSON.stringify(stdTemplate)));
                    form.append("files", file);
                }
            }
        }

    });
});
