var supportsPassive = false;
try {
    var opts = Object.defineProperty({}, 'passive', {
        get: function() {
            supportsPassive = true;
        }
    });
    window.addEventListener("test", null, opts);
} catch (e) {}

// Use our detect's results.
// passive applied if supported, capture will be false either way.

function fn() {

}
document.addEventListener("touchstart", $('#bg-btn1'), supportsPassive ? { passive: true } : false)

var movie= document.getElementById('movie1');
//头部的轮播部分
var swiper =  new Swiper ('.banner1 .swiper-container ', {
    loop:true,
    pagination: {
        el: '.banner1 .swiper-pagination',
        type: 'fraction',
    },
    on:{
        sliderMove: function(){
            // 让大的视频按钮隐藏
            // 这些都是图片上的
            $('.pause').hide();
            // 让视频按钮的的normal显示
            $('.normalpopto').show();
            // 让视频按钮的的active隐藏
            $('.activepopto').hide();
            // 让图片按钮的的active显示
            $('.activepic').show();
            // 让图片按钮的的normal隐藏
            $('.normal-photo').hide()
        },
    },
    })
// 返回图片页面的函数
function headerstyle() {
    movie.pause()
    $('.picture-box').show()
    $('.v-box').hide()

}
// 点击的大的播放按钮播放音乐
$('.pause').on('touchstart' ,function (e) {
    e.preventDefault();
    movie.play()
    $('.picture-box').hide()
    $('.v-box').show()
});
// 【图片】上的点击【视频】的按钮让大的视频按钮出来
    $('#bg-btn1').on('touchstart',function (e) {
        e.preventDefault();
        $('.pause').show();
        $('.picture-box').hide();
        $('.v-box').show();
        // 让视频按钮的的normal显示
        $('.normalpopto').show();
        // 让视频按钮的的active隐藏
        $('.activepopto').hide();
        // 让图片按钮的的active显示
        $('.activepic').show();
        // 让图片按钮的的normal隐藏
        $('.normal-photo').hide();
        movie.play();
        // console.log( $('#video-moive .normalpopto '))
        $('#video-moive .normalpopto ').hide();
        $('#video-moive .activepopto ').show();
        $('#video-moive .activepic ').hide();
        $('#video-moive .normal-photo ').show()
    });
// 【图片页面】的【视频】的按钮
$('#btnpic1').on('touchstart',function (e) {
    e.preventDefault();
    swiper.autoplay.start();
    $('.pause').hide();
    $('.activepic').show();
    // 让图片按钮的的normal隐藏
    $('.normal-photo').hide();
    // 让视频按钮的的normal显示
    $('.normalpopto').show();
    // 让视频按钮的的active隐藏
    $('.activepopto').hide()

});

// 点击【视频的图片】的按钮,就返回一级的图片的页面
$('#btnpic2').on('touchstart',function (e) {
    e.preventDefault();
    swiper.autoplay.start();
    headerstyle();
    $('.pause').hide();
    $('.activepic').show();
    // 让图片按钮的的normal隐藏
    $('.normal-photo').hide();
    // 让视频按钮的的normal显示
    $('.normalpopto').show();
    // 让视频按钮的的active隐藏
    $('.activepopto').hide()
});
// 点击【上面的返回的按钮】,就返回一级的图片的页面
$('#videoblack').on('touchstart',function (e) {
    e.preventDefault();
    headerstyle()
});

var mySwiper = new Swiper ('.re-content .swiper-container', {
    loop: true,
    autoplay:{
        delay:3000
    },
    // 如果需要分页器
    pagination: {
        el: '.re-content .swiper-pagination',
    },
});

// 点击加入购物车，如果用户没有登录，就弹出登录的页面，否则就弹出加入购物车
$('.shoppingcart').on('touchstart',function (e) {
    e.preventDefault();
    // $('body').addClass('active');
    $('.pop-up').show();
    $('.mask').show();
    top = $(window).scrollTop();//获取页面的scrollTop；
    $('body').css("top",-top+"px");//给body一个负的top值；
    $('body').addClass('add');//给body增加一个类，position:fixed;
});
// 点击立即购买，如果用户没有登录，就弹出登录的页面，否则就弹出加入购物车
$('.purchasenow').on('touchstart',function (e) {
    e.preventDefault();
    $('body').addClass('active');
    $('.pop-up').show();
    $('.mask').show();
});

var top = 0;//给top变量一个初始值，以便下方赋值并引用。

// 点击弹出层的x关闭弹出以及遮罩层{}
$('#close').on('touchstart',function (e) {
    e.preventDefault();
    $('.pop-up').hide();
    $('.mask').hide();
    $('body').removeClass('aaaadd');//去掉给body的类
    $(window).scrollTop(top);//设置页面滚动的高度，如果不设置，关闭弹出层时页面会回到顶部
    // $('body').removeClass('active')
});

// 点击店铺跳转到首页
var index=1;
$('.footer #pu').on('touchstart',function (e) {
    e.preventDefault();
    location.href='./storeIndex.html'
});
// 加入购物车
$('.tangou').on('touchstart',function (e){
    e.preventDefault();
    location.href='./购物车.html'
});
// 立即购买
$('.tanmai').on('touchstart',function (e){
    e.preventDefault();
    location.href='./confirm.html'
});

// 点击遮罩层的减号按钮
$('#pop-up .sub').on('touchstart',function (e) {
    e.preventDefault();
    index--;
    index=index >=1 ? index : 1;
    $('.num').html(index)

});
// 点击遮罩层的加号按钮
$('#pop-up .add').on('touchstart',function (e) {
    e.preventDefault();
    index++;
    index=index<=20?index:20;
    $('.num').html(index)
});
window.onscroll=function () {
    // console.log(document.documentElement.scrollTop+"-------")
    var top=document.documentElement.scrollTop
    if(top>350){
        $('.slide-titlebox').show()
    }
    if(top<=200){
        $('.slide-titlebox').hide()

    }

}
// 点击头部的缩略图，返会顶部
$('#backroubu').on('touchstart',function () {
    $('html').animate({scrollTop:0} ,500)
})
$('#service').on('touchstart',function () {
    location.href='https://xiaoyouxixianxian.github.io/letao/'
})