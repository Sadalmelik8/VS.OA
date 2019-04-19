// 获取从上个页面传过来的服务名称
let url = window.location.search; //获取url中"?"符后的字串
let oltid = url.substr(url.indexOf("=") + 1);
$(document).ready(function () {
    let data = document.getElementById('data');
    data.innerText = oltid;
    // alert(oltid);
    // 查看日志
    $('#btn').click(function () {
        location.href = "log.html?age=" + oltid;
    });
});
// 渲染页面
$(document).ready(function () {
    let package = document.getElementById("package");
    let module = document.getElementById("module");
    let service = document.getElementById("service");
    let state = document.getElementById("state");
    let log = document.getElementById("log");
    let explain = document.getElementById("explain");
    let ago = document.getElementById("ago");
    let later = document.getElementById("later");
    let whether = document.getElementById("whether");
    let code = document.getElementById("code");
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
                    package.value = item.age;
                    module.value = item.id;
                    service.value = item.name;
                    state.value = item.state;
                    log.value = item.log;
                    explain.value = item.explain;
                    ago.value = item.ago;
                    later.value = item.later;
                    whether.value = item.whether;
                    code.value = item.code;
                }
            })
        },
    });
    $("#bottom").click(function () {
        let jsondata = {
            "age":package.value,
            "id":module.value,
            "name":service.value,
            "state":state.value,
            "log":log.value,
            "explain":explain.value,
            "ago":ago.value,
            "later":later.value,
            "whether":whether.value,
            "code":code.value
        };
        // console.log(package.value);
        // console.log(module.value);
        // console.log(service.value);
        // console.log(state.value);
        // console.log(log.value);
        // console.log(explain.value);
        // console.log(ago.value);
        // console.log(later.value);
        // console.log(whether.value);
        // console.log(code.value);
        // console.log(jsondata);
        $.ajax({
            type: 'post',
            url: "http://localhost:63342/Management/test/open.json",
            contentType: "application/json",//如果想以json格式把数据提交到后台的话，这个必须有，否则只会当做表单提交
            data:jsondata,
            dataType: "json",//期待返回的数据类型
            success: function(){
                alert('上传成功');
                // console.log(jsondata);
            },
            error:function(){
                alert("上传失败");
            }
        });
    });
});
// 保存服务
// $(document).ready(function () {
//     $("#bottom").click(function () {
//         let jsondata = {
//             "package":item,
//             "id":item,
//             "name":item,
//             "state":item,
//             "log":"item",
//             "explain":"item",
//             "ago":"item",
//             "later":"item",
//             "whether":"item",
//             "code":"item"
//         };
//         $.ajax({
//             type: 'post',
//             url: "http://localhost:63342/Management/test/open.json",
//             contentType: "application/json",//如果想以json格式把数据提交到后台的话，这个必须有，否则只会当做表单提交
//             data:JSON.stringify(jsondata),
//             dataType: "json",//期待返回的数据类型
//             success: function(data){
//                 alert("success:"+ data);
//                 console.log(data);
//             },
//             error:function(data){
//                 alert("error"+data);
//             }
//         });
//     });
// });
