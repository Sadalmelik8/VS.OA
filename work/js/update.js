// 获取从上个页面传过来的服务名称
let url = window.location.search; //获取url中"?"符后的字串
let oltid = url.substr(url.indexOf("=") + 1);
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
    var reader = new FileReader()
    reader.onload = function (event) {
        for (var i = 0; i < 6; i++) {
            var img = document.getElementsByClassName('imgs')[i];
            //后期修改
            //后期修改
            //后期修改
            //后期修改
            //后期修改
            if (img.src == "http://192.168.5.58:29999/update.html?num=" + oltid) {
                img.src = event.target.result;
                img.style.display = "inline-block";
                document.getElementsByClassName('copy')[0].style.display = 'none';
                return;
            }
        }
    }
    reader.readAsDataURL(filed);
});
$(document).ready(function () {
    $('.imgs').click(function (e) {
        $('body').keydown(function (event) {
            if (event.keyCode == 8) {
                e.target.src = "http://192.168.5.58:29999/update.html?num=" + oltid;
                e.target.style.display = "none";
                return;
            }
        })
        return;
    })
})
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
    var userName = session.User_NM;
    var s = ("svr=WS_00010" + "&fsession=" + fsession + "&userName=" + userName);
    var URL = "/webservice/?" + s;
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
            var dataObj = result;
            $.each(dataObj.ret.username, function (index, item) {
                var option = document.createElement("option");
                $(option).val(item);
                $(option).text(item);
                $('#presents').append(option);
            })
        }
    });
    var con = '';
    var cond = '';
    var coned = '';
    var conds = '';
    var cons = '';
    var coneds = '';
    var title = document.getElementsByClassName('title')[0];
    var presents = document.getElementsByClassName('present')[0];
    var contents = document.getElementsByClassName('contents')[0];
    var remarks = document.getElementsByClassName('title')[1];
    var level = document.getElementsByClassName('bottom--middle__urgency')[0];
    _template1 = buildJson();
    var s = ("svr=WS_00006" + "&fsession=" + fsession + "&userName=" + userName);
    var URL = "/webservice/?" + s;
    var form = new FormData();
    form.append("data", (JSON.stringify(_template1)));
    $.ajax({
        type: "post", //请求的方式，也有get请求
        url: URL, //请求地址，后台提供的,这里我在//本地自己建立了个json的文件做例子
        contentType: "application/json",
        data: form,//data是传给后台的字段，后台需要哪些就传入哪些
        cache: false,
        processData: false,
        contentType: false,
        dataType: "json", //json格式，后台返回的数据为json格式的。
        success: function (result) {
            var dataObj = result; //返回的result为json格式的数据
            title.value = dataObj.ret[0].title;
            presents.value = dataObj.ret[0].executor;
            remarks.value = dataObj.ret[0].remarks;
            if (dataObj.ret[0].level == null) {
                level.value = 1;
            } else {
                level.value = dataObj.ret[0].level;
            }
            con = "<li class='detailed--icon'>"
                + "<div class='firstdate'>"
                + "<span>"
                + dataObj.ret[0].proposetime.substr(0, 4)
                + '/' + dataObj.ret[0].proposetime.substr(4, 2)
                + '/' + dataObj.ret[0].proposetime.substr(6, 2)
                + "</span>"
                + "<span>" + dataObj.ret[0].proposetime.substr(8, 2)
                + ':' + dataObj.ret[0].proposetime.substr(10, 2)
                + ':' + dataObj.ret[0].proposetime.substr(12, 2) + "</span>"
                + "<span>" + dataObj.ret[0].introducer + "</span>"
                + "</div>"
                + "<div class='firsticon'><span>"
                + dataObj.ret[0].content
                + "</span>"
                + "<div class='firstpic'>"
                + "</div>"
                + "<div class='firstfile'>"
                + "</div>"
                + "</div>"
                + "</li>";
            for (var i = 0; i < eval('(' + dataObj.ret[0].files + ')').pic.length; i++) {
                cond += "<img class='pics' src=download/" + eval('(' + dataObj.ret[0].files + ')').pic[i].dir + "/>";
            }
            for (var i = 0; i < eval('(' + dataObj.ret[0].files + ')').nopic.length; i++) {
                conds += "<a href=download/" + eval('(' + dataObj.ret[0].files + ')').nopic[i].dir + ">" + eval('(' + dataObj.ret[0].files + ')').nopic[i].fn + "</a>";
            }
            $('#detailed').html(con);
            $('.firstpic').html(cond);
            $('.firstfile').html(conds);
            //if (dataObj.ret[0].pic.split('!@#$%^&*')[0] == '') {
            //    document.getElementsByClassName('pics')[0].style.display = 'none';
            //}
            if (dataObj.ret.length > 1) {
                $.each(dataObj.ret[1].contents, function (index, item) {
                    cons += "<li class='detailed-icon' >"
                        + "<div class='firstdate'><span>"
                        + item.submittime.substr(0, 4)
                        + '/' + item.submittime.substr(4, 2)
                        + '/' + item.submittime.substr(6, 2)
                        + "</span>"
                        + "<span>"
                        + item.submittime.substr(8, 2)
                        + ':' + item.submittime.substr(10, 2)
                        + ':' + item.submittime.substr(12, 2)
                        + "</span>"
                        + "<span>" + item.submitter + "</span>"
                        + "</div>"
                        + "<div class='firsticon'><span>"
                        + item.contents
                        + "</span>"
                        + "<div class='firstpic'>"
                        + "</div>"
                        + "<div class='firstfile'>"
                        + "</div>"
                        + "</div>"
                        + "</li>";
                    $("#detalis").html(cons); //把内容入到这个div中
                });
                $.each(dataObj.ret[1].contents, function (index, item) {
                    for (var i = 0; i < eval('(' + item.files + ')').pic.length; i++) {
                        coned += "<img class='pics' src=download/" + eval('(' + item.files + ')').pic[i].dir + "/>";
                    }
                    for (var i = 0; i < eval('(' + item.files + ')').nopic.length; i++) {
                        coneds += "<a  href=download/" + eval('(' + item.files + ')').nopic[i].dir + ">" + eval('(' + item.files + ')').nopic[i].fn + "</a>";
                    }
                    document.getElementsByClassName('firstpic')[index + 1].innerHTML = coned;
                    coned = '';
                    document.getElementsByClassName('firstfile')[index + 1].innerHTML = coneds;
                    coneds = '';
                });
                for (var i = 0; i < document.getElementsByClassName('pics').length; i++) {
                    //后期修改
                    //后期修改
                    //后期修改
                    //后期修改
                    //后期修改
                    if (document.getElementsByClassName('pics')[i].src == ('http://192.168.5.58:29999/update.html?num=' + oltid)) {
                        document.getElementsByClassName('pics')[i].style.display = 'none';
                    }
                }
            }
            $(".pics").click(function (e) {
                var img = document.getElementById("big");
                let big = document.getElementsByClassName("big")[0];
                big.style.display = "inline-block";
                img.src = e.target.src;
            })

        }
    });
    function buildJson() {
        var std = JSON.stringify({});
        var stdTemplate = JSON.parse(std);
        stdTemplate.num = oltid;
        stdTemplate.sts = 1;
        return stdTemplate;
    }
    $('#present').click(function () {
        //var fsession = session.fsession;
        //var userName = session.User_NM;
        //var s = ("svr=WS_00007" + "&fsession=" + fsession + "&userName=" + userName);
        //var URL = "/webservice/?" + s;
        //var form = new FormData();
        //if ($("#file")[0].files.length > 0) {
        //    for (var i = 0; i < $("#file")[0].files.length; i++) {
        //        var reader = new FileReader();
        //        reader.readAsDataURL($("#file")[0].files[i]);
        //        reader.onload = function (e) {
        //            var data = '';
        //            data += e.target.result + '!@#$%^&*';
        //            buildJson(data);
        //        }
        //    }
        //}
        //else {
        //    var data = '';
        //    buildJson(data);
        //}
        //function buildJson(data) {
        //    var std = JSON.stringify({});
        //    var stdTemplate = JSON.parse(std);
        //    stdTemplate.executor = presents.value;
        //    stdTemplate.num = oltid;
        //    stdTemplate.contents = contents.value;
        //    stdTemplate.remarks = remarks.value;
        //    stdTemplate.level = level.value;
        //    stdTemplate.pic = data;
        //    form.append("data", (JSON.stringify(stdTemplate)));
        //    $.ajax({
        //        type: 'post',
        //        url: URL,
        //        contentType: "application/json",//如果想以json格式把数据提交到后台的话，这个必须有，否则只会当做表单提交
        //        data: form,
        //        cache: false,
        //        processData: false,
        //        contentType: false,
        //        dataType: "json",//期待返回的数据类型
        //        success: function (msg) {
        //            if (msg.ret.id == '0') {
        //                alert('上传失败');
        //            }
        //            else {
        //                alert('上传成功');
        //            }
        //        },
        //        error: function () {
        //            alert("请求失败");
        //        }
        //    });
        //}

        var fsession = session.fsession;
        var userName = session.User_NM;
        var s = ("svr=WS_00007" + "&fsession=" + fsession + "&userName=" + userName);
        var URL = "/webservice/?" + s;
        var form = new FormData();
        for (var i = 0; i < 6; i++) {
            var img = document.getElementsByClassName('imgs')[i].src;
            if (img != 'http://192.168.5.58:29999/update.html?num=' + oltid) {
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
                    window.open('problem.html', '_self');
                } else {
                    alert('上传失败');
                }
            },
            error: function () {
                alert("请求失败");
            }
        });
        function buildJson(file, img) {
            var std = JSON.stringify({});
            var stdTemplate = JSON.parse(std);
            stdTemplate.executor = presents.value;//受理人
            stdTemplate.num = oltid;//num
            stdTemplate.contents = contents.value;//追加内容
            stdTemplate.remarks = remarks.value;//备注
            stdTemplate.level = level.value;//紧急度
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
    });
    $('#problemState').click(function () {
        var fsession = session.fsession;
        var userName = session.User_NM;
        _template1 = buildJson();
        var s = ("svr=WS_00008" + "&fsession=" + fsession + "&userName=" + userName);
        var URL = "/webservice/?" + s;
        var form = new FormData();
        form.append("data", (JSON.stringify(_template1)));
        $.ajax({
            type: "post", //请求的方式，也有get请求
            url: URL, //请求地址，后台提供的,这里我在//本地自己建立了个json的文件做例子
            contentType: "application/json",
            data: form,//data是传给后台的字段，后台需要哪些就传入哪些
            cache: false,
            processData: false,
            contentType: false,
            dataType: "json", //json格式，后台返回的数据为json格式的。
            success: function (result) {
                dataObj = result;
                if (dataObj.ret.id == 0) {
                    alert('失败');
                } else {
                    alert('成功');
                }
            }
        });
        function buildJson() {
            var std = JSON.stringify({});
            var stdTemplate = JSON.parse(std);
            stdTemplate.num = oltid;
            return stdTemplate;
        }
    });
    $("#big").click(function () {
        var big = document.getElementById('big');
        let _big = document.getElementsByClassName('big')[0];
        _big.style.display = 'none';
        big.src = '';
    });
    $("#delete").click(function () {
        var big = document.getElementById('big');
        let _big = document.getElementsByClassName('big')[0];
        _big.style.display = 'none';
        big.src = '';
    })
});



