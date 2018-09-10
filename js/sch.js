$('.search-box .input-div').on('touchstart', function () {
    $('.search-box section').hide();
    $('.search-box footer').show()
});
$('.search-box header .rig-cancel').on('touchstart', function () {
    $('.search-box section').show();
    $('.search-box footer').hide();
});