// 商品列表链接
$('.item li').on('touchstart',function (e) {
    e.preventDefault();
    location.href='./productDetails.html'
});
// fashion 链接
$('.fashion-left').on('touchstart',function () {
    location.href='./productDetails.html'
});
$('.fashion-right').on('touchstart',function () {
    location.href='./productDetails.html'
});
// 气质名媛
$('.lady li').on('touchstart',function () {
    location.href='./productDetails.html'
});



// 倒计时
var maxTime = 25*60 ;  //倒计时间
function time() {
    if(maxTime >= 0) {
        minutes = Math.floor(maxTime / 60);
        seconds = Math.floor(maxTime % 60);
        minutes = minutes >= 10 ? minutes : '0' + minutes;
        seconds = seconds >= 10 ? seconds : '0' + seconds;
        $('.minute').html(minutes);
        $('.second').html(seconds);
        maxTime--;
    }
}
   time();
var timer=null;
clearInterval(timer);
timer=setInterval(function () {
   time();
},1000);


// footer tab切换
// 移动端使用 touchstart 事件代替 click 事件
$('footer .navTabs a').on('touchstart',function () {
    $(this).find('img').eq(0).css('display','none');
    $(this).find('img').eq(1).css('display','block');
    $(this).find('p').eq(0).css('color','#F9B52C');

    $(this).siblings('a').find('img').css('display','none');
    $(this).siblings('a').eq(0).find('img').eq(0).css('display','block');
    $(this).siblings('a').eq(1).find('img').eq(0).css('display','block');
    $(this).siblings('a').eq(2).find('img').eq(0).css('display','block');
    $(this).siblings('a').find('p').css('color','#333333');
});


