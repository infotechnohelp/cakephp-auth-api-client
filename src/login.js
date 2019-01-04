jQuery(function () {
    jQuery('form[login]>button[type="submit"], button[login]').click(function () {
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
            $(document).trigger('loginError', xhr.responseJSON.message);
        });
    });
});