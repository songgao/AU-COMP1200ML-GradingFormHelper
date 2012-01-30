$(function(){
    $('body').append($('<div id="link_check_all">Full Points</div>'));
    $('#link_check_all').click(function() {
        var trs = $('tbody > tr');
        for(var tr_index = 0; tr_index < trs.length; ++tr_index){
            $(trs[tr_index]).find('td:nth-child(3) > input:first').click();
        }
            setTimeout(function(){
                trs.last().find('td:nth-child(3) > input:first').click();
            }, 500);
    }).css({
        position: 'fixed',
        right: '12px',
        top: '8px',
        color: 'red',
        "font-weight": 'bold',
        "text-decoration": "underline",
        "background-color": "black",
        cursor: 'pointer',
        padding: '8px'
    });

});
