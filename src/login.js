$(function () {
    $('button[type="submit"]').click(function () {
        $.post(webroot + "auth-api", {
            username: $('input[name="username"]').val(),
            password: $('input[name="password"]').val()
        }, function (response) {

            if (response.data.length !== 0) {
                var redirectUrl = '';

                if(homePageUrl !== undefined){
                    redirectUrl = homePageUrl;
                }

                window.location.href = webroot + redirectUrl;
            }

        }, 'json').fail(function (xhr, status, error) {
            $('div[error]').children('span').text(xhr.responseJSON.message);
            $('div[error]').finish().slideDown(1000).delay(1000).slideUp(1000);
        });
    });
});