
    $('.ShoppingCat-BOX .ShoppingCat-Item .ShoppingCat-Item-list .shop-list-des .jiagebiao button').on('touchstart',function(){
        var opera = $(this).text();
        // console.log(opera);
        if(opera == '+'){
            var num = $(this).prev();
            num.val( parseInt( num.val() ) + 1 );
            if(num.val() > 1){
                // 判断当前数量是否大于1
                $(this).addClass('btn2').removeClass('btn1');
            }
        }else if(opera == '-'){
            var num = $(this).next();
            num.val( parseInt( num.val() ) - 1 );
            if(num.val() <= 1){
                // 判断当前数量是否小于等于1
                num.val(1);
            }
        }
    });

$('.ShoppingCat-BOX .ShoppingCat-Item .ShoppingCat-Item-list .Shopping-List-icon').on('touchstart',function () {
   $(this).hide().$('.ShoppingCat-BOX .ShoppingCat-Item .ShoppingCat-Item-list .Shopping-List-icon')
});


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