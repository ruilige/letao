
// 订单详情TAB栏切换 代码
$('.Details-list-Box header .Details-list-top-TAB ul li').on('touchstart',function () {
    var text = $(this).index();
    $('.Details-list-Box header .Details-list-top-TAB ul li').eq(text)
        .addClass('active-li').siblings().removeClass('active-li');
// .Details-ppc p的第text个显示
    $('.Details-ppc p').eq(text).show().siblings().hide();});