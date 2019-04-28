function preLogin() {
    if (event.keyCode == 13) {
        login();
    }
}
var login = function () {
    tohtml = "index.html";
    document.cookie = 'wytSession=;';
    var username = document.getElementById('nm').value;
    var password = document.getElementById('pw').value;
    var t = new Date().getTime();
    var s = "svr=webadmin_00000&userNum=" + username + "&pd=" + password + "&t=" + t;
    var URL = "/webadmin/?" + s;
    $.ajax({
        type: 'get',
        url: URL,
        datatype: 'json',
        cache: false,
        processData: false,
        contentType: false,
        success: function (msg) {
            try {
                if (msg.status == "ok") {
                    var aCookie = '{\'ORG_NM\':\'' + msg.ret.user.nm;
                    aCookie += '\',\'ORG_NO\':\'' + msg.ret.user.id
                        + '\',\'fsession\':\'' + msg.ret.session
                        + '\',\'ORG_NO\':\'' + msg.ORG_NO + '\',\'UI_STYLE\':\''
                        + msg.UI_STYLE + '\',\'OPER_ID\':\'' + msg.OPER_ID
                        + '\',\'LOGIN_TM\':\'' + msg.LOGIN_TM + '\',\'SYS_CNL\':\''
                        + msg.SYS_CNL + '\',\'CUR_OPER_NO\':\'' + msg.CUR_OPER_NO
                        + '\',\'OPER_PROP\':\'' + msg.OPER_PROP
                        + '\',\'IS_SCREEN\':\'' + msg.IS_SCREEN
                        + '\',\'IS_PAGE\':\'' + msg.IS_PAGE
                        + '\',\'MS_REFRESH\':\'' + msg.MS_REFRESH
                        + '\',\'LINE_SHOW\':\'' + msg.LINE_SHOW
                        + '\',\'LAST_LOG_TM\':\'' + msg.LAST_LOG_TM
                        + '\',\'UPD_OPER\':\'' + msg.UPD_OPER + '\',\'LOG_MOD\':\''
                        + msg.LOG_MOD + '\',\'OPER_NM\':\'' + msg.ret.user.nm
                        + '\',\'OPER_NO\':\'' + msg.ret.user.id + '\',';

                    aCookie += '\'keep_NM\':\'0\'';
                    aCookie += '}';
                    var expdate = new Date();
                    expdate.setTime(expdate.getTime() + (86400 * 1000 * 1));
                    document.cookie = 'wytSession=' + escape(aCookie)
                        + ';expires=' + expdate.toGMTString();
                    window.open(tohtml, '_self');
                }
            }
            catch (e) { }
        }
    })
}
$(document).ready(function () {
    var tohtml = "";
    $('#dl').click(function () {
        login();
    })
})

