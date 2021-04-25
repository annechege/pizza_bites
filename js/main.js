$('document').ready(function () {
    $('#cart').click(function (evt){
        evt.preventDefault();
        $('#checkout').addClass('open');
        console.log($('#checkout'))
    })
    $('#close').click(function (evt){
        evt.preventDefault();
        if($('#checkout').hasClass('open')){
            $('#checkout').removeClass('open')
        }
    })
})