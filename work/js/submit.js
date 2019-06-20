let _click = function(){
    let category = document.getElementsByClassName("category")[0];
        category.style.display = "inline-block";
        //获取fsession
        var aCookie = GetCookie('wytSession');
        session = eval('(' + aCookie + ')');
        if (session) {
            if (session.fsession == "undefined") {
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
        // _template1 = buildJson();
        var s = ("svr=WS_00002" + "&fsession=" + fsession + "&userName=" + userName);
        var URL = "/webservice/?" + s;
        // var form = new FormData();
        // form.append("data", (JSON.stringify(_template1)));
        $.ajax({
            type: "post", //请求的方式，也有get请求
            url: URL, //请求地址，后台提供的,这里我在//本地自己建立了个json的文件做例子
            contentType: "application/json",
            data: {},//data是传给后台的字段，后台需要哪些就传入哪些
            cache: false,
            processData: false,
            contentType: false,
            dataType: "json", //json格式，后台返回的数据为json格式的。
            success: function (result) {
                let con = '';
                dataObj = result;
                $.each(dataObj.ret[1], function (index, item) {
                    con += "<span class='system'>" + item + "</span>";
                });
                con+= "<span class='system' id='cancel'>" +"取消"+ "</span>";
                $('.category').html(con);

                $(".system").click(function (e) {
                    let type = e.target.innerHTML;
                    con = '';
                    $.each(dataObj.ret[0][type],function (index, item) {
                        con += "<span class='subclass'>" + item + "</span>";
                    });
                    con+= "<span class='subclass' id='back'>" +"返回"+ "</span>";
                    $('.category').html(con);
                    $("#back").click(function () {
                        _click();
                    });
                    $(".subclass").click(function (e) {
                        if (e.target.innerHTML == '返回') {
                            document.getElementById("click").innerHTML = "请选择问题类别";
                        }else {
                            document.getElementById("click").innerHTML = e.target.innerHTML;
                            document.getElementsByClassName("category")[0].style.display = 'none';
                        }
                    });
                });
                $("#cancel").click(function () {
                    category.style.display = 'none';
                });
                console.log(2);
                // $("#back").click(function () {
                //     console.log(1);
                // });

            }
        });
        function buildJson() {
            // var std = JSON.stringify({});
            // var stdTemplate = JSON.parse(std);
            // stdTemplate.num = oltid;
            // return stdTemplate;
        }
};
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
    $("#click").click(function () {
_click();
    });
    $("#submit").click(function () {
       //获取fsession
       var aCookie = GetCookie('wytSession');
       session = eval('(' + aCookie + ')');
       if (session) {
           if (session.fsession == "undefined") {
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
       var s = ("svr=WS_00002" + "&fsession=" + fsession + "&userName=" + userName);
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
           var level = document.getElementsByClassName('level')[0];
           if (title !== '' && particular !== '') {
               stdTemplate.title = title;
               stdTemplate.content = particular;
               stdTemplate.pic = data;
               stdTemplate.level = level.value;
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
                       } else {
                           alert('上传失败');
                       }
                   },
                   error: function () {
                       alert("请求失败");
                   }
               });
           } else {
               alert("标题和内容不能为空")
           }
       }
    });
    document.addEventListener('paste', function (event) {
        var items = (event.clipboardData || window.clipboardData).items;
        var filed = null;
        if (items && items.length) {
            // 搜索剪切板items
            for (var i = 0; i < items.length; i++) {
                if (items[i].type.indexOf('image') !== -1) {
                    filed = items[i].getAsFile();
                    break;
                }
            }
        }
        else {
            alert("当前浏览器不支持");
            return;
        }
        if (!filed) {
            alert("粘贴内容非图片");
            return;
        }
        // 此时file就是我们的剪切板中的图片对象
        // 如果需要预览，可以执行下面代码
        var reader = new FileReader();
        reader.onload = function (event) {
            for (var i = 0; i < 6; i++) {
                var img = document.getElementsByClassName('imgs')[i];
                //后期修改
                //后期修改
                //后期修改
                //后期修改
                //后期修改
                if (img.src == document.location.href) {
                    img.src = event.target.result;
                    img.style.display = "inline-block";
                    document.getElementsByClassName('copy')[0].style.display = 'none';
                    return;
                }
            }
        };
        reader.readAsDataURL(filed);
    });
    $(document).ready(function () {
        $('.imgs').click(function (e) {
            $('body').keydown(function (event) {
                if (event.keyCode == 8) {
                    e.target.src = document.location.href;
                    if (e.target) {
                        e.target.style.display = "none";
                        e.target = "";
                        return;
                    }
                }
            })
            return;
        })
    });
    $("#submit").click(function () {
        //获取fsession
        let _title = document.getElementsByClassName('title')[0].value;
        let _icon = document.getElementById('icon').value;
        if (_icon === '' || _title === '') {
            alert('标题或者内容为空');
        }
        else {
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
            var s = ("svr=WS_00017" + "&fsession=" + fsession + "&userName=" + userName);
            var URL = "/webservice/?" + s;
            var form = new FormData();
            for (var i = 0; i < 6; i++) {
                var img = document.getElementsByClassName('imgs')[i].src;
                if (img != document.location.href) {
                    var file = '';
                    buildJson(file, img);
                }
            }
            $("#file").each(function () {
                if ($("#file")[0].files.length > 0) {
                    for (var i = 0; i < $("#file")[0].files.length; i++) {
                        var file = $("#file")[0].files[i];
                        var img = '';
                        buildJson(file, img);
                    }
                }
                else {
                    var file = "";
                    var img = '';
                    buildJson(file, img);
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
                        window.open('problem.html', '_parent');
                    } else {
                        alert('上传失败');
                    }
                },
                error: function () {
                    alert("请求失败");
                }
            });
            function buildJson(file, img) {
                var title = document.getElementsByClassName('title')[0].value;
                var particular = document.getElementById('icon').value;
                var level = document.getElementsByClassName('level')[0].value;
                var std = JSON.stringify({});
                var stdTemplate = JSON.parse(std);
                stdTemplate.title = title;//标题
                stdTemplate.content = particular;//内容
                stdTemplate.level = level;//紧急度
                if (form.get("data") != null) {
                    if (file == "" && img != "") {
                        form.append("pic", img);
                    }
                    if (img == "" && file != "") {
                        form.append("files", file);
                    }
                    if (file != "" && img != "") {
                        form.append("pic", img);
                        form.append("files", file);
                    }
                    if (form.get("files") == null) {
                        form.append("files", file);
                    }
                    if ((form.get("pic") == null)) {
                        form.append("pic", img);
                    }
                }
                else {
                    form.append("data", (JSON.stringify(stdTemplate)));
                    if (file == "" && img != "") {
                        form.append("pic", img);
                    }
                    if (img == "" && file != "") {
                        form.append("files", file);
                    }
                    if (file != "" && img != "") {
                        form.append("pic", img);
                        form.append("files", file);
                    }
                }
            }
        }

    });
});
