// $('.register-box .input-box .input-bottom input').on('focus', function () {
//     $('.register-box .input-box .input-bottom img').css('display', 'none')
// });
//
// 用户名正则验证

$('#regPhone').on('focus', function () {
}).blur(function () {
    var text = $(this).val();
    text = text.replace(/[\s]g/, '');
    $(this).value = text;
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(text)) {
        $('.register-box .input-box .input-bottom #cpn-no').css('display', 'block');
        $('.register-box .input-box .input-bottom #cpn-ok').css('display', 'none');
    } else {
        $('.register-box .input-box .input-bottom #cpn-ok').css('display', 'block');
        $('.register-box .input-box .input-bottom #cpn-no').css('display', 'none')
    }
});

// 密码正则验证

$('#regPsw').on('focus', function () {
}).blur(function () {
    var text = $(this).val();
    text = text.replace(/[\s]g/, '');
    $(this).value = text;
    var pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
    if (!pPattern.test(text)) {
        $('.register-box .input-box .input-bottom #psw-no').css('display', 'block');
        $('.register-box .input-box .input-bottom #psw-ok').css('display', 'none');
    } else {
        $('.register-box .input-box .input-bottom #psw-ok').css('display', 'block');
        $('.register-box .input-box .input-bottom #psw-no').css('display', 'none');
    }
});

// 重复密码正则验证

$('#regsPsw').on('blur', function () {
    var pswid = $('#regPsw').val();
    var repswid = $('#regsPsw').val();
    if (pswid != repswid || pswid === '' || repswid === '') {
        $('.register-box .input-box .input-bottom #vspsw-no').css('display', 'block');
        $('.register-box .input-box .input-bottom #vspsw-ok').css('display', 'none');
    } else {
        $('.register-box .input-box .input-bottom #vspsw-ok').css('display', 'block');
        $('.register-box .input-box .input-bottom #vspsw-no').css('display', 'none');
    }
});

// 注册是否成功
//
// $('.register-box .section .img-des').on('touchstart', function () {
//     var pswid = $('#regPsw').val();
//     var repswid = $('#regsPsw').val();
    // if (pswid === repswid) {
    //     alert('注册成功')
    // }



$('.register-box .section .img-des').on('touchstart', function () {
    $.ajax({
        type: 'get',
        url: 'http://172.25.7.101:8080/joint_project/user?opr=register',// 后台url地址
        data: {// 回调函数
            // 用户名的数据
            phoneNumber: $('#regPhone').val(),
            // 密码的数据
            userPassword: $('#regPsw').val()
        },
        success: function(data){
            console.log(data);
            if(data==1){
                location.href='https://www.baidu.com/'
            }else {

            }
        },
        error: function(err){

            console.log(err)
        }
    })

});