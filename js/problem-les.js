// 获取从上个页面传过来的服务名称
let url = window.location.search; //获取url中"?"符后的字串
let oltid = url.substr(url.indexOf("=") + 1);
$(document).ready(function () {
    let data = document.getElementsByClassName('title')[0];
    data.value = oltid;
});
$(document).ready(function () {
    let details = document.getElementsByClassName("details")[0];
    $.ajax({
        type: "get", //请求的方式，也有get请求
        url: "http://localhost:63342/Management/test/open.json" , //请求地址，后台提供的,这里我在本地自己建立了个json的文件做例子
        data: {},//data是传给后台的字段，后台需要哪些就传入哪些
        dataType: "json", //json格式，后台返回的数据为json格式的。
        // beforeSend: LoadFunction, //加载执行方法
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
            //alert(XMLHttpRequest.readyState);
            //alert(textStatus);
            //alert(errorThrown);
        },
        success: function (result) {
            var dataObj = result;//返回的result为json格式的数据
            $.each(dataObj, function (index, item) {
                if (item.age == oltid) {
                    details.innerHTML = item.code;
                }
            })
        },
    });
});
