$(document).ready(function () {
    var datas = "";
    $('#btn').click(function () {
        var data = document.getElementById('data').value;
        if (data != "") {
            datas += data + "<br/>";
            //$('#get').html(datas);
            document.getElementById('get').innerHTML = datas;

        }
    });
    $('#p1').click(function () {
        readInfoToWeb();
    });
    //自动保存
    var readInfoToWeb = function () {
        var file = new File([datas], { type: "text/plain;charset=utf-8" });
        f5();
        console.log(timed);
        saveAs(file, timed);
    };
    // 默认日期
    var f5 = function () {
        var now = new Date();
        var nowTime = now.toLocaleString();
        var date = nowTime.substring(0, 10);//截取日期
        var time = nowTime.substring(14, 20); //截取时间
        var week = now.getDay(); //星期
        var hour = now.getHours(); //小时
        times = date + hour + time;
        timed = "";
        for (var i = 0; i < times.length; i++) {
            timed += times[i];
        }
    }

});
