$('document').ready(function () {
    $('#cart').click(function (evt){
        evt.preventDefault();
        $('#checkout').addClass('open');
    })
    $('#close').click(function (evt){
        evt.preventDefault();
        if($('#checkout').hasClass('open')){
            $('#checkout').removeClass('open')
        }
    })
})