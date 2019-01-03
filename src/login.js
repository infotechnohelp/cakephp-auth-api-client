jQuery(function () {
    jQuery('button[type="submit"]').click(function () {
        jQuery.post(webroot + "auth-api", {
            username: jQuery('input[name="username"]').val(),
            password: jQuery('input[name="password"]').val()
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