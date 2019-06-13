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
    fsession = session.fsession;
    // 获取从上个页面传过来的服务名称
    let url = window.location.search;
    //获取url中"?"符后的字串
    let oltid = url.substr(url.indexOf("=") + 1);
    if (oltid == '') {
        //保存
        $("#bottom").click(function () {
            //如果有数据为空
            if (package.value === '') {
                alert("请把Package填完整");
            }
            if (module.value === '') {
                alert("请把Module填完整");
            }
            if (service.value === '') {
                alert("请把Service填完整");
            }
            if (state.value === '') {
                alert("请把服务状态填完整");
            }
            if (log.value === '') {
                alert("请把日志填完整");
            }
            if (explain.value === '') {
                alert("请把服务说明填完整");
            }
            if (ago.value === '') {
                alert("请把前处理填完整");
            }
            if (later.value === '') {
                alert("请把后处理填完整");
            }
            if (whether.value === '') {
                alert("请把是否允许浏览器访问填完整");
            }
            if (code.value === '') {
                alert("请把服务代码填完整");
            }
            //没有数据为空，则上传
            else {
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
                _template1 = buildJson();
                var s = ("svr=webadmin_00002" + "&fsession=" + fsession);
                var URL = "/webadmin/?" + s;
                var form = new FormData();
                form.append("data", (JSON.stringify(_template1)));
                $.ajax({
                    type: 'post',
                    url: URL,
                    contentType: "application/json",//如果想以json格式把数据提交到后台的话，这个必须有，否则只会当做表单提交
                    data: form,
                    cache: false,
                    processData: false,
                    contentType: false,
                    dataType: "json",//期待返回的数据类型
                    success: function (msg) {
                        if (msg.ret.id == 1) {
                            alert('新增成功');
                        }
                        if (msg.ret.id == 2) {
                            alert('已存在该服务！');
                        }
                        else {
                            alert('新增失败');
                        }
                    },
                    error: function () {
                        alert("请求失败");
                    }
                });
                function buildJson() {
                    var std = JSON.stringify({});
                    var stdTemplate = JSON.parse(std);
                    stdTemplate.pg = package.value;
                    stdTemplate.md = module.value;
                    stdTemplate.svr = service.value;
                    stdTemplate.sts = state.value;
                    stdTemplate.log = log.value;
                    stdTemplate.note = explain.value;
                    stdTemplate.after = ago.value;
                    stdTemplate.before = later.value;
                    stdTemplate.allowWeb = whether.value;
                    stdTemplate.content = code.value;
                    return stdTemplate;
                }
            }
        });
        state.value = 1;
        log.value = 1;
        ago.value = "fin.handle._afterHandle";
        later.value = "fin.handle._beforeHandle";
        whether.value = 0;
        $('#btn').click(function () {
            alert("无服务");
        })
    }
    if (oltid != '') {
        //更新
        $("#bottom").click(function () {
            //如果有数据为空
            if (package.value === '') {
                alert("请把Package填完整");
            }
            if (module.value === '') {
                alert("请把Module填完整");
            }
            if (service.value === '') {
                alert("请把Service填完整");
            }
            if (state.value === '') {
                alert("请把服务状态填完整");
            }
            if (log.value === '') {
                alert("请把日志填完整");
            }
            if (explain.value === '') {
                alert("请把服务说明填完整");
            }
            if (ago.value === '') {
                alert("请把前处理填完整");
            }
            if (later.value === '') {
                alert("请把后处理填完整");
            }
            if (whether.value === '') {
                alert("请把是否允许浏览器访问填完整");
            }
            if (code.value === '') {
                alert("请把服务代码填完整");
            }
            //没有数据为空，则上传
            else {
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
                _template1 = buildJson();
                var s = ("svr=webadmin_00006" + "&fsession=" + fsession);
                var URL = "/webadmin/?" + s;
                var form = new FormData();
                form.append("data", (JSON.stringify(_template1)));
                $.ajax({
                    type: 'post',
                    url: URL,
                    contentType: "application/json",//如果想以json格式把数据提交到后台的话，这个必须有，否则只会当做表单提交
                    data: form,
                    cache: false,
                    processData: false,
                    contentType: false,
                    dataType: "json",//期待返回的数据类型
                    success: function (msg) {
                        if (msg.ret.id == 1) {
                            alert('更新成功');
                        }
                        else {
                            alert('更新失败');
                        }
                    },
                    error: function () {
                        alert("请求失败");
                    }
                });
                function buildJson() {
                    var std = JSON.stringify({});
                    var stdTemplate = JSON.parse(std);
                    stdTemplate.svr = service.value;
                    stdTemplate.content = code.value;
                    return stdTemplate;
                }
            }
        });
        let keep = document.getElementById('bottom');
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
        let data = document.getElementById('data');
        data.innerText = oltid;
        mode = 'view';
        keep.value = '更新服务';
        package.readOnly = true;
        module.readOnly = true;
        service.readOnly = true;
        state.readOnly = true;
        log.readOnly = true;
        explain.readOnly = true;
        ago.readOnly = true;
        later.readOnly = true;
        whether.readOnly = true;
        $('#btn').click(function () {
            location.href = "log.html?age=" + oltid;
        });
        _template1 = buildJson(mode);
        var s = ("svr=webadmin_00001" + "&fsession=" + fsession);
        var URL = "/webadmin/?" + s;
        var form = new FormData();
        form.append("data", (JSON.stringify(_template1)));
        // 渲染页面
        $.ajax({
            type: "post", //请求的方式，也有get请求
            url: URL,
            data: form,//data是传给后台的字段，后台需要哪些就传入哪些
            dataType: "json", //json格式，后台返回的数据为json格式的。
            cache: false,
            processData: false,
            contentType: false,
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(XMLHttpRequest.status);
                //alert(XMLHttpRequest.readyState);
                //alert(textStatus);
                //alert(errorThrown);
            },
            success: function (result) {
                var dataObj = result;//返回的result为json格式的数据
                package.value = dataObj.ret.pg;
                module.value = dataObj.ret.md;
                service.value = dataObj.ret.svr;
                state.value = dataObj.ret.sts;
                log.value = dataObj.ret.log;
                explain.value = dataObj.ret.note;
                ago.value = dataObj.ret.handle.after;
                later.value = dataObj.ret.handle.before;
                whether.value = dataObj.ret.allowWeb;
                code.value = dataObj.ret.content;
            },
        });
        function buildJson(mode) {
            var std = JSON.stringify({});
            var stdTemplate = JSON.parse(std);
            stdTemplate.pg = '';
            stdTemplate.md = '';
            stdTemplate.svr = oltid;
            stdTemplate.mode = mode;
            return stdTemplate;
        }
    }



});
