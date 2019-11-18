let pp = 0;
//获取cookie
function GetCookie(key) {
    var aCookie = document.cookie.split("; ");
    for (var i = 0; i < aCookie.length; i++) {
        var aCrumb = aCookie[i].split("=");
        if (key == aCrumb[0]) {
            return unescape(aCrumb[1]);
        }
    }
}
function GetCookies(key) {
    var aCookie = document.cookie.split("; ");
    for (var i = 0; i < aCookie.length; i++) {
        var aCrumb = aCookie[i].split("=");
        if (key == aCrumb[0]) {
            pp = aCrumb[1];
        }
    }
}
//获取后台服务列表
window.onload = function () {
    call();
};
//加载中
function LoadFunction() {
}
//失败
function erryFunction() {
    //alert('error')
}
//点击名称跳转页面
let redirect = function () {
    let oltid = '';
    $(".message").click(function (e) {
        oltid = e.target.innerText;
        location.href = "insert.html?age=" + oltid;
    });
};
//获取后台服务列表
var call = function () {
    var aCookie = GetCookie('wytSession');
    var aCookies = GetCookies('pp');
    session = eval('(' + aCookie + ')');
    sessioned = eval('(' + aCookies + ')');
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
    // pp = sessioned.pp;
    var s = ("svr=webadmin_00005" + "&fsession=" + fsession);
    var URL = "/webadmin/?" + s;
    $.ajax({
        type: "get", //请求的方式，也有get请求
        url: URL,
        data: {},//data是传给后台的字段，后台需要哪些就传入哪些
        dataType: "json", //json格式，后台返回的数据为json格式的。
        beforeSend: LoadFunction, //加载执行方法
        error: erryFunction,  //错误执行方法
        success: function (result) {
            dataObj = result; //返回的result为json格式的数据
            age = dataObj.ret.length;
            $(document).ready(function () {
                paginationed();
            })
        }
    })
};
//分页效果
var activeds = function () {
    var pagination = document.getElementById("pagination");
    var active = pagination.getElementsByClassName("active")[0];
    var a = active.getElementsByTagName("a")[0];
    if (active.className == "active") {
        a.className = "noned";
    }
};
//页面内容
var paginationed = function () {
    var page = 10,//每页显示条数
        con = "",
        pagination = "";
    //页数
    for (var i = 1; i <= Math.ceil(age / page) + 1; i++) {
        //小于10页
        if (Math.ceil(age / page) < 10 && i <= Math.ceil(age / page)) {
            pagination += "<li>" + "<a class='a-active'>" + i + "</a>" + "</li>";
            $("#pagination").html(pagination);
        }
        //大于10页
        if (Math.ceil(age / page) > 10) {
            pagination += "<li>" + "<a class='a-active'>" + i + "</a>" + "</li>";
            $("#pagination").html(pagination);
        }
    }
    $(document).ready(function () {
        var ul = document.getElementById("pagination");
        var li = ul.getElementsByTagName("li");
        var a = ul.getElementsByTagName("a");
        //标签
        if (Math.ceil(age / page) >= 11) {
            if(pp != '' && pp != '»' && pp != '«'){
                li[pp - 1].className = 'active';
                for (var i = 10; i < li.length; i++) {
                    li[i].style.display = "inline-block";
                }
                a[9].innerHTML = 10;
                a[Math.ceil(age / page)].innerHTML = "&laquo;";
            }else {
                li[0].className = "active";
                for (var i = 10; i < li.length; i++) {
                    li[i].style.display = "none";
                    a[9].innerHTML = "&raquo;";
                    a[9].id = "a10";
                }
            }
            // li[0].className = "active";
            activeds();
            for (var i = 1; i <= li.length; i++) {
                a[i - 1].id = "a" + i;
                var aid = a[i - 1].id;
                //每页显示条数
                $.each(dataObj.ret, function (indexs, msg) {
                    if (pp != 0){
                        if (indexs >= page * (pp - 1) && indexs < page * pp) {
                            con += "<li>"
                                + "<span class='span-success'>" + (indexs + 1) + "</span>"
                                + "<span class='message'>" + msg.svr + "</span>"
                                + "<lable class='label-success'>" + msg.sts + "</lable>"
                                + "<button></button>" + "<hr/>"
                                + "</li>";
                            $("#ul1").html(con); //把内容入到这个div中
                        }
                    } else if (pp == 0){
                        if (indexs < page) {
                            con += "<li>"
                                + "<span class='span-success'>" + (indexs + 1) + "</span>"
                                + "<span class='message'>" + msg.svr + "</span>"
                                + "<lable class='label-success'>" + msg.sts + "</lable>"
                                + "<button></button>" + "<hr/>"
                                + "</li>";
                            $("#ul1").html(con); //把内容入到这个div中
                        }
                    }

                });
                // }
                control();
                redirect();
                con = "";
                //点击显示第几页
                $("#" + aid).click(function (e) {
                    var vid = e.target.id.split('a');
                    pp = e.target.innerHTML;
                    if(pp == '»' || pp == '«'){
                        pp = 0;
                    }else {
                        document.cookie = "pp=" + pp;
                    }
                    //数字页
                    if (a[vid[1] - 1].innerText != "»") {
                        for (var i = 0; i < li.length; i++) {
                            if ((vid[1] - 1) != i) {
                                li[i].className = "none";
                            }
                        }
                        $.each(dataObj.ret, function (indexs, msg) {
                            if (indexs >= page * (vid[1] - 1) && indexs < page * vid[1]) {
                                i = li.length - 1;
                                con += "<li>"
                                    + "<span class='span-success'>" + (indexs + 1) + "</span>"
                                    + "<span class='message'>" + msg.svr + "</span>"
                                    + "<lable class='label-success'>" + msg.sts + "</lable>"
                                    + "<button></button>" + "<hr/>"
                                    + "</li>";
                                $("#ul1").html(con); //把内容入到这个div中
                                li[vid[1] - 1].className = "active";
                            }
                        });
                        control();
                        activeds();
                        redirect();
                        con = "";
                    }
                    //收起
                    if (vid[1] == Math.ceil(age / page) + 1) {
                        for (var i = 10; i < li.length; i++) {
                            li[i].style.display = "none";
                        }
                        a[9].innerHTML = "&raquo;";
                    }
                    //展开    "»"
                    if (a[vid[1] - 1].innerText == "»") {
                        for (var i = 10; i < li.length; i++) {
                            li[i].style.display = "inline-block";
                        }
                        a[9].innerHTML = 10;
                        a[Math.ceil(age / page)].innerHTML = "&laquo;";
                    }
                })
            }
            // if(pp != '' && pp != '»' && pp != '«'){
            //     $("#a" + pp).parentNode.attr('class','active');
            // }
        }
        if (Math.ceil(age / page) < 11) {
            if(pp != '' && pp != '»' && pp != '«'){
                li[pp - 1].className = 'active';
            }else {
                li[0].className = "active";
            }
            activeds();
            for (var i = 1; i <= li.length; i++) {
                a[i - 1].id = "a" + i;
                var aid = a[i - 1].id;
                //每页显示条数
                // if(pp != '' || pp != undefined){
                //     $.each(dataObj.ret, function (indexs, msg) {
                //         if (indexs >= page * (pp - 1) && indexs < page * pp) {
                //             i = li.length - 1;
                //             con += "<li>"
                //                 + "<span class='span-success'>" + (indexs + 1) + "</span>"
                //                 + "<span class='message'>" + msg.svr + "</span>"
                //                 + "<lable class='label-success'>" + msg.sts + "</lable>"
                //                 + "<button></button>" + "<hr/>"
                //                 + "</li>";
                //             $("#ul1").html(con); //把内容入到这个div中
                //             li[pp].className = "active";
                //         }
                //     });
                //     activeds();
                // }else {
                    $.each(dataObj.ret, function (indexs, msg) {
                        if (indexs < page) {
                            con += "<li>"
                                + "<span class='span-success'>" + (indexs + 1) + "</span>"
                                + "<span class='message'>" + msg.svr + "</span>"
                                + "<lable class='label-success'>" + msg.sts + "</lable>"
                                + "<button></button>" + "<hr/>"
                                + "</li>";
                            $("#ul1").html(con); //把内容入到这个div中
                        }

                    });
                // }
                control();
                redirect();
                con = "";
                //点击显示第几页
                $("#" + aid).click(function (e) {
                    var vid = e.target.id.split('a');
                    //数字页
                    if (a[vid[1] - 1].innerText != "»") {
                        for (var i = 0; i < li.length; i++) {
                            if ((vid[1] - 1) != i) {
                                li[i].className = "none";
                            }
                        }
                        $.each(dataObj.ret, function (indexs, msg) {
                            if (indexs >= page * (vid[1] - 1) && indexs < page * vid[1]) {
                                i = li.length - 1;
                                con += "<li>"
                                    + "<span class='span-success'>" + (indexs + 1) + "</span>"
                                    + "<span class='message'>" + msg.svr + "</span>"
                                    + "<lable class='label-success'>" + msg.sts + "</lable>"
                                    + "<button></button>" + "<hr/>"
                                    + "</li>";
                                $("#ul1").html(con); //把内容入到这个div中
                                li[vid[1] - 1].className = "active";
                            }
                        });
                        activeds();
                        redirect();
                        control();
                        con = "";
                    }
                })
            }
        }
    });

    //跳转
    $(document).ready(function () {
        $("#btn04").click(function () {
            var txt03 = document.getElementById("txt03").value;
            if (txt03 <= Math.ceil(age / page)) {
                $.each(dataObj.ret, function (indexs, msg) {
                    if (indexs >= page * (txt03 - 1) && indexs < page * txt03) {
                        // i = li.length - 1;
                        con += "<li>"
                            + "<span class='span-success'>" + (indexs + 1) + "</span>"
                            + "<span class='message'>" + msg.svr + "</span>"
                            + "<lable class='label-success'>" + msg.sts + "</lable>"
                            + "<button></button>" + "<hr/>"
                            + "</li>";
                        $("#ul1").html(con); //把内容入到这个div中
                    }
                    var ul = document.getElementById("pagination");
                    var li = ul.getElementsByTagName("li");
                    for (var i = 0; i < li.length; i++) {
                        if ((txt03 - 1) != i) {
                            li[i].className = "none";
                        }
                    }
                    if (txt03 != "") {
                        li[txt03 - 1].className = "active";
                        activeds();
                    } else {
                        alert('输入框不能为空');
                        return false;
                    }
                });
                control();
                redirect();
                con = "";
            } else {
                alert("超出范围");
            }
        })
    });
};
//按钮控制
var control = function () {
    var ul = document.getElementById("ul1");
    var li = ul.getElementsByTagName("li");
    var btn = ul.getElementsByTagName("button");
    var lable = ul.getElementsByTagName("lable");
    var span = ul.getElementsByTagName("span");
    for (var i = 0; i < li.length; i++) {
        if (lable[i].innerText.trim() == 1) {
            btn[i].innerHTML = "停止";
            btn[i].style.backgroundColor = "red";
        }
        if (lable[i].innerText.trim() == 0) {
            btn[i].innerHTML = "启动";
            btn[i].style.backgroundColor = "green";
        }
        li[i].id = "li" + i;
        btn[i].id = "btn" + i;
        var btnid = btn[i].id;
        $("#" + btnid).click(function (e) {
            var vid = e.target.id.split('btn');
            if (lable[vid[1]].innerText.trim() == 0) {
                var data = li[i].span[2 * i + 1].innerHTML;
                _template1 = buildJson(data);
                var s = ("svr=webadmin_00007" + "&fsession=" + fsession);
                var URL = "/webadmin/?" + s;
                var form = new FormData();
                form.append("data", (JSON.stringify(_template1)));
                //var data;
                //var ul = document.getElementById('ul1');
                //var li = ul.getElementsByTagName('li');
                //var span = li[0].getElementsByTagName('span');
                //console.log(span[0].innerText);
                $.ajax({
                    type: "post", //请求的方式，也有get请求
                    url: URL,
                    contentType: "application/json",//如果想以json格式把数据提交到后台的话，这个必须有，否则只会当做表单提交
                    data: form,
                    cache: false,
                    processData: false,
                    contentType: false,
                    data: form,//data是传给后台的字段，后台需要哪些就传入哪些
                    dataType: "json", //json格式，后台返回的数据为json格式的。
                    success: function () {
                        if (id === 1) {
                            alert('已启动服务！');
                            lable[vid[1]].innerText = 1;
                            btn[vid[1]].innerHTML = "停止";
                            btn[vid[1]].style.backgroundColor = "red";
                        } else {
                            alert("启动失败");
                        }
                    },
                    error: function () {
                        alert("请求失败");
                    }
                });
                function buildJson(data) {
                    var std = JSON.stringify({});
                    var stdTemplate = JSON.parse(std);
                    stdTemplate.svr = data;
                    stdTemplate.status = '1';
                    return stdTemplate;
                }
            } else /*(lable[vid[1]].innerText.trim() == 1)*/ {
                var data = li[i].span[2 * i + 1].innerHTML;
                _template1 = buildJson(data);
                var s = ("svr=webadmin_00007" + "&fsession=" + fsession);
                var URL = "/webadmin/?" + s;
                var form = new FormData();
                form.append("data", (JSON.stringify(_template1)));
                $.ajax({
                    type: "post", //请求的方式，也有get请求
                    url: URL,
                    contentType: "application/json",//如果想以json格式把数据提交到后台的话，这个必须有，否则只会当做表单提交
                    data: form,
                    cache: false,
                    processData: false,
                    contentType: false,
                    data: form,//data是传给后台的字段，后台需要哪些就传入哪些
                    dataType: "json", //json格式，后台返回的数据为json格式的。
                    success: function () {
                        if (id === 1) {
                            alert('已停止服务！');
                            lable[vid[1]].innerText = 0;
                            btn[vid[1]].innerHTML = "启动";
                            btn[vid[1]].style.backgroundColor = "green";
                        } else {
                            alert("停止失败");
                        }
                    },
                    error: function () {
                        alert("请求失败");
                    }
                });
                function buildJson(data) {
                    var std = JSON.stringify({});
                    var stdTemplate = JSON.parse(std);
                    stdTemplate.svr = data;
                    stdTemplate.status = '0';
                    return stdTemplate;
                }
            }
        })
    }
};
//刷新
$(document).ready(function () {
    $("#flush").click(function () {
        document.cookie = "pp=" + 0;
        call()
    })
});
// 搜索
$(document).ready(function () {
    $("#search").click(function () {
        var seek = document.getElementById("seek").value;
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
        var s = ("svr=webadmin_00005" + "&fsession=" + fsession);
        var URL = "/webadmin/?" + s;
        $.ajax({
            type: "get", //请求的方式，也有get请求
            url: URL,
            data: {},//data是传给后台的字段，后台需要哪些就传入哪些
            dataType: "json", //json格式，后台返回的数据为json格式的。
            //beforeSend: LoadFunction, //加载执行方法
            //错误执行方法
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(XMLHttpRequest.status);
                alert(XMLHttpRequest.readyState);
                alert(textStatus);
                alert(errorThrown);
            },
            success: function (result) {
                dataObj = result;//返回的result为json格式的数据
                $.each(dataObj.ret, function (index, item) {
                    if (item.svr == seek) {
                        location.href = "insert.html?age=" + seek;
                        return false;
                    }
                    if (item.svr != seek && dataObj.ret.length == (index + 1)) {
                        alert("无此服务");
                    }
                });
            }
        })
    })
});
document.onkeydown = function (e) {//键盘按键控制
    e = e || window.event;
    if ((e.ctrlKey && e.keyCode == 82) || e.keyCode == 116) {
        document.cookie = 'pp=' + 0;
    }
};
