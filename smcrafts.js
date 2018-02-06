$(function() {

    $('#alertSam').click(function(e) {
        e.preventDefault();
        $('#successAlert').slideDown();
    });



    $("a.pop").click(function(e){
        e.preventDefault();
    });
    $("a.pop").popover();
    
    $("a.soldout").click(function(e){
        e.preventDefault();
    });

    $('[rel="tooltip"]').tooltip();

});