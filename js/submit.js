$(document).ready(function () {
    $("#submit").click(function () {
        let title = document.getElementsByClassName('title')[0].innerHTML;
        // let particular = document.getElementById('icon').innerHTML;
        $.ajax({
            type:'get',
            url:"http://localhost:63342/Management/test/open.json",
            data: {title},//data是传给后台的字段，后台需要哪些就传入哪些
            dataType: "json", //json格式，后台返回的数据为json格式的。
            success:function (data) {
                alert("上传成功");
            },
            error:function () {
                alert('上传失败')
            }
        })
    })
});
