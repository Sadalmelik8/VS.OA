let url = window.location.search; //获取url中"?"符后的字串
let oltid = url.substr(url.indexOf("=") + 1);
$(document).ready(function () {
    let data = document.getElementById('service');
    data.innerText = oltid;
    var time = new Date();
    var day = ("0" + time.getDate()).slice(-2);
    var month = ("0" + (time.getMonth() + 1)).slice(-2);
    var today = time.getFullYear() + "-" + (month) + "-" + (day);
    $('#data').val(today);
});
$(document).ready(function () {
    // let _ul = document.getElementById('ul');
    // _ul.style.border = 'none';
    $.ajax({
        type: "get", //请求的方式，也有get请求
        url: "http://localhost:63342/Management/test/open.json", //请求地址，后台提供的,这里我在本地自己建立了个json的文件做例子
        data: {},//data是传给后台的字段，后台需要哪些就传入哪些
        dataType: "json", //json格式，后台返回的数据为json格式的。
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
        },
        success: function (result) {
            let dataObj = result;
            let icon = document.getElementById('icon');
            // let ul = document.getElementById('ul');
            // let li = ul.getElementsByTagName('li');
            let con = '';
            $.each(dataObj, function (indexs, item) {
                if (item.age == oltid){
                    con += "<li>"
                        + "<span class='log--icon__time' id='time'>" + (item.id) + "</span>"
                        + "<span class='log--icon__name name' id='name'>" + (item.name) + "</span>"
                        + "</li>";
                    $("#ul").html(con);
                    $(".name").click(function () {
                        icon.innerText = item.explain;
                    })
                }
            });
        }
    });
});
