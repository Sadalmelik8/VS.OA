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
$(document).ready(function () {
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
    var con = '';
    var cond = '';
    var coned = '';
    var conds = '';
    var cons = '';
    var coneds = '';
    var title = document.getElementsByClassName('title')[0];
    var remarks = document.getElementsByClassName('title')[1];
    _template1 = buildJson();
    var fsession = session.fsession;
    var userName = session.User_NM;
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
            // presents.value = dataObj.ret[0].executor;
            remarks.value = dataObj.ret[0].remarks;
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
                    if (document.getElementsByClassName('pics')[i].src == document.location.href) {
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
