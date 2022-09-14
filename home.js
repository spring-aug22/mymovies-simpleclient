function updateInfo(data) {
    $.each(data, function (key, val) {
        $('#fld-' + key).html(val);
    });
}

$(function () {
    $('#go').on('click', function () {
        let id = $('#movie').val();
        $.ajax({
            url: 'http://localhost:8080/api/movie/' + id,
            // CORS might not like this
            // username: $('#username').val(),
            // password: $('#password').val(),
            // so use this instead
            headers: {
                "Authorization": "Basic " + btoa($('#username').val() + ":" + $('#password').val())
            },
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true
        }).done(function (data) {
            console.log(data);
            updateInfo(data);
        }).fail(function (jqXHR, textStatus) {
            console.error(jqXHR, textStatus);
            alert("Request failed: " + textStatus);
        });
    });
});
