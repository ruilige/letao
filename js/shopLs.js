$('.ShopList-Large-Box header .ShopList-headerBox-bom ul li a').on('touchstart',function () {
    var txt = $(this).index();
    $(this).eq(txt).toggleClass('BOM-ulList').siblings().removeClass('BOM-ulList')
    // console.log(213)
});