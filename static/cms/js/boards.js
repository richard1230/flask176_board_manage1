

$(function () {
    $("#add-board-btn").click(function (event) {
        event.preventDefault();
        zlalert.alertOneInput({
            'text':'请输入板块名称！',
            'placeholder': '板块名称',
            'confirmCallback': function (inputValue) {
                zlajax.post({
                    'url': '/cms/aboard/',
                    'data': {
                        'name': inputValue
                    },
                    'success': function (data) {
                        if(data['code'] == 200){
                            window.location.reload();
                        }else{
                            zlalert.alertInfo(data['message']);
                        }
                    }
                });
            }
        });
    });
});


