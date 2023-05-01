$(function(){
    $(window).scroll(function(){
        var getWindowHeight = $(window).height();
        var getContentsPositionTop = $('.center_item').offset().top;
        var getScrollPosition = $(window).scrollTop();

        if(getScrollPosition > getContentsPositionTop - getWindowHeight + 300){
            $('.center_item').addClass('fadein');
        }else{
            $('.center_item').removeClass('fadein');
        }
    });
});