$(function(){

    let header = $('#header'),
        introH = $("#intro").innerHeight();
        scrollOffset = $(window).scrollTop();

        // Add header--fixed
        checkScroll(scrollOffset);
        
        $(window).on("scroll", function(){
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    })
    function checkScroll(scrollOffset){
        if(scrollOffset >= (introH)){
            header.addClass('header--fixed');
        } else{
            header.removeClass('header--fixed');
        }
    }     
});



       