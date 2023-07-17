$(function () {
    $("a[data-lang]").click(function () {
        var lang = $(this).attr("data-lang");

        var expiry = new Date();
        expiry.setMonth(expiry.getMonth() + 1);

        document.cookie = "lang=" + lang + ";expires="
            + expiry.toGMTString() + ";path=/";
        // ĐỔI NGÔN NGỮ TRÊN URL
        document.cookie
        var local = location.pathname;
        local = '/' + lang + local.substr(3, local.length - 3)

        location.href = local;
    });

    $('.pagination .page-item').on('click', function () {

        if ($(this).hasClass('disabled')) { return; }

        var totalPages = parseInt($('.pagination').attr('data-pages'));
        var p = 0;
        var indexCurrent = parseInt($('.pagination .page-item.active').attr('data-index'));
        // Prev
        if ($(this).hasClass('prev')) {
            p = indexCurrent > 1 ? indexCurrent - 1 : 1;
        }
        else if ($(this).hasClass('next')) {
            p = indexCurrent < totalPages ? indexCurrent + 1 : totalPages;
        }
        else {
            p = $(this).attr('data-index');
        }
        var paging = location.origin + location.pathname + '?p=' + p;
        location.href = paging;

    });


    $('#FormContact').unbind('submit').submit(function (e) {
        e.preventDefault();
        var _self = $(this);
        var params = {
            FullName: $('#FormContact #FullName').val(),
            Email: $('#FormContact #Email').val(),
            Phone: $('#FormContact #Subject').val(),
            Requests: $('#FormContact #Content').val()
        }

        if (_self.valid()) {
            $.ajax({
                type: 'POST',
                url: '/api/Contact/PostDataContact/1',
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify(params),
                success: function (res) {
                    common.showNotify(res.Message, res.Success ? 'success' : '');
                    if (res.Success) {
                        document.getElementById("FormContact").reset();
                    }
                }
            });
        }
    });

    $('#booking-service').unbind('submit').submit(function (e) {
        e.preventDefault();
        var _self = $(this);

        $('#BookingDate').val($('.form_date input').val() + ' ' + $('.form_time input').val());
        var arrService = [];
        $.each($('.booking-option'), function () {
            if ($(this).parents('.template').length == 0)
                arrService.push($(this).val());
        });
        $('#BookingService').val(arrService.join(','));

        $('#modalPackage').modal();

    });


    $('#FormRegisterPackage').unbind('submit').submit(function (e) {
        e.preventDefault();
        var _self = $(this);

        var params = {
            FullName: $('#FormRegisterPackage #FullName').val(),
            Phone: $('#FormRegisterPackage #Phone').val(),
            Email: $('#FormRegisterPackage #Email').val(),
            DateTime: $('#FormRegisterPackage #BookingDate').val(),
            Service: $('#FormRegisterPackage #BookingService').val(),
            Content: $('#FormRegisterPackage #Content').val()
        }

        if (_self.valid()) {

            $('#FormRegisterPackage .btn-success').text('Send...')
            $('#FormRegisterPackage .btn-success').attr('disabled', 'disabled')

            $.ajax({
                type: 'POST',
                url: '/api/Contact/PostDataBooking/1',
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify(params),
                success: function (res) {
                    common.showNotify(res.Message, res.Success ? 'success' : '');
                    if (res.Success) {
                        document.getElementById("FormRegisterPackage").reset();
                    }
                    $('#modalPackage').modal('hide');

                    $('#FormRegisterPackage .btn-success').text('Send');
                    $('#FormRegisterPackage .btn-success').removeAttr('disabled');

                }
            });
        }
    });


})

function ShowListModule(e) {
    var guid = $(e).attr('data-key');
    var html = $.get('/Design/DesignGallery?pKey=' + guid, function (res) {
        $('#section-hidden-gallery').html(res);
    })
}