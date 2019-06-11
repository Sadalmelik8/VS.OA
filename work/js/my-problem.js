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
window.onload = function () {
    call()
};
// 默认日期
$(document).ready(function () {
    let time = new Date();
    let day = ("0" + time.getDate()).slice(-2);
    let month = ("0" + (time.getMonth() + 1)).slice(-2);
    let today = time.getFullYear() + "-" + (month) + "-" + (day);
    $('#data').val(today);
});
//点击标题跳转
let redirect = function () {
    let oltid = '';
    $(".caption").click(function (e) {
        oltid = e.target.id;
        location.href = "update.html?num=" + oltid;
    });
};
//加载执行方法
function LoadFunction() {
}
//执行错误方法
function erryFunction() {
    alert('error')
}
//分页效果
var actived = function () {
    var pagination = document.getElementById("pagination");
    var active = pagination.getElementsByClassName("active")[0];
    var a = active.getElementsByTagName("a")[0];
    if (active.className == "active") {
        a.className = "noned";
    }
};
//页面内容
var paginationed = function (userName) {
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
            for (var i = 10; i < li.length; i++) {
                li[i].style.display = "none";
            }
            li[0].className = "active";
            actived();
            a[9].innerHTML = "&raquo;";
            a[9].id = "a10";
            for (var i = 1; i <= li.length; i++) {
                a[i - 1].id = "a" + i;
                var aid = a[i - 1].id;
                //每页显示条数
                $.each(dataObj.ret, function (indexs, item) {
                    if (indexs < page && dataObj.ret.length > 0 && dataObj.ret[0].id != 0) {
                        if (item.executor == null && item.submittime == null && item.acceptor == null && item.inspecttime == null) {
                            con += "<li class='datas'>"
                                + "<span class='number'>" + (indexs + 1) + "</span>"//序号
                                + "<span class='caption' id=" + item.num + ">" + item.title + "</span>"//标题
                                + "<span>" + item.introducer + "</span>"//提出人
                                + "<span class='time'>" + item.proposetime.substr(0, 4) + '/' + item.proposetime.substr(4, 2) + '/' + item.proposetime.substr(6, 2) + '&nbsp;' + item.proposetime.substr(8, 2) + ':' + item.proposetime.substr(10, 2) + ':' + item.proposetime.substr(12, 2) + "</span>"//提出时间
                                + "<span>" + '&nbsp;' + "</span>"//受理人
                                + "<span class='time'>" + '&nbsp;' + "</span>"//提交时间
                                + "<span>" + '&nbsp;' + "</span>"//验收人
                                + "<span class='time'>" + '&nbsp;' + "</span>"//验收时间
                                + "<input type='submit' class=" + "knowledge" + item.knowledge + ">"
                                + "<span class='deletes'>" + "<span class='deletes--delete'>" + "删除" + "</span>" + "</span>"//删除
                                + "</li>";
                            $("#ul").html(con); //把内容入到这个div中
                        }
                        else if (item.executor != null && item.submittime != null && item.acceptor == null && item.inspecttime == null) {
                            con += "<li class='datas'>"
                                + "<span class='number'>" + (indexs + 1) + "</span>"//序号
                                + "<span class='caption' id=" + item.num + ">" + item.title + "</span>"//标题
                                + "<span>" + item.introducer + "</span>"//提出人
                                + "<span class='time'>" + item.proposetime.substr(0, 4) + '/' + item.proposetime.substr(4, 2) + '/' + item.proposetime.substr(6, 2) + '&nbsp;' + item.proposetime.substr(8, 2) + ':' + item.proposetime.substr(10, 2) + ':' + item.proposetime.substr(12, 2) + "</span>"//提出时间
                                + "<span>" + item.executor + "</span>"//受理人
                                + "<span class='time'>" + item.submittime.substr(0, 4) + '/' + item.submittime.substr(4, 2) + '/' + item.submittime.substr(6, 2) + '&nbsp;' + item.submittime.substr(8, 2) + ':' + item.submittime.substr(10, 2) + ':' + item.submittime.substr(12, 2) + "</span>"//提交时间
                                + "<span>" + '&nbsp;' + "</span>"//验收人
                                + "<span class='time'>" + '&nbsp;' + "</span>"//验收时间
                                + "<input type='submit' class=" + "knowledge" + item.knowledge + ">"
                                + "<span class='deletes'>" + "<span class='deletes--delete'>" + "删除" + "</span>" + "</span>"//删除
                                + "</li>";
                            $("#ul").html(con); //把内容入到这个div中
                        }
                        else {
                            con += "<li class='datas'>"
                                + "<span class='number'>" + (indexs + 1) + "</span>"//序号
                                + "<span class='caption' id=" + item.num + ">" + item.title + "</span>"//标题
                                + "<span>" + item.introducer + "</span>"//提出人
                                + "<span class='time'>" + item.proposetime.substr(0, 4) + '/' + item.proposetime.substr(4, 2) + '/' + item.proposetime.substr(6, 2) + '&nbsp;' + item.proposetime.substr(8, 2) + ':' + item.proposetime.substr(10, 2) + ':' + item.proposetime.substr(12, 2) + "</span>"//提出时间
                                + "<span>" + item.executor + "</span>"//受理人
                                + "<span class='time'>" + item.submittime.substr(0, 4) + '/' + item.submittime.substr(4, 2) + '/' + item.submittime.substr(6, 2) + '&nbsp;' + item.submittime.substr(8, 2) + ':' + item.submittime.substr(10, 2) + ':' + item.submittime.substr(12, 2) + "</span>"//提交时间
                                + "<span>" + item.acceptor + "</span>"//验收人
                                + "<span class='time'>" + item.inspecttime.substr(0, 4) + '/' + item.inspecttime.substr(4, 2) + '/' + item.inspecttime.substr(6, 2) + '&nbsp;' + item.inspecttime.substr(8, 2) + ':' + item.inspecttime.substr(10, 2) + ':' + item.inspecttime.substr(12, 2) + "</span>"//验收时间
                                + "<input type='submit' class=" + "knowledge" + item.knowledge + ">"
                                + "<span class='deletes'>" + "<span class='deletes--delete'>" + "删除" + "</span>" + "</span>"//删除
                                + "</li>";
                            $("#ul").html(con); //把内容入到这个div中
                        }
                    }
                    else {
                        con = '';
                        $("#ul").html(con); //把内容入到这个div中
                    }
                });
                // if ($('input').className == "knowledge1") {
                //     $('input').className = "a";
                // } else {
                //     $('input').className = "submit";
                // }
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
                        $.each(dataObj.ret, function (indexs, item) {
                            if (indexs >= page * (vid[1] - 1) && indexs < page * vid[1]) {
                                i = li.length - 1;
                                if (item.executor == null && item.submittime == null && item.acceptor == null && item.inspecttime == null) {
                                    con += "<li class='datas'>"
                                        + "<span class='number'>" + (indexs + 1) + "</span>"//序号
                                        + "<span class='caption' id=" + item.num + ">" + item.title + "</span>"//标题
                                        + "<span>" + item.introducer + "</span>"//提出人
                                        + "<span class='time'>" + item.proposetime.substr(0, 4) + '/' + item.proposetime.substr(4, 2) + '/' + item.proposetime.substr(6, 2) + '&nbsp;' + item.proposetime.substr(8, 2) + ':' + item.proposetime.substr(10, 2) + ':' + item.proposetime.substr(12, 2) + "</span>"//提出时间
                                        + "<span>" + '&nbsp;' + "</span>"//受理人
                                        + "<span class='time'>" + '&nbsp;' + "</span>"//提交时间
                                        + "<span>" + '&nbsp;' + "</span>"//验收人
                                        + "<span class='time'>" + '&nbsp;' + "</span>"//验收时间
                                        + "<input type='submit' class=" + "knowledge"+item.knowledge + ">"
                                        + "<span class='deletes'>" + "<span class='deletes--delete'>" + "删除" + "</span>" + "</span>"//删除
                                        + "</li>";
                                    $("#ul").html(con); //把内容入到这个div中
                                }
                                else if (item.executor != null && item.submittime != null && item.acceptor == null && item.inspecttime == null) {
                                    con += "<li class='datas'>"
                                        + "<span class='number'>" + (indexs + 1) + "</span>"//序号
                                        + "<span class='caption' id=" + item.num + ">" + item.title + "</span>"//标题
                                        + "<span>" + item.introducer + "</span>"//提出人
                                        + "<span class='time'>" + item.proposetime.substr(0, 4) + '/' + item.proposetime.substr(4, 2) + '/' + item.proposetime.substr(6, 2) + '&nbsp;' + item.proposetime.substr(8, 2) + ':' + item.proposetime.substr(10, 2) + ':' + item.proposetime.substr(12, 2) + "</span>"//提出时间
                                        + "<span>" + item.executor + "</span>"//受理人
                                        + "<span class='time'>" + item.submittime.substr(0, 4) + '/' + item.submittime.substr(4, 2) + '/' + item.submittime.substr(6, 2) + '&nbsp;' + item.submittime.substr(8, 2) + ':' + item.submittime.substr(10, 2) + ':' + item.submittime.substr(12, 2) + "</span>"//提交时间
                                        + "<span>" + '&nbsp;' + "</span>"//验收人
                                        + "<span class='time'>" + '&nbsp;' + "</span>"//验收时间
                                        + "<input type='submit' class=" + "knowledge"+item.knowledge + ">"
                                        + "<span class='deletes'>" + "<span class='deletes--delete'>" + "删除" + "</span>" + "</span>"//删除
                                        + "</li>";
                                    $("#ul").html(con); //把内容入到这个div中
                                }
                                else {
                                    con += "<li class='datas'>"
                                        + "<span class='number'>" + (indexs + 1) + "</span>"//序号
                                        + "<span class='caption' id=" + item.num + ">" + item.title + "</span>"//标题
                                        + "<span>" + item.introducer + "</span>"//提出人
                                        + "<span class='time'>" + item.proposetime.substr(0, 4) + '/' + item.proposetime.substr(4, 2) + '/' + item.proposetime.substr(6, 2) + '&nbsp;' + item.proposetime.substr(8, 2) + ':' + item.proposetime.substr(10, 2) + ':' + item.proposetime.substr(12, 2) + "</span>"//提出时间
                                        + "<span>" + item.executor + "</span>"//受理人
                                        + "<span class='time'>" + item.submittime.substr(0, 4) + '/' + item.submittime.substr(4, 2) + '/' + item.submittime.substr(6, 2) + '&nbsp;' + item.submittime.substr(8, 2) + ':' + item.submittime.substr(10, 2) + ':' + item.submittime.substr(12, 2) + "</span>"//提交时间
                                        + "<span>" + item.acceptor + "</span>"//验收人
                                        + "<span class='time'>" + item.inspecttime.substr(0, 4) + '/' + item.inspecttime.substr(4, 2) + '/' + item.inspecttime.substr(6, 2) + '&nbsp;' + item.inspecttime.substr(8, 2) + ':' + item.inspecttime.substr(10, 2) + ':' + item.inspecttime.substr(12, 2) + "</span>"//验收时间
                                        + "<input type='submit' class=" + "knowledge"+item.knowledge + ">"
                                        + "<span class='deletes'>" + "<span class='deletes--delete'>" + "删除" + "</span>" + "</span>"//删除
                                        + "</li>";
                                    $("#ul").html(con); //把内容入到这个div中
                                }
                                li[vid[1] - 1].className = "active";
                            }
                        });
                        // if ($('input').className == "knowledge1") {
                        //     $('input').className = "a";
                        // } else {
                        //     $('input').className = "submit";
                        // }
                        con = "";
                        actived();
                        redirect();
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
        }
        if (Math.ceil(age / page) < 11) {
            li[0].className = "active";
            actived();
            for (var i = 1; i <= li.length; i++) {
                a[i - 1].id = "a" + i;
                var aid = a[i - 1].id;
                //每页显示条数
                $.each(dataObj.ret, function (indexs, item) {
                    if (indexs < page && dataObj.ret.length > 0 && dataObj.ret[0].id != 0) {
                        if (item.executor == null && item.submittime == null && item.acceptor == null && item.inspecttime == null) {
                            con += "<li class='datas'>"
                                + "<span class='number'>" + (indexs + 1) + "</span>"//序号
                                + "<span class='caption' id=" + item.num + ">" + item.title + "</span>"//标题
                                + "<span>" + item.introducer + "</span>"//提出人
                                + "<span class='time'>" + item.proposetime.substr(0, 4) + '/' + item.proposetime.substr(4, 2) + '/' + item.proposetime.substr(6, 2) + '&nbsp;' + item.proposetime.substr(8, 2) + ':' + item.proposetime.substr(10, 2) + ':' + item.proposetime.substr(12, 2) + "</span>"//提出时间
                                + "<span>" + '&nbsp;' + "</span>"//受理人
                                + "<span class='time'>" + '&nbsp;' + "</span>"//提交时间
                                + "<span>" + '&nbsp;' + "</span>"//验收人
                                + "<span class='time'>" + '&nbsp;' + "</span>"//验收时间
                                + "<input type='submit' class=" + "knowledge"+item.knowledge + ">"
                                + "<span class='deletes'>" + "<span class='deletes--delete'>" + "删除" + "</span>" + "</span>"//删除
                                + "</li>";
                            $("#ul").html(con); //把内容入到这个div中
                        }
                        else if (item.executor != null && item.submittime != null && item.acceptor == null && item.inspecttime == null) {
                            con += "<li class='datas'>"
                                + "<span class='number'>" + (indexs + 1) + "</span>"//序号
                                + "<span class='caption' id=" + item.num + ">" + item.title + "</span>"//标题
                                + "<span>" + item.introducer + "</span>"//提出人
                                + "<span class='time'>" + item.proposetime.substr(0, 4) + '/' + item.proposetime.substr(4, 2) + '/' + item.proposetime.substr(6, 2) + '&nbsp;' + item.proposetime.substr(8, 2) + ':' + item.proposetime.substr(10, 2) + ':' + item.proposetime.substr(12, 2) + "</span>"//提出时间
                                + "<span>" + '&nbsp;' + "</span>"//受理人
                                + "<span class='time'>" + '&nbsp;' + "</span>"//提交时间
                                + "<span>" + '&nbsp;' + "</span>"//验收人
                                + "<span class='time'>" + '&nbsp;' + "</span>"//验收时间
                                + "<input type='submit' class=" + "knowledge"+item.knowledge + ">"
                                + "<span class='deletes'>" + "<span class='deletes--delete'>" + "删除" + "</span>" + "</span>"//删除
                                + "</li>";
                            $("#ul").html(con); //把内容入到这个div中
                        }
                        else {
                            con += "<li class='datas'>"
                                + "<span class='number'>" + (indexs + 1) + "</span>"//序号
                                + "<span class='caption' id=" + item.num + ">" + item.title + "</span>"//标题
                                + "<span>" + item.introducer + "</span>"//提出人
                                + "<span class='time'>" + item.proposetime.substr(0, 4) + '/' + item.proposetime.substr(4, 2) + '/' + item.proposetime.substr(6, 2) + '&nbsp;' + item.proposetime.substr(8, 2) + ':' + item.proposetime.substr(10, 2) + ':' + item.proposetime.substr(12, 2) + "</span>"//提出时间
                                + "<span>" + '&nbsp;' + "</span>"//受理人
                                + "<span class='time'>" + '&nbsp;' + "</span>"//提交时间
                                + "<span>" + '&nbsp;' + "</span>"//验收人
                                + "<span class='time'>" + '&nbsp;' + "</span>"//验收时间
                                + "<input type='submit' class=" + "knowledge"+item.knowledge + ">"
                                + "<span class='deletes'>" + "<span class='deletes--delete'>" + "删除" + "</span>" + "</span>"//删除
                                + "</li>";
                            $("#ul").html(con); //把内容入到这个div中
                        }
                    }
                    else {
                        con = '';
                        $("#ul").html(con); //把内容入到这个div中
                    }
                });
                // if ($('input').className == "knowledge1") {
                //     $('input').className = "a";
                // } else {
                //     $('input').className = "submit";
                // }
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
                        $.each(dataObj.ret, function (indexs, item) {
                            if (indexs >= page * (vid[1] - 1) && indexs < page * vid[1]) {
                                i = li.length - 1;
                                if (item.executor == null && item.submittime == null && item.acceptor == null && item.inspecttime == null) {
                                    con += "<li class='datas'>"
                                        + "<span class='number'>" + (indexs + 1) + "</span>"//序号
                                        + "<span class='caption' id=" + item.num + ">" + item.title + "</span>"//标题
                                        + "<span>" + item.introducer + "</span>"//提出人
                                        + "<span class='time'>" + item.proposetime.substr(0, 4) + '/' + item.proposetime.substr(4, 2) + '/' + item.proposetime.substr(6, 2) + '&nbsp;' + item.proposetime.substr(8, 2) + ':' + item.proposetime.substr(10, 2) + ':' + item.proposetime.substr(12, 2) + "</span>"//提出时间
                                        + "<span>" + '&nbsp;' + "</span>"//受理人
                                        + "<span class='time'>" + '&nbsp;' + "</span>"//提交时间
                                        + "<span>" + '&nbsp;' + "</span>"//验收人
                                        + "<span class='time'>" + '&nbsp;' + "</span>"//验收时间
                                        + "<input type='submit' class=" + "knowledge"+item.knowledge + ">"
                                        + "<span class='deletes'>" + "<span class='deletes--delete'>" + "删除" + "</span>" + "</span>"//删除
                                        + "</li>";
                                    $("#ul").html(con); //把内容入到这个div中
                                }
                                else if (item.executor != null && item.submittime != null && item.acceptor == null && item.inspecttime == null) {
                                    con += "<li class='datas'>"
                                        + "<span class='number'>" + (indexs + 1) + "</span>"//序号
                                        + "<span class='caption' id=" + item.num + ">" + item.title + "</span>"//标题
                                        + "<span>" + item.introducer + "</span>"//提出人
                                        + "<span class='time'>" + item.proposetime.substr(0, 4) + '/' + item.proposetime.substr(4, 2) + '/' + item.proposetime.substr(6, 2) + '&nbsp;' + item.proposetime.substr(8, 2) + ':' + item.proposetime.substr(10, 2) + ':' + item.proposetime.substr(12, 2) + "</span>"//提出时间
                                        + "<span>" + '&nbsp;' + "</span>"//受理人
                                        + "<span class='time'>" + '&nbsp;' + "</span>"//提交时间
                                        + "<span>" + '&nbsp;' + "</span>"//验收人
                                        + "<span class='time'>" + '&nbsp;' + "</span>"//验收时间
                                        + "<input type='submit' class=" + "knowledge"+item.knowledge + ">"
                                        + "<span class='deletes'>" + "<span class='deletes--delete'>" + "删除" + "</span>" + "</span>"//删除
                                        + "</li>";
                                    $("#ul").html(con); //把内容入到这个div中
                                }
                                else {
                                    con += "<li class='datas'>"
                                        + "<span class='number'>" + (indexs + 1) + "</span>"//序号
                                        + "<span class='caption' id=" + item.num + ">" + item.title + "</span>"//标题
                                        + "<span>" + item.introducer + "</span>"//提出人
                                        + "<span class='time'>" + item.proposetime.substr(0, 4) + '/' + item.proposetime.substr(4, 2) + '/' + item.proposetime.substr(6, 2) + '&nbsp;' + item.proposetime.substr(8, 2) + ':' + item.proposetime.substr(10, 2) + ':' + item.proposetime.substr(12, 2) + "</span>"//提出时间
                                        + "<span>" + '&nbsp;' + "</span>"//受理人
                                        + "<span class='time'>" + '&nbsp;' + "</span>"//提交时间
                                        + "<span>" + '&nbsp;' + "</span>"//验收人
                                        + "<span class='time'>" + '&nbsp;' + "</span>"//验收时间
                                        + "<input type='submit' class=" + "knowledge"+item.knowledge + ">"
                                        + "<span class='deletes'>" + "<span class='deletes--delete'>" + "删除" + "</span>" + "</span>"//删除
                                        + "</li>";
                                    $("#ul").html(con); //把内容入到这个div中
                                }
                                li[vid[1] - 1].className = "active";
                            }
                        });
                        // if ($('input').className == "knowledge1") {
                        //     $('input').className = "a";
                        // } else {
                        //     $('input').className = "submit";
                        // }
                        con = "";
                        actived();
                        redirect();
                    }
                    //收起
                    // if (vid[1] == Math.ceil(age / page) + 1) {
                    //     for (var i = 10; i < li.length; i++) {
                    //         li[i].style.display = "none";
                    //     }
                    //     a[9].innerHTML = "&raquo;";
                    // }
                    //展开    "»"
                    // if (a[vid[1] - 1].innerText == "»") {
                    //     for (var i = 10; i < li.length; i++) {
                    //         li[i].style.display = "inline-block";
                    //     }
                    //     a[9].innerHTML = 10;
                    //     a[Math.ceil(age / page)].innerHTML = "&laquo;";
                    // }
                })
            }
        }
    });

    //跳转
    $(document).ready(function () {
        $("#btn04").click(function () {
            var txt03 = document.getElementById("txt03").value;
            if (txt03 <= Math.ceil(age / page)) {
                $.each(dataObj.ret, function (indexs, item) {
                    if (indexs >= page * (txt03 - 1) && indexs < page * txt03) {
                        //i = li.length - 1;
                        if (item.executor == null && item.submittime == null && item.acceptor == null && item.inspecttime == null) {
                            con += "<li class='datas'>"
                                + "<span class='number'>" + (indexs + 1) + "</span>"//序号
                                + "<span class='caption' id=" + item.num + ">" + item.title + "</span>"//标题
                                + "<span>" + item.introducer + "</span>"//提出人
                                + "<span class='time'>" + item.proposetime.substr(0, 4) + '/' + item.proposetime.substr(4, 2) + '/' + item.proposetime.substr(6, 2) + '&nbsp;' + item.proposetime.substr(8, 2) + ':' + item.proposetime.substr(10, 2) + ':' + item.proposetime.substr(12, 2) + "</span>"//提出时间
                                + "<span>" + '&nbsp;' + "</span>"//受理人
                                + "<span class='time'>" + '&nbsp;' + "</span>"//提交时间
                                + "<span>" + '&nbsp;' + "</span>"//验收人
                                + "<span class='time'>" + '&nbsp;' + "</span>"//验收时间
                                + "<input type='submit' class=" + "knowledge"+item.knowledge + ">"
                                + "<span class='deletes'>" + "<span class='deletes--delete'>" + "删除" + "</span>" + "</span>"//删除
                                + "</li>";
                            $("#ul").html(con); //把内容入到这个div中
                        }
                        else if (item.executor != null && item.submittime != null && item.acceptor == null && item.inspecttime == null) {
                            con += "<li class='datas'>"
                                + "<span class='number'>" + (indexs + 1) + "</span>"//序号
                                + "<span class='caption' id=" + item.num + ">" + item.title + "</span>"//标题
                                + "<span>" + item.introducer + "</span>"//提出人
                                + "<span class='time'>" + item.proposetime.substr(0, 4) + '/' + item.proposetime.substr(4, 2) + '/' + item.proposetime.substr(6, 2) + '&nbsp;' + item.proposetime.substr(8, 2) + ':' + item.proposetime.substr(10, 2) + ':' + item.proposetime.substr(12, 2) + "</span>"//提出时间
                                + "<span>" + '&nbsp;' + "</span>"//受理人
                                + "<span class='time'>" + '&nbsp;' + "</span>"//提交时间
                                + "<span>" + '&nbsp;' + "</span>"//验收人
                                + "<span class='time'>" + '&nbsp;' + "</span>"//验收时间
                                + "<input type='submit' class=" + "knowledge"+item.knowledge + ">"
                                + "<span class='deletes'>" + "<span class='deletes--delete'>" + "删除" + "</span>" + "</span>"//删除
                                + "</li>";
                            $("#ul").html(con); //把内容入到这个div中
                        }
                        else {
                            con += "<li class='datas'>"
                                + "<span class='number'>" + (indexs + 1) + "</span>"//序号
                                + "<span class='caption' id=" + item.num + ">" + item.title + "</span>"//标题
                                + "<span>" + item.introducer + "</span>"//提出人
                                + "<span class='time'>" + item.proposetime.substr(0, 4) + '/' + item.proposetime.substr(4, 2) + '/' + item.proposetime.substr(6, 2) + '&nbsp;' + item.proposetime.substr(8, 2) + ':' + item.proposetime.substr(10, 2) + ':' + item.proposetime.substr(12, 2) + "</span>"//提出时间
                                + "<span>" + '&nbsp;' + "</span>"//受理人
                                + "<span class='time'>" + '&nbsp;' + "</span>"//提交时间
                                + "<span>" + '&nbsp;' + "</span>"//验收人
                                + "<span class='time'>" + '&nbsp;' + "</span>"//验收时间
                                + "<input type='submit' class=" + "knowledge"+item.knowledge + ">"
                                + "<span class='deletes'>" + "<span class='deletes--delete'>" + "删除" + "</span>" + "</span>"//删除
                                + "</li>";
                            $("#ul").html(con); //把内容入到这个div中
                        }
                    }
                    var ul = document.getElementById("pagination");
                    var li = ul.getElementsByTagName("li");
                    for (var i = 0; i < li.length; i++) {
                        if ((txt03 - 1) != i) {
                            li[i].className = "none";
                        }
                    }
                    if (txt03 != "") {
                        console.log(txt03);
                        li[txt03 - 1].className = "active";
                        actived();
                    } else {
                        alert('输入框不能为空');
                        return false;
                    }
                });
                // if ($('input').className == "knowledge1") {
                //     $('input').className = "a";
                // } else {
                //     $('input').className = "submit";
                // }
                con = "";
                redirect();
                actived();
            } else {
                alert("超出范围");
            }
        })
    });
};
//页面内容
var paginationeds = function (userName) {
    var page = 10,//每页显示条数
        con = "",
        pagination = "";
    //页数
    for (var i = 1; i <= Math.ceil(xx / page) + 1; i++) {
        //小于10页
        if (Math.ceil(xx / page) < 10) {
            pagination += "<li>" + "<a class='a-active'>" + i + "</a>" + "</li>";
            $("#pagination").html(pagination);
        }
        //大于10页
        if (Math.ceil(xx / page) > 10) {
            pagination += "<li>" + "<a class='a-active'>" + i + "</a>" + "</li>";
            $("#pagination").html(pagination);
        }
    }
    $(document).ready(function () {
        var ul = document.getElementById("pagination");
        var li = ul.getElementsByTagName("li");
        var a = ul.getElementsByTagName("a");
        //标签
        if (Math.ceil(xx / page) >= 11) {
            for (var i = 10; i < li.length; i++) {
                li[i].style.display = "none";
            }
            li[0].className = "active";
            actived();
            a[9].innerHTML = "&raquo;";
            a[9].id = "a10";
            for (var i = 1; i <= li.length; i++) {
                a[i - 1].id = "a" + i;
                var aid = a[i - 1].id;
                //每页显示条数
                $.each(dataObj.ret, function (indexs, item) {
                    if (userName == item.introducer) {
                        arr.push(indexs);
                        xx = arr.length;
                        if (arr.length <= page && userName == item.introducer) {
                            if (item.executor == null && item.submittime == null) {
                                item.executor = '&nbsp;';
                                item.submittime = '&nbsp;';
                                item.acceptor = '&nbsp;';
                                item.inspecttime = '&nbsp;';
                                con += "<li class='datas'>"
                                    + "<span class='number'>" + xx + "</span>"//序号
                                    + "<span class='caption' id=" + item.num + ">" + item.title + "</span>"//标题
                                    + "<span>" + item.introducer + "</span>"//提出人
                                    + "<span class='time'>" + item.proposetime.substr(0, 4) + '/' + item.proposetime.substr(4, 2) + '/' + item.proposetime.substr(6, 2) + '&nbsp;' + item.proposetime.substr(8, 2) + ':' + item.proposetime.substr(10, 2) + ':' + item.proposetime.substr(12, 2) + "</span>"//提出时间
                                    + "<span>" + item.executor + "</span>"//受理人
                                    + "<span class='time'>" + item.submittime + "</span>"//提交时间
                                    + "<span>" + item.acceptor + "</span>"//验收人
                                    + "<span class='time'>" + item.inspecttime + "</span>"//验收时间
                                    + "<input type='submit' class=" + "knowledge"+item.knowledge + ">"
                                    + "<span class='deletes'>" + "<span class='deletes--delete'>" + "删除" + "</span>" + "</span>"//删除
                                    + "</li>";
                                $("#ul").html(con); //把内容入到这个div中
                            }
                            if (item.acceptor == null && item.inspecttime == null) {
                                item.acceptor = '&nbsp;';
                                item.inspecttime = '&nbsp;';
                                con += "<li class='datas'>"
                                    + "<span class='number'>" + xx + "</span>"//序号
                                    + "<span class='caption' id=" + item.num + ">" + item.title + "</span>"//标题
                                    + "<span>" + item.introducer + "</span>"//提出人
                                    + "<span class='time'>" + item.proposetime.substr(0, 4) + '/' + item.proposetime.substr(4, 2) + '/' + item.proposetime.substr(6, 2) + '&nbsp;' + item.proposetime.substr(8, 2) + ':' + item.proposetime.substr(10, 2) + ':' + item.proposetime.substr(12, 2) + "</span>"//提出时间
                                    + "<span>" + item.executor + "</span>"//受理人
                                    + "<span class='time'>" + item.submittime + "</span>"//提交时间
                                    + "<span>" + item.acceptor + "</span>"//验收人
                                    + "<span class='time'>" + item.inspecttime + "</span>"//验收时间
                                    + "<input type='submit' class=" + "knowledge"+item.knowledge + ">"
                                    + "<span class='deletes'>" + "<span class='deletes--delete'>" + "删除" + "</span>" + "</span>"//删除
                                    + "</li>";
                                $("#ul").html(con); //把内容入到这个div中
                            }
                            else {
                                con += "<li class='datas'>"
                                    + "<span class='number'>" + xx + "</span>"//序号
                                    + "<span class='caption' id=" + item.num + ">" + item.title + "</span>"//标题
                                    + "<span>" + item.introducer + "</span>"//提出人
                                    + "<span class='time'>" + item.proposetime.substr(0, 4) + '/' + item.proposetime.substr(4, 2) + '/' + item.proposetime.substr(6, 2) + '&nbsp;' + item.proposetime.substr(8, 2) + ':' + item.proposetime.substr(10, 2) + ':' + item.proposetime.substr(12, 2) + "</span>"//提出时间
                                    + "<span>" + item.executor + "</span>"//受理人
                                    + "<span class='time'>" + item.submittime + "</span>"//提交时间
                                    + "<span>" + item.acceptor + "</span>"//验收人
                                    + "<span class='time'>" + item.inspecttime + "</span>"//验收时间
                                    + "<input type='submit' class=" + "knowledge"+item.knowledge + ">"
                                    + "<span class='deletes'>" + "<span class='deletes--delete'>" + "删除" + "</span>" + "</span>"//删除
                                    + "</li>";
                                $("#ul").html(con); //把内容入到这个div中
                            }
                        }
                    }
                });
                // if ($('input').className == "knowledge1") {
                //     $('input').className = "a";
                // } else {
                //     $('input').className = "submit";
                // }
                redirect();
                con = "";
                arr = [];
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
                        $.each(dataObj.ret, function (indexs, item) {
                            if (x == item.introducer || x == item.executor || x == item.acceptor) {
                                arr.push(indexs);
                                xx = arr.length;
                                if (arr.length > page * (vid[1] - 1) && arr.length <= page * vid[1]) {
                                    i = li.length - 1;
                                    if (item.executor == null && item.submittime == null) {
                                        item.executor = '&nbsp;';
                                        item.submittime = '&nbsp;';
                                        item.acceptor = '&nbsp;';
                                        item.inspecttime = '&nbsp;';
                                        con += "<li class='datas'>"
                                            + "<span class='number'>" + xx + "</span>"//序号
                                            + "<span class='caption' id=" + item.num + ">" + item.title + "</span>"//标题
                                            + "<span>" + item.introducer + "</span>"//提出人
                                            + "<span class='time'>" + item.proposetime.substr(0, 4) + '/' + item.proposetime.substr(4, 2) + '/' + item.proposetime.substr(6, 2) + '&nbsp;' + item.proposetime.substr(8, 2) + ':' + item.proposetime.substr(10, 2) + ':' + item.proposetime.substr(12, 2) + "</span>"//提出时间
                                            + "<span>" + item.executor + "</span>"//受理人
                                            + "<span class='time'>" + item.submittime + "</span>"//提交时间
                                            + "<span>" + item.acceptor + "</span>"//验收人
                                            + "<span class='time'>" + item.inspecttime + "</span>"//验收时间
                                            + "<input type='submit' class=" + "knowledge"+item.knowledge + ">"
                                            + "<span class='deletes'>" + "<span class='deletes--delete'>" + "删除" + "</span>" + "</span>"//删除
                                            + "</li>";
                                        $("#ul").html(con); //把内容入到这个div中
                                    }
                                    if (item.acceptor == null && item.inspecttime == null) {
                                        item.acceptor = '&nbsp;';
                                        item.inspecttime = '&nbsp;';
                                        con += "<li class='datas'>"
                                            + "<span class='number'>" + xx + "</span>"//序号
                                            + "<span class='caption' id=" + item.num + ">" + item.title + "</span>"//标题
                                            + "<span>" + item.introducer + "</span>"//提出人
                                            + "<span class='time'>" + item.proposetime.substr(0, 4) + '/' + item.proposetime.substr(4, 2) + '/' + item.proposetime.substr(6, 2) + '&nbsp;' + item.proposetime.substr(8, 2) + ':' + item.proposetime.substr(10, 2) + ':' + item.proposetime.substr(12, 2) + "</span>"//提出时间
                                            + "<span>" + item.executor + "</span>"//受理人
                                            + "<span class='time'>" + item.submittime + "</span>"//提交时间
                                            + "<span>" + item.acceptor + "</span>"//验收人
                                            + "<span class='time'>" + item.inspecttime + "</span>"//验收时间
                                            + "<input type='submit' class=" + "knowledge"+item.knowledge + ">"
                                            + "<span class='deletes'>" + "<span class='deletes--delete'>" + "删除" + "</span>" + "</span>"//删除
                                            + "</li>";
                                        $("#ul").html(con); //把内容入到这个div中
                                    }
                                    else {
                                        con += "<li class='datas'>"
                                            + "<span class='number'>" + xx + "</span>"//序号
                                            + "<span class='caption' id=" + item.num + ">" + item.title + "</span>"//标题
                                            + "<span>" + item.introducer + "</span>"//提出人
                                            + "<span class='time'>" + item.proposetime.substr(0, 4) + '/' + item.proposetime.substr(4, 2) + '/' + item.proposetime.substr(6, 2) + '&nbsp;' + item.proposetime.substr(8, 2) + ':' + item.proposetime.substr(10, 2) + ':' + item.proposetime.substr(12, 2) + "</span>"//提出时间
                                            + "<span>" + item.executor + "</span>"//受理人
                                            + "<span class='time'>" + item.submittime + "</span>"//提交时间
                                            + "<span>" + item.acceptor + "</span>"//验收人
                                            + "<span class='time'>" + item.inspecttime + "</span>"//验收时间
                                            + "<input type='submit' class=" + "knowledge"+item.knowledge + ">"
                                            + "<span class='deletes'>" + "<span class='deletes--delete'>" + "删除" + "</span>" + "</span>"//删除
                                            + "</li>";
                                        $("#ul").html(con); //把内容入到这个div中
                                    }
                                    li[vid[1] - 1].className = "active";
                                    actived();
                                    redirect();
                                }
                            }
                        });
                        // if ($('input').className == "knowledge1") {
                        //     $('input').className = "a";
                        // } else {
                        //     $('input').className = "submit";
                        // }
                        con = "";
                        arr = [];
                    }
                    //收起
                    if (vid[1] == Math.ceil(xx / page) + 1) {
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
                        a[Math.ceil(xx / page)].innerHTML = "&laquo;";
                    }
                })
            }
        }
        if (Math.ceil(age / page) < 11) {
            li[0].className = "active";
            actived();
            for (var i = 1; i <= li.length; i++) {
                a[i - 1].id = "a" + i;
                var aid = a[i - 1].id;
                //每页显示条数
                $.each(dataObj.ret, function (indexs, item) {
                    if (x == item.introducer || x == item.executor || x == item.acceptor) {
                        arr.push(indexs);
                        xx = arr.length;
                        if (xx <= page)
                            if (item.executor == null && item.submittime == null) {
                                item.executor = '&nbsp;';
                                item.submittime = '&nbsp;';
                                item.acceptor = '&nbsp;';
                                item.inspecttime = '&nbsp;';
                                con += "<li class='datas'>"
                                    + "<span class='number'>" + xx + "</span>"//序号
                                    + "<span class='caption' id=" + item.num + ">" + item.title + "</span>"//标题
                                    + "<span>" + item.introducer + "</span>"//提出人
                                    + "<span class='time'>" + item.proposetime.substr(0, 4) + '/' + item.proposetime.substr(4, 2) + '/' + item.proposetime.substr(6, 2) + '&nbsp;' + item.proposetime.substr(8, 2) + ':' + item.proposetime.substr(10, 2) + ':' + item.proposetime.substr(12, 2) + "</span>"//提出时间
                                    + "<span>" + item.executor + "</span>"//受理人
                                    + "<span class='time'>" + item.submittime + "</span>"//提交时间
                                    + "<span>" + item.acceptor + "</span>"//验收人
                                    + "<span class='time'>" + item.inspecttime + "</span>"//验收时间
                                    + "<input type='submit' class=" + "knowledge"+item.knowledge + ">"
                                    + "<span class='deletes'>" + "<span class='deletes--delete'>" + "删除" + "</span>" + "</span>"//删除
                                    + "</li>";
                                $("#ul").html(con); //把内容入到这个div中
                            }
                        if (item.acceptor == null && item.inspecttime == null) {
                            item.acceptor = '&nbsp;';
                            item.inspecttime = '&nbsp;';
                            con += "<li class='datas'>"
                                + "<span class='number'>" + xx + "</span>"//序号
                                + "<span class='caption' id=" + item.num + ">" + item.title + "</span>"//标题
                                + "<span>" + item.introducer + "</span>"//提出人
                                + "<span class='time'>" + item.proposetime.substr(0, 4) + '/' + item.proposetime.substr(4, 2) + '/' + item.proposetime.substr(6, 2) + '&nbsp;' + item.proposetime.substr(8, 2) + ':' + item.proposetime.substr(10, 2) + ':' + item.proposetime.substr(12, 2) + "</span>"//提出时间
                                + "<span>" + item.executor + "</span>"//受理人
                                + "<span class='time'>" + item.submittime + "</span>"//提交时间
                                + "<span>" + item.acceptor + "</span>"//验收人
                                + "<span class='time'>" + item.inspecttime + "</span>"//验收时间
                                + "<input type='submit' class=" + "knowledge"+item.knowledge + ">"
                                + "<span class='deletes'>" + "<span class='deletes--delete'>" + "删除" + "</span>" + "</span>"//删除
                                + "</li>";
                            $("#ul").html(con); //把内容入到这个div中
                        }
                        else {
                            con += "<li class='datas'>"
                                + "<span class='number'>" + xx + "</span>"//序号
                                + "<span class='caption' id=" + item.num + ">" + item.title + "</span>"//标题
                                + "<span>" + item.introducer + "</span>"//提出人
                                + "<span class='time'>" + item.proposetime.substr(0, 4) + '/' + item.proposetime.substr(4, 2) + '/' + item.proposetime.substr(6, 2) + '&nbsp;' + item.proposetime.substr(8, 2) + ':' + item.proposetime.substr(10, 2) + ':' + item.proposetime.substr(12, 2) + "</span>"//提出时间
                                + "<span>" + item.executor + "</span>"//受理人
                                + "<span class='time'>" + item.submittime + "</span>"//提交时间
                                + "<span>" + item.acceptor + "</span>"//验收人
                                + "<span class='time'>" + item.inspecttime + "</span>"//验收时间
                                + "<input type='submit' class=" + "knowledge"+item.knowledge + ">"
                                + "<span class='deletes'>" + "<span class='deletes--delete'>" + "删除" + "</span>" + "</span>"//删除
                                + "</li>";
                            $("#ul").html(con); //把内容入到这个div中
                        }
                    }
                });
                // if ($('input').className == "knowledge1") {
                //     $('input').className = "a";
                // } else {
                //     $('input').className = "submit";
                // }
                // control();
                redirect();
                actived();
                con = "";
                arr = [];
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
                        $.each(dataObj.ret, function (indexs, item) {
                            if (x == item.introducer || x == item.executor || x == item.acceptor) {
                                arr.push(indexs);
                                xx = arr.length;
                                if (xx > page * (vid[1] - 1) && xx <= page * vid[1]) {
                                    i = li.length - 1;
                                    if (item.executor == null && item.submittime == null) {
                                        item.executor = '&nbsp;';
                                        item.submittime = '&nbsp;';
                                        item.acceptor = '&nbsp;';
                                        item.inspecttime = '&nbsp;';
                                        con += "<li class='datas'>"
                                            + "<span class='number'>" + xx + "</span>"//序号
                                            + "<span class='caption' id=" + item.num + ">" + item.title + "</span>"//标题
                                            + "<span>" + item.introducer + "</span>"//提出人
                                            + "<span class='time'>" + item.proposetime.substr(0, 4) + '/' + item.proposetime.substr(4, 2) + '/' + item.proposetime.substr(6, 2) + '&nbsp;' + item.proposetime.substr(8, 2) + ':' + item.proposetime.substr(10, 2) + ':' + item.proposetime.substr(12, 2) + "</span>"//提出时间
                                            + "<span>" + item.executor + "</span>"//受理人
                                            + "<span class='time'>" + item.submittime + "</span>"//提交时间
                                            + "<span>" + item.acceptor + "</span>"//验收人
                                            + "<span class='time'>" + item.inspecttime + "</span>"//验收时间
                                            + "<input type='submit' class=" + "knowledge"+item.knowledge + ">"
                                            + "<span class='deletes'>" + "<span class='deletes--delete'>" + "删除" + "</span>" + "</span>"//删除
                                            + "</li>";
                                        $("#ul").html(con); //把内容入到这个div中
                                    }
                                    if (item.acceptor == null && item.inspecttime == null) {
                                        item.acceptor = '&nbsp;';
                                        item.inspecttime = '&nbsp;';
                                        con += "<li class='datas'>"
                                            + "<span class='number'>" + xx + "</span>"//序号
                                            + "<span class='caption' id=" + item.num + ">" + item.title + "</span>"//标题
                                            + "<span>" + item.introducer + "</span>"//提出人
                                            + "<span class='time'>" + item.proposetime.substr(0, 4) + '/' + item.proposetime.substr(4, 2) + '/' + item.proposetime.substr(6, 2) + '&nbsp;' + item.proposetime.substr(8, 2) + ':' + item.proposetime.substr(10, 2) + ':' + item.proposetime.substr(12, 2) + "</span>"//提出时间
                                            + "<span>" + item.executor + "</span>"//受理人
                                            + "<span class='time'>" + item.submittime + "</span>"//提交时间
                                            + "<span>" + item.acceptor + "</span>"//验收人
                                            + "<span class='time'>" + item.inspecttime + "</span>"//验收时间
                                            + "<input type='submit' class=" + "knowledge"+item.knowledge + ">"
                                            + "<span class='deletes'>" + "<span class='deletes--delete'>" + "删除" + "</span>" + "</span>"//删除
                                            + "</li>";
                                        $("#ul").html(con); //把内容入到这个div中
                                    }
                                    else {
                                        con += "<li class='datas'>"
                                            + "<span class='number'>" + xx + "</span>"//序号
                                            + "<span class='caption' id=" + item.num + ">" + item.title + "</span>"//标题
                                            + "<span>" + item.introducer + "</span>"//提出人
                                            + "<span class='time'>" + item.proposetime.substr(0, 4) + '/' + item.proposetime.substr(4, 2) + '/' + item.proposetime.substr(6, 2) + '&nbsp;' + item.proposetime.substr(8, 2) + ':' + item.proposetime.substr(10, 2) + ':' + item.proposetime.substr(12, 2) + "</span>"//提出时间
                                            + "<span>" + item.executor + "</span>"//受理人
                                            + "<span class='time'>" + item.submittime + "</span>"//提交时间
                                            + "<span>" + item.acceptor + "</span>"//验收人
                                            + "<span class='time'>" + item.inspecttime + "</span>"//验收时间
                                            + "<input type='submit' class=" + "knowledge"+item.knowledge + ">"
                                            + "<span class='deletes'>" + "<span class='deletes--delete'>" + "删除" + "</span>" + "</span>"//删除
                                            + "</li>";
                                        $("#ul").html(con); //把内容入到这个div中
                                    }
                                    li[vid[1] - 1].className = "active";
                                    actived();
                                    redirect();
                                    // control();
                                }
                            }
                        });
                        // if ($('input').className == "knowledge1") {
                        //     $('input').className = "a";
                        // } else {
                        //     $('input').className = "submit";
                        // }
                        con = "";
                        arr = [];
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
                $.each(dataObj.ret, function (indexs, item) {
                    if (x == item.introducer || x == item.executor || x == item.acceptor) {
                        arr.push(indexs);
                        xx = arr.length;
                        if (arr.length > page * (txt03 - 1) && arr.length <= page * txt03) {
                            //i = li.length - 1;
                            if (item.executor == null && item.submittime == null) {
                                item.executor = '&nbsp;';
                                item.submittime = '&nbsp;';
                                item.acceptor = '&nbsp;';
                                item.inspecttime = '&nbsp;';
                                con += "<li class='datas'>"
                                    + "<span class='number'>" + xx + "</span>"//序号
                                    + "<span class='caption' id=" + item.num + ">" + item.title + "</span>"//标题
                                    + "<span>" + item.introducer + "</span>"//提出人
                                    + "<span class='time'>" + item.proposetime.substr(0, 4) + '/' + item.proposetime.substr(4, 2) + '/' + item.proposetime.substr(6, 2) + '&nbsp;' + item.proposetime.substr(8, 2) + ':' + item.proposetime.substr(10, 2) + ':' + item.proposetime.substr(12, 2) + "</span>"//提出时间
                                    + "<span>" + item.executor + "</span>"//受理人
                                    + "<span class='time'>" + item.submittime + "</span>"//提交时间
                                    + "<span>" + item.acceptor + "</span>"//验收人
                                    + "<span class='time'>" + item.inspecttime + "</span>"//验收时间
                                    + "<input type='submit' class=" + "knowledge"+item.knowledge + ">"
                                    + "<span class='deletes'>" + "<span class='deletes--delete'>" + "删除" + "</span>" + "</span>"//删除
                                    + "</li>";
                                $("#ul").html(con); //把内容入到这个div中
                            }
                            if (item.acceptor == null && item.inspecttime == null) {
                                item.acceptor = '&nbsp;';
                                item.inspecttime = '&nbsp;';
                                con += "<li class='datas'>"
                                    + "<span class='number'>" + xx + "</span>"//序号
                                    + "<span class='caption' id=" + item.num + ">" + item.title + "</span>"//标题
                                    + "<span>" + item.introducer + "</span>"//提出人
                                    + "<span class='time'>" + item.proposetime.substr(0, 4) + '/' + item.proposetime.substr(4, 2) + '/' + item.proposetime.substr(6, 2) + '&nbsp;' + item.proposetime.substr(8, 2) + ':' + item.proposetime.substr(10, 2) + ':' + item.proposetime.substr(12, 2) + "</span>"//提出时间
                                    + "<span>" + item.executor + "</span>"//受理人
                                    + "<span class='time'>" + item.submittime + "</span>"//提交时间
                                    + "<span>" + item.acceptor + "</span>"//验收人
                                    + "<span class='time'>" + item.inspecttime + "</span>"//验收时间
                                    + "<input type='submit' class=" + "knowledge"+item.knowledge + ">"
                                    + "<span class='deletes'>" + "<span class='deletes--delete'>" + "删除" + "</span>" + "</span>"//删除
                                    + "</li>";
                                $("#ul").html(con); //把内容入到这个div中
                            }
                            else {
                                con += "<li class='datas'>"
                                    + "<span class='number'>" + xx + "</span>"//序号
                                    + "<span class='caption' id=" + item.num + ">" + item.title + "</span>"//标题
                                    + "<span>" + item.introducer + "</span>"//提出人
                                    + "<span class='time'>" + item.proposetime.substr(0, 4) + '/' + item.proposetime.substr(4, 2) + '/' + item.proposetime.substr(6, 2) + '&nbsp;' + item.proposetime.substr(8, 2) + ':' + item.proposetime.substr(10, 2) + ':' + item.proposetime.substr(12, 2) + "</span>"//提出时间
                                    + "<span>" + item.executor + "</span>"//受理人
                                    + "<span class='time'>" + item.submittime + "</span>"//提交时间
                                    + "<span>" + item.acceptor + "</span>"//验收人
                                    + "<span class='time'>" + item.inspecttime + "</span>"//验收时间
                                    + "<input type='submit' class=" + "knowledge"+item.knowledge + ">"
                                    + "<span class='deletes'>" + "<span class='deletes--delete'>" + "删除" + "</span>" + "</span>"//删除
                                    + "</li>";
                                $("#ul").html(con); //把内容入到这个div中
                            }
                            redirect();
                        }
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
                        actived();
                    } else {
                        alert('输入框不能为空');
                        return false;

                    }

                });
                // if ($('input').className == "knowledge1") {
                //     $('input').className = "a";
                // } else {
                //     $('input').className = "submit";
                // }
                con = "";
                arr = [];
            } else {
                alert("超出范围");
                return false;
            }
        })
    });

};
//请求数据
var call = function () {
    //获取fsession
    var aCookie = GetCookie('wytSession');
    session = eval('(' + aCookie + ')');
    if (session) {
        if (session.fsession == "undefined") {
            window.open('login.html', '_self');
            return;
        }
        if (session.User_NM) {

        }
        else {
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
    var s = ("svr=WS_00004" + "&fsession=" + fsession + "&userName=" + userName);
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
        beforeSend: LoadFunction, //加载执行方法
        error: erryFunction,  //错误执行方法
        success: function (result) {
            dataObj = result; //返回的result为json格式的数据
            age = dataObj.ret.length;
            $(document).ready(function () {
                paginationed();
            })
        }
    });
    function buildJson() {
        var std = JSON.stringify({});
        var stdTemplate = JSON.parse(std);
        stdTemplate.type = 1;
        return stdTemplate;
    }
};
//模糊搜索
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
    _template1 = buildJson();
    var s = ("svr=WS_00004" + "&fsession=" + fsession + "&userName=" + userName);
    var URL = "/webservice/?" + s;
    var form = new FormData();
    form.append("data", (JSON.stringify(_template1)));
    $.ajax({
        type: "post", //请求的方式，也有get请求
        url: URL, //请求地址，后台提供的,这里我在//本地自己建立了个json的文件做例子
        contentType: "application/json",
        data: form,//data是传给后台的字段，后台需要哪些就传入哪些
        dataType: "json", //json格式，后台返回的数据为json格式的。
        cache: false,
        processData: false,
        contentType: false,
        beforeSend: LoadFunction, //加载执行方法
        error: erryFunction,  //错误执行方法
        success: function (result) {
            dataObj = result; //返回的result为json格式的数据
            $.each(dataObj.ret, function (indexs, item) {
                var input = document.getElementsByTagName("input")[0];
                var ul = document.getElementById("select");
                ul.style.display = "none";
                input.onkeyup = function () {
                    remove();
                    var arr_1 = [];
                    for (var index = 0; index <= indexs; index++) {
                        if (dataObj.ret[index].title.indexOf(this.value) > -1 && this.value.length > 0) {
                            arr_1.push(dataObj.ret[index].title);
                        }
                    }
                    if (arr_1.length > 0) {
                        remove();
                        create(arr_1);
                        for (var i = 0; i < arr_1.length; i++) {
                            $("#a" + i).click(function (e) {
                                var s = e.target.id.split('a');
                                input.value = arr_1[s[1]];
                                ul.style.display = 'none';
                                let con = '';
                                $.each(dataObj.ret, function (indexs, item) {
                                    if (arr_1[s[1]] === item.title) {
                                        if (item.executor == null && item.submittime == null && item.acceptor == null && item.inspecttime == null) {
                                            item.executor = '&nbsp;';
                                            item.submittime = '&nbsp;';
                                            item.acceptor = '&nbsp;';
                                            item.inspecttime = '&nbsp;';
                                            con += "<li class='datas'>"
                                                + "<span class='number'>" + (indexs + 1) + "</span>"//序号
                                                + "<span class='caption' id=" + item.num + ">" + item.title + "</span>"//标题
                                                + "<span>" + item.introducer + "</span>"//提出人
                                                + "<span class='time'>" + item.proposetime.substr(0, 4) + '/' + item.proposetime.substr(4, 2) + '/' + item.proposetime.substr(6, 2) + '&nbsp;' + item.proposetime.substr(8, 2) + ':' + item.proposetime.substr(10, 2) + ':' + item.proposetime.substr(12, 2) + "</span>"//提出时间
                                                + "<span>" + '&nbsp;' + "</span>"//受理人
                                                + "<span class='time'>" + '&nbsp;' + "</span>"//提交时间
                                                + "<span>" + '&nbsp;' + "</span>"//验收人
                                                + "<span class='time'>" + '&nbsp;' + "</span>"//验收时间
                                                + "<input type='submit' class=" + "knowledge"+item.knowledge + ">"
                                                + "<span class='deletes'>" + "<span class='deletes--delete'>" + "删除" + "</span>" + "</span>"//删除
                                                + "</li>";
                                            $("#ul").html(con); //把内容入到这个div中
                                        }
                                        if (item.acceptor == null && item.inspecttime == null) {
                                            item.acceptor = '&nbsp;';
                                            item.inspecttime = '&nbsp;';
                                            con += "<li class='datas'>"
                                                + "<span class='number'>" + (indexs + 1) + "</span>"//序号
                                                + "<span class='caption' id=" + item.num + ">" + item.title + "</span>"//标题
                                                + "<span>" + item.introducer + "</span>"//提出人
                                                + "<span class='time'>" + item.proposetime.substr(0, 4) + '/' + item.proposetime.substr(4, 2) + '/' + item.proposetime.substr(6, 2) + '&nbsp;' + item.proposetime.substr(8, 2) + ':' + item.proposetime.substr(10, 2) + ':' + item.proposetime.substr(12, 2) + "</span>"//提出时间
                                                + "<span>" + '&nbsp;' + "</span>"//受理人
                                                + "<span class='time'>" + '&nbsp;' + "</span>"//提交时间
                                                + "<span>" + '&nbsp;' + "</span>"//验收人
                                                + "<span class='time'>" + '&nbsp;' + "</span>"//验收时间
                                                + "<input type='submit' class=" + "knowledge"+item.knowledge + ">"
                                                + "<span class='deletes'>" + "<span class='deletes--delete'>" + "删除" + "</span>" + "</span>"//删除
                                                + "</li>";
                                            $("#ul").html(con); //把内容入到这个div中
                                        }
                                        if (item.executor != null && item.submittime != null && item.executor != '&nbsp;' && item.submittime != '&nbsp;' && item.acceptor != null && item.inspecttime != null && item.acceptor != '&nbsp;' && item.inspecttime != '&nbsp;') {
                                            con += "<li class='datas'>"
                                                + "<span class='number'>" + (indexs + 1) + "</span>"//序号
                                                + "<span class='caption' id=" + item.num + ">" + item.title + "</span>"//标题
                                                + "<span>" + item.introducer + "</span>"//提出人
                                                + "<span class='time'>" + item.proposetime.substr(0, 4) + '/' + item.proposetime.substr(4, 2) + '/' + item.proposetime.substr(6, 2) + '&nbsp;' + item.proposetime.substr(8, 2) + ':' + item.proposetime.substr(10, 2) + ':' + item.proposetime.substr(12, 2) + "</span>"//提出时间
                                                + "<span>" + '&nbsp;' + "</span>"//受理人
                                                + "<span class='time'>" + '&nbsp;' + "</span>"//提交时间
                                                + "<span>" + '&nbsp;' + "</span>"//验收人
                                                + "<span class='time'>" + '&nbsp;' + "</span>"//验收时间
                                                + "<input type='submit' class=" + "knowledge"+item.knowledge + ">"
                                                + "<span class='deletes'>" + "<span class='deletes--delete'>" + "删除" + "</span>" + "</span>"//删除
                                                + "</li>";
                                            $("#ul").html(con); //把内容入到这个div中
                                        }
                                    }
                                    let _box = document.getElementById('box');
                                    _box.style.display = 'none'
                                });
                                // if ($('input').className == "knowledge1") {
                                //     $('input').className = "a";
                                // } else {
                                //     $('input').className = "submit";
                                // }
                                redirect();
                            })
                        }
                    }
                };

                //添加
                function create(arr_1) {
                    ul.style.display = "block";
                    for (var i = 0; i < arr_1.length; i++) {
                        var li = document.createElement("li");
                        li.innerHTML = "<a href='#' id='a" + i + "'>" + arr_1[i] + "</a>";
                        ul.appendChild(li);
                    }
                }

                //移除
                function remove() {
                    ul.style.display = "none";
                    for (var index = ul.childNodes.length - 1; index >= 0; index--) {
                        ul.removeChild(ul.childNodes[index]);
                    }
                }
            })
        }
    });
    function buildJson() {
        var std = JSON.stringify({});
        var stdTemplate = JSON.parse(std);
        stdTemplate.type = 0;
        return stdTemplate;
    }
});
$(document).ready(function () {
    document.getElementById('ul').addEventListener('click', function (e) {
        this.childNodes.forEach(function (v, k) {
            if (e.target === document.getElementsByClassName('knowledge0')[k]){
                var fsession = session.fsession;
                var userName = session.User_NM;
                _template1 = buildJson();
                var s = ("svr=WS_00013" + "&fsession=" + fsession + "&userName=" + userName);
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
                            e.target.value = '已提交';
                            e.target.className = 'knowledge1';
                            alert('成功');
                        }
                    }
                });
                function buildJson() {
                    var std = JSON.stringify({});
                    var stdTemplate = JSON.parse(std);
                    stdTemplate.num = e.target.parentNode.children[1].id;
                    return stdTemplate;
                }
            }

        })
    })
});
//时间搜索
$(document).ready(function () {
    $('#search').click(function () {
        function buildJson() {
            var std = JSON.stringify({});
            var stdTemplate = JSON.parse(std);
            stdTemplate.proposetime = proposetime;
            stdTemplate.problemstate = 2;
            return stdTemplate;
        }
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
        var con = '';
        var proposetime = document.getElementById('data').value.substr(0, 4) + document.getElementById('data').value.substr(5, 2) + document.getElementById('data').value.substr(8, 2);
        _template1 = buildJson();
        var s = ("svr=WS_00005" + "&fsession=" + fsession + "&userName=" + userName);
        var URL = "/webservice/?" + s;
        var form = new FormData();
        form.append("data", (JSON.stringify(_template1)));
        $.ajax({
            type: "post", //请求的方式，也有get请求
            url: URL, //请求地址，后台提供的,这里我在//本地自己建立了个json的文件做例子
            contentType: "application/json",
            data: form,//data是传给后台的字段，后台需要哪些就传入哪些
            dataType: "json", //json格式，后台返回的数据为json格式的。
            cache: false,
            processData: false,
            contentType: false,
            beforeSend: LoadFunction, //加载执行方法
            error: erryFunction,  //错误执行方法
            success: function (result) {
                dataObj = result; //返回的result为json格式的数据
                $.each(dataObj.ret, function (indexs, item) {
                    if (item.id == 0) {
                        alert('该日期无问题记录');
                    }
                    else {
                        if (item.executor == null && item.submittime == null && item.acceptor == null && item.inspecttime == null) {
                            item.executor = '&nbsp;';
                            item.submittime = '&nbsp;';
                            item.acceptor = '&nbsp;';
                            item.inspecttime = '&nbsp;';
                            con += "<li class='datas'>"
                                + "<span class='number'>" + (indexs + 1) + "</span>"//序号
                                + "<span class='caption' id=" + item.num + ">" + item.title + "</span>"//标题
                                + "<span>" + item.introducer + "</span>"//提出人
                                + "<span class='time'>" + item.proposetime.substr(0, 4) + '/' + item.proposetime.substr(4, 2) + '/' + item.proposetime.substr(6, 2) + '&nbsp;' + item.proposetime.substr(8, 2) + ':' + item.proposetime.substr(10, 2) + ':' + item.proposetime.substr(12, 2) + "</span>"//提出时间
                                + "<span>" + '&nbsp;' + "</span>"//受理人
                                + "<span class='time'>" + '&nbsp;' + "</span>"//提交时间
                                + "<span>" + '&nbsp;' + "</span>"//验收人
                                + "<span class='time'>" + '&nbsp;' + "</span>"//验收时间
                                + "<input type='submit' class=" + "knowledge"+item.knowledge + ">"
                                + "<span class='deletes'>" + "<span class='deletes--delete'>" + "删除" + "</span>" + "</span>"//删除
                                + "</li>";
                            $("#ul").html(con); //把内容入到这个div中
                        }
                        if (item.acceptor == null && item.inspecttime == null) {
                            item.acceptor = '&nbsp;';
                            item.inspecttime = '&nbsp;';
                            con += "<li class='datas'>"
                                + "<span class='number'>" + (indexs + 1) + "</span>"//序号
                                + "<span class='caption' id=" + item.num + ">" + item.title + "</span>"//标题
                                + "<span>" + item.introducer + "</span>"//提出人
                                + "<span class='time'>" + item.proposetime.substr(0, 4) + '/' + item.proposetime.substr(4, 2) + '/' + item.proposetime.substr(6, 2) + '&nbsp;' + item.proposetime.substr(8, 2) + ':' + item.proposetime.substr(10, 2) + ':' + item.proposetime.substr(12, 2) + "</span>"//提出时间
                                + "<span>" + '&nbsp;' + "</span>"//受理人
                                + "<span class='time'>" + '&nbsp;' + "</span>"//提交时间
                                + "<span>" + '&nbsp;' + "</span>"//验收人
                                + "<span class='time'>" + '&nbsp;' + "</span>"//验收时间
                                + "<input type='submit' class=" + "knowledge"+item.knowledge + ">"
                                + "<span class='deletes'>" + "<span class='deletes--delete'>" + "删除" + "</span>" + "</span>"//删除
                                + "</li>";
                            $("#ul").html(con); //把内容入到这个div中
                        }
                        if (item.executor != null && item.submittime != null && item.executor != '&nbsp;' && item.submittime != '&nbsp;' && item.acceptor != null && item.inspecttime != null && item.acceptor != '&nbsp;' && item.inspecttime != '&nbsp;') {
                            con += "<li class='datas'>"
                                + "<span class='number'>" + (indexs + 1) + "</span>"//序号
                                + "<span class='caption' id=" + item.num + ">" + item.title + "</span>"//标题
                                + "<span>" + item.introducer + "</span>"//提出人
                                + "<span class='time'>" + item.proposetime.substr(0, 4) + '/' + item.proposetime.substr(4, 2) + '/' + item.proposetime.substr(6, 2) + '&nbsp;' + item.proposetime.substr(8, 2) + ':' + item.proposetime.substr(10, 2) + ':' + item.proposetime.substr(12, 2) + "</span>"//提出时间
                                + "<span>" + '&nbsp;' + "</span>"//受理人
                                + "<span class='time'>" + '&nbsp;' + "</span>"//提交时间
                                + "<span>" + '&nbsp;' + "</span>"//验收人
                                + "<span class='time'>" + '&nbsp;' + "</span>"//验收时间
                                + "<input type='submit' class=" + "knowledge"+item.knowledge + ">"
                                + "<span class='deletes'>" + "<span class='deletes--delete'>" + "删除" + "</span>" + "</span>"//删除
                                + "</li>";
                            $("#ul").html(con); //把内容入到这个div中
                        }
                    }
                });
                // if ($('input').className == "knowledge1") {
                //     $('input').className = "a";
                // } else {
                //     $('input').className = "submit";
                // }
                con = '';
                redirect();
            }
        });
    })
});
////筛选
$(document).ready(function () {
    $('#selected').change(function () {
        if ($('#selected').val() == 1) {
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
            var s = ("svr=WS_00004" + "&fsession=" + fsession + "&userName=" + userName);
            var URL = "/webservice/?" + s;
            var form = new FormData();
            form.append("data", (JSON.stringify(_template1)));
            $.ajax({
                type: "post", //请求的方式，也有get请求
                url: URL, //请求地址，后台提供的,这里我在//本地自己建立了个json的文件做例子
                contentType: "application/json",
                data: form,//data是传给后台的字段，后台需要哪些就传入哪些
                dataType: "json", //json格式，后台返回的数据为json格式的。
                cache: false,
                processData: false,
                contentType: false,
                beforeSend: LoadFunction, //加载执行方法
                error: erryFunction,  //错误执行方法
                success: function (result) {
                    dataObj = result;
                    if (dataObj.ret[0].id == 0) {
                        alert('无搜索结果');
                    }
                    else {
                        dataObj = result; //返回的result为json格式的数据
                        paginationed();
                    }
                }
            });
            function buildJson() {
                var std = JSON.stringify({});
                var stdTemplate = JSON.parse(std);
                stdTemplate.type = 1;
                return stdTemplate;
            }
        }
        if ($('#selected').val() == 2) {
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
            var s = ("svr=WS_00004" + "&fsession=" + fsession + "&userName=" + userName);
            var URL = "/webservice/?" + s;
            var form = new FormData();
            form.append("data", (JSON.stringify(_template1)));
            $.ajax({
                type: "post", //请求的方式，也有get请求
                url: URL, //请求地址，后台提供的,这里我在//本地自己建立了个json的文件做例子
                contentType: "application/json",
                data: form,//data是传给后台的字段，后台需要哪些就传入哪些
                dataType: "json", //json格式，后台返回的数据为json格式的。
                cache: false,
                processData: false,
                contentType: false,
                beforeSend: LoadFunction, //加载执行方法
                error: erryFunction,  //错误执行方法
                success: function (result) {
                    dataObj = result;
                    if (dataObj.ret[0].id == 0) {
                        alert('无搜索结果');
                    }
                    else {
                        dataObj = result; //返回的result为json格式的数据
                        paginationed();
                    }
                }
            });
            function buildJson() {
                var std = JSON.stringify({});
                var stdTemplate = JSON.parse(std);
                stdTemplate.type = 2;
                return stdTemplate;
            }
        }
        if ($('#selected').val() == 3) {
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
            var s = ("svr=WS_00004" + "&fsession=" + fsession + "&userName=" + userName);
            var URL = "/webservice/?" + s;
            var form = new FormData();
            form.append("data", (JSON.stringify(_template1)));
            $.ajax({
                type: "post", //请求的方式，也有get请求
                url: URL, //请求地址，后台提供的,这里我在//本地自己建立了个json的文件做例子
                contentType: "application/json",
                data: form,//data是传给后台的字段，后台需要哪些就传入哪些
                dataType: "json", //json格式，后台返回的数据为json格式的。
                cache: false,
                processData: false,
                contentType: false,
                beforeSend: LoadFunction, //加载执行方法
                error: erryFunction,  //错误执行方法
                success: function (result) {
                    dataObj = result;
                    if (dataObj.ret[0].id == 0) {
                        alert('无搜索结果');
                    }
                    else {
                        dataObj = result; //返回的result为json格式的数据
                        paginationed();
                    }
                }
            });
            function buildJson() {
                var std = JSON.stringify({});
                var stdTemplate = JSON.parse(std);
                stdTemplate.type = 3;
                return stdTemplate;
            }
        }
    })
});
// 删除
let _popup = document.getElementsByClassName('popup')[0];
$("#cancel").click(function () {
    _popup.style.display = 'none';
});
$(document).ready(function () {
    let _popup = document.getElementsByClassName('popup')[0];
    document.getElementById('ul').addEventListener('click', function (e) {
        this.childNodes.forEach(function (v, k) {
            if (e.target === document.getElementsByClassName('deletes--delete')[k]) {
                _popup.style.display = 'inline-block';
                $('#delete').click(function () {
                    var fsession = session.fsession;
                    var userName = session.User_NM;
                    _template1 = buildJson();
                    var s = ("svr=WS_00014" + "&fsession=" + fsession + "&userName=" + userName);
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
                            if (dataObj.ret.id == 0){
                                alert('只能删除自己提出的问题');
                            }
                            else if (dataObj.ret.id == 2) {
                                alert('wentibucuozai');
                            } else if (dataObj.ret.id == 1){
                                var fsession = session.fsession;
                                var userName = session.User_NM;
                                _template1 = buildJsons();
                                var s = ("svr=WS_00004" + "&fsession=" + fsession + "&userName=" + userName);
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
                                    beforeSend: LoadFunction, //加载执行方法
                                    error: erryFunction,  //错误执行方法
                                    success: function (result) {
                                        dataObj = result; //返回的result为json格式的数据
                                        age = dataObj.ret.length;
                                        $(document).ready(function () {
                                            paginationed();
                                        })
                                    }
                                });
                                function buildJsons() {
                                    var std = JSON.stringify({});
                                    var stdTemplate = JSON.parse(std);
                                    stdTemplate.type = 1;
                                    return stdTemplate;
                                }
                            }
                        }
                    });
                    _popup.style.display = 'none';
                });
                function buildJson() {
                    var std = JSON.stringify({});
                    var stdTemplate = JSON.parse(std);
                    stdTemplate.num = e.target.parentNode.parentNode.children[1].id;
                    return stdTemplate;
                }
            }

        })
    });
});

