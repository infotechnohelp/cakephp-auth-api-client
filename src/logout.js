$(function () {
    $('button[logout]').click(function () {
        $.post(webroot + "auth-api/logout", function (response) {

            if (response.data.length !== 0) {
                window.location.href = webroot + 'login';
            }

        }, 'json');
    });
});