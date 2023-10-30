$(document).ready(function(){

    //Position correction
    var $container = $('#guide');
    var containerHeight = $container.outerHeight();
    var containerWidth = $container.outerWidth();

    $container.css({
        'margin-top': -(containerHeight / 2) + 'px',
        'margin-left': -(containerWidth / 2) + 'px'
    });

    setTimeout(function(){
        $('#guide').removeClass('guide_container-closed');
    }, 500)
    $('.guide_close-button').click(function(){
        $('#guide').addClass('guide_container-closed');
    });

})