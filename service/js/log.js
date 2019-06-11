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
//点击获取日志详情
function log(datas) {
    var nms = datas;
    var time = document.getElementById('data').value;
    var year = Math.ceil(time.substr(0, 4));
    var month = Math.ceil(time.substr(5, 2));
    var day = Math.ceil(time.substr(8, 2));
    _template1 = buildJson(nms);
    var s = ("svr=webadmin_00004" + "&fsession=" + fsession);
    var URL = "/webadmin/?" + s;
    var form = new FormData();
    form.append("data", (JSON.stringify(_template1)));
    //日志详情
    $.ajax({
        type: "post", //请求的方式，也有get请求
        url: URL, //请求地址，后台提供的,这里我在本地自己建立了个json的文件做例子
        data: form,//data是传给后台的字段，后台需要哪些就传入哪些
        dataType: "json", //json格式，后台返回的数据为json格式的。
        cache: false,
        processData: false,
        contentType: false,
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
        },
        success: function (result) {
            var icon = document.getElementById('icon');
            var dataObj = result;//返回的result为json格式的数据
            icon.value = dataObj.ret.content;
        }
    });
    function buildJson(nms) {
        var std = JSON.stringify({});
        var stdTemplate = JSON.parse(std);
        stdTemplate.y = year.toString();
        stdTemplate.m = month.toString();
        stdTemplate.d = day.toString();
        stdTemplate.log = nms;
        return stdTemplate;
    }
}

function logs(datas) {
    var nms = datas;
    var time = document.getElementById('data').value;
    var year = Math.ceil(time.substr(0, 4));
    var month = Math.ceil(time.substr(5, 2));
    var day = Math.ceil(time.substr(8, 2));
    _template1 = buildJson(nms);
    var s = ("svr=webadmin_00004" + "&fsession=" + fsession);
    var URL = "/webadmin/?" + s;
    var form = new FormData();
    form.append("data", (JSON.stringify(_template1)));
    //日志详情
    $.ajax({
        type: "post", //请求的方式，也有get请求
        url: URL, //请求地址，后台提供的,这里我在本地自己建立了个json的文件做例子
        data: form,//data是传给后台的字段，后台需要哪些就传入哪些
        dataType: "json", //json格式，后台返回的数据为json格式的。
        cache: false,
        processData: false,
        contentType: false,
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
        },
        success: function (result) {
            var icon = document.getElementById('icon');
            var dataObj = result;//返回的result为json格式的数据
            icon.value = dataObj.ret.content;
        }
    });
    function buildJson(nms) {
        var std = JSON.stringify({});
        var stdTemplate = JSON.parse(std);
        stdTemplate.y = year.toString();
        stdTemplate.m = month.toString();
        stdTemplate.d = day.toString();
        stdTemplate.log = nms;
        return stdTemplate;
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
    fsession = session.fsession;
    let url = window.location.search; //获取url中"?"符后的字串
    let oltid = url.substr(url.indexOf("=") + 1);
    let data = document.getElementById('service');
    data.innerText = oltid;
    var time = new Date();
    var day = time.getDate();
    var month = time.getMonth() + 1;
    var year = time.getFullYear();
    if (month < 10 && day < 10) {
        var today = time.getFullYear() + "-" + ('0' + month) + "-" + ('0' + day);
        $('#data').val(today);
    }
    if (month >= 10 && day >= 10) {
        var today = time.getFullYear() + "-" + (month) + "-" + (day);
        $('#data').val(today);
    }
    if (month >= 10 && day < 10) {
        var today = time.getFullYear() + "-" + (month) + "-" + ('0' + day);
        $('#data').val(today);
    }
    if (month < 10 && day >= 10) {
        var today = time.getFullYear() + "-" + ('0' + month) + "-" + (day);
        $('#data').val(today);
    }
    _template1 = buildJson(oltid);
    var s = ("svr=webadmin_00003" + "&fsession=" + fsession);
    var URL = "/webadmin/?" + s;
    var form = new FormData();
    var arr = [];
    form.append("data", (JSON.stringify(_template1)));
    //默认当天的日志
    $.ajax({
        type: "post", //请求的方式，也有get请求
        url: URL, //请求地址，后台提供的,这里我在本地自己建立了个json的文件做例子
        data: form,//data是传给后台的字段，后台需要哪些就传入哪些
        dataType: "json", //json格式，后台返回的数据为json格式的。
        cache: false,
        processData: false,
        contentType: false,
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
        },
        success: function (result) {
            var dataObj = result;
            var con = '';
            $.each(dataObj.ret.ls, function (indexs, item) {
                // document.getElementById('code').value = dataObj.ret.content;
                arr.push(indexs);
                con += "<li>"
                    + "<span class='log--icon__time' id=" + item.nm + ">" + item.m + "</span>"
                    + "</li>";
                $("#ul").html(con);

                $("span").click(function () {
                    log(this.id);
                });
            });
        }
    });
    function buildJson(oltid) {
        var std = JSON.stringify({});
        var stdTemplate = JSON.parse(std);
        stdTemplate.y = year.toString();
        stdTemplate.m = month.toString();
        stdTemplate.d = day.toString();
        stdTemplate.svr = oltid;
        return stdTemplate;
    }
    //查询某一天的日志
    $('#btn').click(function () {
        var time = document.getElementById('data').value;
        var year = Math.ceil(time.substr(0, 4));
        var month = Math.ceil(time.substr(5, 2));
        var day = Math.ceil(time.substr(8, 2));
        _template1 = buildJson(oltid);
        var s = ("svr=webadmin_00003" + "&fsession=" + fsession);
        var URL = "/webadmin/?" + s;
        var form = new FormData();
        form.append("data", (JSON.stringify(_template1)));
        var arr = [];
        //搜索某一天的日志
        $.ajax({
            type: "post", //请求的方式，也有get请求
            url: URL, //请求地址，后台提供的,这里我在本地自己建立了个json的文件做例子
            data: form,//data是传给后台的字段，后台需要哪些就传入哪些
            dataType: "json", //json格式，后台返回的数据为json格式的。
            cache: false,
            processData: false,
            contentType: false,
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(XMLHttpRequest.status);
            },
            success: function (result) {
                var dataObj = result;
                var con = '';
                document.getElementById('code').value = dataObj.ret.content;
                $.each(dataObj.ret.ls, function (indexs, item) {
                    arr.push(indexs);
                    con += "<li>"
                        + "<span class='log--icon__time' id=" + item.nm + ">" + item.m + "</span>"
                        + "</li>";
                    $("#ul").html(con);
                    $("span").click(function () {
                        logs(this.id);
                    });
                });
            }
        });
        function buildJson(oltid) {
            var std = JSON.stringify({});
            var stdTemplate = JSON.parse(std);
            stdTemplate.y = year.toString();
            stdTemplate.m = month.toString();
            stdTemplate.d = day.toString();
            stdTemplate.svr = oltid;
            return stdTemplate;
        }
    })
});

