// 获取从上个页面传过来的服务名称
let url = window.location.search; //获取url中"?"符后的字串
let oltid = url.substr(url.indexOf("=") + 1);
//$(document).ready(function () {
//    // let oltid = '';
//    $("#history").click(function () {
//        // oltid = e.target.innerText;
//        location.href = "problem-les.html?age=" + oltid;
//    });
//});
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
    var title = document.getElementsByClassName('title')[0];
    var details = document.getElementsByClassName('details')[0];
    var contents = document.getElementsByClassName('contents')[0];
    var present = document.getElementsByClassName('present')[0];
    var remarks = document.getElementsByClassName('title')[1];
    var level = document.getElementsByClassName('bottom--middle__urgency')[0];
    var fsession = session.fsession;
    var userName = session.User_NM;
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
            details.value = dataObj.ret[0].content;
            present.value = dataObj.ret[0].executor;
            remarks.value = dataObj.ret[0].remarks;
            level.value = dataObj.ret[0].level;
        }
    });
    function buildJson() {
        var std = JSON.stringify({});
        var stdTemplate = JSON.parse(std);
        stdTemplate.num = oltid;
        return stdTemplate;
    }
    $('#present').click(function () {
        var fsession = session.fsession;
        var userName = session.User_NM;
        _template1 = buildJson();
        var s = ("svr=WS_00007" + "&fsession=" + fsession + "&userName=" + userName);
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
                if (dataObj.ret[0].id == 0) {
                    alert('失败');
                } else {
                    alert('成功');
                }
            }
        });
        function buildJson() {
            var std = JSON.stringify({});
            var stdTemplate = JSON.parse(std);
            stdTemplate.executor = present.value;
            stdTemplate.num = oltid;
            stdTemplate.content = details.value;
            stdTemplate.contents = contents.value;
            stdTemplate.remarks = remarks.value;
            stdTemplate.level = level.value;
            return stdTemplate;
        }
    })
});