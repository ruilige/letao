$('.commodityList header .header-sec .comList div').on('touchstart',function () {
    var index = $(this).index();
    $('.commodityList header .header-sec .comList div').eq(index).toggleClass('comList-active').siblings().removeClass('comList-active');
});