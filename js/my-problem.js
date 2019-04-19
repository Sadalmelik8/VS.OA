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
// // 默认日期
// $(document).ready(function () {
//     var f5 = function () {
//         var now = new Date();
//         var nowTime = now.toLocaleString();
//         var date = nowTime.substring(0, 10);//截取日期
//         var time = nowTime.substring(10, 20); //截取时间
//         var week = now.getDay(); //星期
//         var hour = now.getHours(); //小时
//         console.log(time);
//     };
//     $("#click").click(function () {
//         f5();
//     })
//
// });
//点击标题跳转
//点击跳转
//上个页面传的值
let redirect = function () {
    let oltid = '';
    $(".caption").click(function (e) {
        oltid = e.target.innerText;
        location.href = "update.html?age=" + oltid;
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
                $.each(dataObj, function (indexs, item) {
                    if (indexs < page) {
                        con += "<li class='datas'>"
                            + "<span class='number'>" + (indexs + 1) + "</span>"
                            + "<span class='caption'>" + item.age + "</span>"
                            + "<span>" + item.name + "</span>"
                            + "<span>" + item.state + "</span>"
                            + "<span>" + item.log + "</span>"
                            + "<span>" + item.explain + "</span>"
                            + "<span>" + item.whether + "</span>"
                            + "<span>" + item.later + "</span>"
                            + "<span>" + item.ago + "</span>"
                            + "<input type='submit' class='submit'>"
                            + "</li>";
                        $("#ul").html(con); //把内容入到这个div中
                    }
                });
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
                        $.each(dataObj, function (indexs, item) {
                            if (indexs >= page * (vid[1] - 1) && indexs < page * vid[1]) {
                                i = li.length - 1;
                                con += "<li class='datas'>"
                                    + "<span class='number'>" + (indexs + 1) + "</span>"
                                    + "<span class='caption'>" + item.age + "</span>"
                                    + "<span>" + item.name + "</span>"
                                    + "<span>" + item.state + "</span>"
                                    + "<span>" + item.log + "</span>"
                                    + "<span>" + item.explain + "</span>"
                                    + "<span>" + item.whether + "</span>"
                                    + "<span>" + item.later + "</span>"
                                    + "<span>" + item.ago + "</span>"
                                    + "<input type='submit' class='submit'>"
                                    + "</li>";
                                $("#ul").html(con); //把内容入到这个div中
                                li[vid[1] - 1].className = "active";
                                actived();
                                redirect();
                            }
                        });
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
        }
        if (Math.ceil(age / page) < 11) {
            li[0].className = "active";
            actived();
            for (var i = 1; i <= li.length; i++) {
                a[i - 1].id = "a" + i;
                var aid = a[i - 1].id;
                //每页显示条数
                $.each(dataObj, function (indexs, item) {
                    if (indexs < page) {
                        con += "<li class='datas'>"
                            + "<span class='number'>" + (indexs + 1) + "</span>"
                            + "<span class='caption'>" + item.age + "</span>"
                            + "<span>" + item.name + "</span>"
                            + "<span>" + item.state + "</span>"
                            + "<span>" + item.log + "</span>"
                            + "<span>" + item.explain + "</span>"
                            + "<span>" + item.whether + "</span>"
                            + "<span>" + item.later + "</span>"
                            + "<span>" + item.ago + "</span>"
                            + "<input type='submit' class='submit'>"
                            + "</li>";
                        $("#ul").html(con); //把内容入到这个div中
                    }
                });
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
                        $.each(dataObj, function (indexs, item) {
                            if (indexs >= page * (vid[1] - 1) && indexs < page * vid[1]) {
                                i = li.length - 1;
                                con += "<li class='datas'>"
                                    + "<span class='number'>" + (indexs + 1) + "</span>"
                                    + "<span class='caption'>" + item.age + "</span>"
                                    + "<span>" + item.name + "</span>"
                                    + "<span>" + item.state + "</span>"
                                    + "<span>" + item.log + "</span>"
                                    + "<span>" + item.explain + "</span>"
                                    + "<span>" + item.whether + "</span>"
                                    + "<span>" + item.later + "</span>"
                                    + "<span>" + item.ago + "</span>"
                                    + "<input type='submit' class='submit'>"
                                    + "</li>";
                                $("#ul").html(con); //把内容入到这个div中
                                li[vid[1] - 1].className = "active";
                                actived();
                                redirect();
                            }
                        });
                        con = "";
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
                $.each(dataObj, function (indexs, item) {
                    if (indexs >= page * (txt03 - 1) && indexs < page * txt03) {
                        //i = li.length - 1;
                        con += "<li class='datas'>"
                            + "<span class='number'>" + (indexs + 1) + "</span>"
                            + "<span class='caption'>" + item.age + "</span>"
                            + "<span>" + item.name + "</span>"
                            + "<span>" + item.state + "</span>"
                            + "<span>" + item.log + "</span>"
                            + "<span>" + item.explain + "</span>"
                            + "<span>" + item.whether + "</span>"
                            + "<span>" + item.later + "</span>"
                            + "<span>" + item.ago + "</span>"
                            + "<input type='submit' class='submit'>"
                            + "</li>";
                        $("#ul").html(con); //把内容入到这个div中
                        redirect();
                        actived();
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
                con = "";
            } else {
                alert("超出范围");
            }
        })
    });
};
//页面内容
var paginationeds = function () {
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
                $.each(dataObj, function (indexs, item) {
                    if (x == item.name || x == item.explain || x == item.whether || x == "全部") {
                        arr.push(indexs);
                        xx = arr.length;
                        if (arr.length <= page && (x == item.name || x == item.explain || x == item.whether)) {
                            con += "<li class='datas'>"
                                + "<span class='number'>" + (indexs + 1) + "</span>"
                                + "<span class='caption'>" + item.age + "</span>"
                                + "<span>" + item.name + "</span>"
                                + "<span>" + item.state + "</span>"
                                + "<span>" + item.log + "</span>"
                                + "<span>" + item.explain + "</span>"
                                + "<span>" + item.whether + "</span>"
                                + "<span>" + item.later + "</span>"
                                + "<span>" + item.ago + "</span>"
                                + "<input type='submit' class='submit'>"
                                + "</li>";
                            $("#ul").html(con); //把内容入到这个div中
                        }
                    }
                });

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
                        $.each(dataObj, function (indexs, item) {
                            if (x == item.name || x == item.explain || x == item.whether) {
                                arr.push(indexs);
                                xx = arr.length;
                                if (arr.length > page * (vid[1] - 1) && arr.length <= page * vid[1]) {
                                    i = li.length - 1;
                                    con += "<li class='datas'>"
                                        + "<span class='number'>" + (indexs + 1) + "</span>"
                                        + "<span class='caption'>" + item.age + "</span>"
                                        + "<span>" + item.name + "</span>"
                                        + "<span>" + item.state + "</span>"
                                        + "<span>" + item.log + "</span>"
                                        + "<span>" + item.explain + "</span>"
                                        + "<span>" + item.whether + "</span>"
                                        + "<span>" + item.later + "</span>"
                                        + "<span>" + item.ago + "</span>"
                                        + "<input type='submit' class='submit'>"
                                        + "</li>";
                                    $("#ul").html(con); //把内容入到这个div中
                                    li[vid[1] - 1].className = "active";
                                    actived();
                                    redirect();
                                }
                            }
                        });
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
                $.each(dataObj, function (indexs, item) {
                    if (x == item.name || x === item.explain || x === item.whether) {
                        console.log(a);
                        console.log(item.name);
                        arr.push(indexs);
                        xx = arr.length;
                        if (xx <= page)
                            con += "<li class='datas'>"
                                + "<span class='number'>" + (indexs + 1) + "</span>"
                                + "<span class='caption'>" + item.age + "</span>"
                                + "<span>" + item.name + "</span>"
                                + "<span>" + item.state + "</span>"
                                + "<span>" + item.log + "</span>"
                                + "<span>" + item.explain + "</span>"
                                + "<span>" + item.whether + "</span>"
                                + "<span>" + item.later + "</span>"
                                + "<span>" + item.ago + "</span>"
                                + "<input type='submit' class='submit'>"
                                + "</li>";
                        $("#ul").html(con); //把内容入到这个div中
                    }
                });
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
                        $.each(dataObj, function (indexs, item) {
                            if (x == item.name || x === item.explain || x === item.whether) {
                                arr.push(indexs);
                                xx = arr.length;
                                if (xx > page * (vid[1] - 1) && xx <= page * vid[1]) {
                                    i = li.length - 1;
                                    con += "<li class='datas'>"
                                        + "<span class='number'>" + (indexs + 1) + "</span>"
                                        + "<span class='caption'>" + item.age + "</span>"
                                        + "<span>" + item.name + "</span>"
                                        + "<span>" + item.state + "</span>"
                                        + "<span>" + item.log + "</span>"
                                        + "<span>" + item.explain + "</span>"
                                        + "<span>" + item.whether + "</span>"
                                        + "<span>" + item.later + "</span>"
                                        + "<span>" + item.ago + "</span>"
                                        + "<input type='submit' class='submit'>"
                                        + "</li>";
                                    $("#ul").html(con); //把内容入到这个div中
                                    li[vid[1] - 1].className = "active";
                                    actived();
                                    redirect();
                                    // control();
                                }
                            }
                        });
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
                $.each(dataObj, function (indexs, item) {
                    if (x == item.name || x === item.explain || x === item.whether) {
                        arr.push(indexs);
                        xx = arr.length;
                        if (arr.length > page * (txt03 - 1) && arr.length <= page * txt03) {
                            //i = li.length - 1;
                            con += "<li class='datas'>"
                                + "<span class='number'>" + (indexs + 1) + "</span>"
                                + "<span class='caption'>" + item.age + "</span>"
                                + "<span>" + item.name + "</span>"
                                + "<span>" + item.state + "</span>"
                                + "<span>" + item.log + "</span>"
                                + "<span>" + item.explain + "</span>"
                                + "<span>" + item.whether + "</span>"
                                + "<span>" + item.later + "</span>"
                                + "<span>" + item.ago + "</span>"
                                + "<input type='submit' class='submit'>"
                                + "</li>";
                            $("#ul").html(con); //把内容入到这个div中
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
    $.ajax({
        type: "get", //请求的方式，也有get请求
        url: "http://localhost:63342/Management/test/open.json", //请求地址，后台提供的,这里我在//本地自己建立了个json的文件做例子
        data: {},//data是传给后台的字段，后台需要哪些就传入哪些
        dataType: "json", //json格式，后台返回的数据为json格式的。
        beforeSend: LoadFunction, //加载执行方法
        error: erryFunction,  //错误执行方法
        success: function (result) {
            dataObj = result; //返回的result为json格式的数据
            age = dataObj.length;
            $(document).ready(function () {
                paginationed();
            })
        }
    });
};
//搜索
$(document).ready(function () {
    $.ajax({
        type: "get", //请求的方式，也有post请求
        url: "http://localhost:63342/Management/test/open.json", //请求地址，后台提供的,这里我在//本地自己建立了个json的文件做例子
        data: {},//data是传给后台的字段，后台需要哪些就传入哪些
        dataType: "json", //json格式，后台返回的数据为json格式的。
        beforeSend: LoadFunction, //加载执行方法
        error: erryFunction,  //错误执行方法
        success: function (result) {
            dataObj = result; //返回的result为json格式的数据
            $.each(dataObj, function (indexs, item) {
                var input = document.getElementsByTagName("input")[0];
                var ul = document.getElementById("select");
                ul.style.display = "none";
                input.onkeyup = function () {
                    remove();
                    var arr_1 = [];
                    for (var index = 0; index < indexs; index++) {
                        if (dataObj[index].log.indexOf(this.value) > -1 && this.value.length > 0) {
                            arr_1.push(dataObj[index].log);
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
                                $.each(dataObj, function (indexs, item) {
                                    if (arr_1[s[1]] === item.log) {
                                        con += "<li class='datas'>"
                                            + "<span class='number'>" + (indexs + 1) + "</span>"
                                            + "<span class='caption'>" + item.age + "</span>"
                                            + "<span>" + item.name + "</span>"
                                            + "<span>" + item.state + "</span>"
                                            + "<span>" + item.log + "</span>"
                                            + "<span>" + item.explain + "</span>"
                                            + "<span>" + item.whether + "</span>"
                                            + "<span>" + item.later + "</span>"
                                            + "<span>" + item.ago + "</span>"
                                            + "<input type='submit' class='submit'>"
                                            + "</li>";
                                    }
                                    $("#ul").html(con);
                                    let _box = document.getElementById('box');
                                    _box.style.display = 'none'
                                })
                            })
                        }
                    }
                };

                //添加
                function create(arr_1) {
                    ul.style.display = "block";
                    for (var i = 0; i < 10; i++) {
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
});
//筛选
$(document).ready(function () {
    $(".present").click(function (e) {
        // let a = document.getElementsByClassName('present');
        let b = document.getElementsByClassName('b');
        let introducer = document.getElementsByClassName('introducer');
        let receiver = document.getElementsByClassName('receiver');
        let acceptor = document.getElementsByClassName('acceptor');
        let text = e.target.innerText;
        for (var i = 0; i < 3; i++) {
            if (text === '提出人') {
                introducer[i].style.display = "block";
                receiver[i].style.display = "none";
                acceptor[i].style.display = "none";

                // console.log(introducer[i]);
                // console.log(i);
            } else if (text === '受理人') {
                receiver[i].style.display = "block";
                introducer[i].style.display = "none";
                acceptor[i].style.display = "none";

                // console.log(introducer[i]);
                // console.log(i);
            } else if (text === '验收人') {
                introducer[i].style.display = "none";
                receiver[i].style.display = "none";
                acceptor[i].style.display = "block";

                // console.log(acceptor[i]);
                // console.log(i);
            } else if (introducer[i] || receiver[i] || acceptor[i].style.display === 'block') {
                b[i].style.display = 'none';
            }
        }
    })
});
$(document).ready(function () {
    arr = [];
    xx = "";
    $(".introducer").click(function (e) {

        var introducered = document.getElementById('introducer');
        var b = introducered.getElementsByTagName('b');
        for (var i = 0; i < b.length; i++) {
            b[i].style.display = "none";
        }
        $.ajax({
            type: "get", //请求的方式，也有get请求
            url: "http://localhost:63342/Management/test/open.json", //请求地址，后台提供的,这里我在//本地自己建立了个json的文件做例子
            data: {},//data是传给后台的字段，后台需要哪些就传入哪些
            dataType: "json", //json格式，后台返回的数据为json格式的。
            beforeSend: LoadFunction, //加载执行方法
            error: erryFunction,  //错误执行方法
            success: function (result) {
                dataObj = result; //返回的result为json格式的数据
                x = e.target.innerText;
                $.each(dataObj, function (indexs, item) {
                    if (x === '全部' && indexs == dataObj.length - 1) {
                        paginationed();
                    }
                    if (x == item.name) {
                        arr.push(indexs);
                        xx = arr.length;
                    }
                });
                if (x != '全部') {
                    paginationeds()
                }
            }
        });
    });
    $(".receiver").click(function (e) {

        var receiver = document.getElementById('receiver');
        var b = receiver.getElementsByTagName('b');
        for (var i = 0; i < b.length; i++) {
            b[i].style.display = "none";
        }
        $.ajax({
            type: "get", //请求的方式，也有get请求
            url: "http://localhost:63342/Management/test/open.json", //请求地址，后台提供的,这里我在//本地自己建立了个json的文件做例子
            data: {},//data是传给后台的字段，后台需要哪些就传入哪些
            dataType: "json", //json格式，后台返回的数据为json格式的。
            beforeSend: LoadFunction, //加载执行方法
            error: erryFunction,  //错误执行方法
            success: function (result) {
                dataObj = result; //返回的result为json格式的数据
                x = e.target.innerText;
                $.each(dataObj, function (indexs, item) {
                    if (x === '全部' && indexs == dataObj.length - 1) {
                        paginationed();
                    }
                    if (x == item.explain) {
                        arr.push(indexs);
                        xx = arr.length;
                    }
                });
                if (x != '全部') {
                    paginationeds()
                }
            }
        })
    });
    $(".acceptor").click(function (e) {
        var acceptor = document.getElementById('acceptor');
        var b = acceptor.getElementsByTagName('b');
        for (var i = 0; i < b.length; i++) {
            b[i].style.display = "none";
        }
        $.ajax({
            type: "get", //请求的方式，也有get请求
            url: "http://localhost:63342/Management/test/open.json", //请求地址，后台提供的,这里我在//本地自己建立了个json的文件做例子
            data: {},//data是传给后台的字段，后台需要哪些就传入哪些
            dataType: "json", //json格式，后台返回的数据为json格式的。
            beforeSend: LoadFunction, //加载执行方法
            error: erryFunction,  //错误执行方法
            success: function (result) {
                dataObj = result; //返回的result为json格式的数据
                x = e.target.innerText;
                $.each(dataObj, function (indexs, item) {
                    if (x === '全部' && indexs == dataObj.length - 1) {
                        paginationed();
                    }
                    if (x === item.whether) {
                        arr.push(indexs);
                        xx = arr.length;
                    }
                });
                if (x !== '全部') {
                    paginationeds()
                }
            }
        })
    });
});

