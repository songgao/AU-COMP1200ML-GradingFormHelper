$(function(){
    $('body').append($('<div id="link_wrapper"><span id="link_zero_all" class="links">Zero Points</span><span id="link_check_all" class="links">Full Points</span></div>'));
     $('#link_check_all').click(function() {
        var trs = $('tbody > tr');
        for(var tr_index = 0; tr_index < trs.length; ++tr_index){
            $(trs[tr_index]).find('td:nth-child(3) > input:first').click();
        }
            setTimeout(function(){
                trs.first().find('td:nth-child(3) > input:first').click();
            }, 500);
    });
    $('#link_zero_all').click(function() {
        var trs = $('tbody > tr');
        for(var tr_index = 0; tr_index < trs.length; ++tr_index){
            $(trs[tr_index]).find('td:nth-child(2) > input:first').click();
        }
            setTimeout(function(){
                trs.first().find('td:nth-child(2) > input:first').click();
            }, 500);
    });
    $('#link_wrapper').css({
        position: 'fixed',
        right: '12px',
        top: '8px'
    });
    $('.links').css({
        float: 'right',
        color: 'red',
        "font-weight": 'bold',
        "text-decoration": "underline",
        "background-color": "black",
        cursor: 'pointer',
        padding: '8px',
        'margin-left': '4px',
        'margin-right': '4px'
    });

    window.resizeTo(800,600);

});
