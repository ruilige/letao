// 向注册页面的跳转

$('.res').on('touchstart',function () {
    location.href='http://it.taobao.com/'
})

// 验证成功或是失败的提示的图片
function tip(str, el ,close,ok) {
    var txt=el.val()
    var text=txt.replace(/\s/g,'')
    if(str.test(text)){
        ok.css('display','block');
        close.css('display','none');
    }
    else {
        close.css('display','block');
        ok.css('display','none');
    }
}
// 正则验证手机号
//当获取焦点的时候去掉提示的样式
$('#username').on('focus',function () {
    $('#close1').css('display','none');
    $('#ok1').css('display','none');
})

//当失去焦点的时候去掉提示的样式
$('#username').on('blur',function () {
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    tip(myreg,$('#username'),$('#close1'),$('#ok1'))
})
// 正则登录密码
$('#psd').on('focus',function () {
    $('#close2').css('display','none');
    $('#ok2').css('display','none');
})

// 当失去焦点的时候去掉提示的样式
$('#psd').on('blur',function () {
    //密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
    var reg=/^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
    tip(reg,$('#psd'),$('#close2'),$('#ok2'))
})



    //点击登录，检查登录成功与否
function checked() {
    $.ajax({
        type: 'get',
        url: 'http://172.25.7.101:8080/joint_project/user?opr=login',//后台给的数据接口
        // 向后台发送的数据
        data:  {
            // 获取用户输入的用户名
            phoneNumber: $('#username').val(),
            // 获取用户输入的密码
            userPassword:$('#psd').val()
        },

        success: function(data){
            console.log(data);
            if(data==1){
                location.href='https://www.baidu.com/'
            }else {
                $('#myModal').modal()
            }
            $('#username').val('')
            $('#psd').val('')
        },
        error: function(err){
            console.log(err)
        }
    })
}





// 用户名cookie
function setcookie(name,val,day) {
    var oDate=new Date()
    oDate.setDate(oDate.getDate()+day)
    document.cookie=name+'='+val+';expires='+oDate;
}
function getcookie(name) {
    // console.log(document.cookie)
    var arr=document.cookie.split(';')
    for(var i=0;i<arr.length;i++){
        var arr2=arr[i].split('=')
        if(arr2[0]==name){
            return arr2[1]
        }
    }
    return ''

}
function removecookie(name) {
    setcookie(name,'aa',-1)
}
$('.deng').on('touchstart',function () {
    // $('#myModal').modal()
      checked()
    setcookie('username', $('#username').val(),30)
})
// $('#username').val()=getcookie('username')
$('#username').attr('value',getcookie('username'));


