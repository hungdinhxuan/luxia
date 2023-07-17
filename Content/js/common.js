var common = {
    showNotify: function (data, type) {
        type = type ? type : 'danger';

        var modalCap = 'Notification!';
        var htmlMessage = '<p></p>';
        if (data != null) {
            if (data.ID != undefined) {
                if (data.ID > 0) {
                    modalCap = '';
                }
                htmlMessage = '<div class="popup-notify"><span class="notify-' + type + ' notify-content">' + data.Message + '</span></p>';
            } else {
                htmlMessage = '<div class="popup-notify"><span class="notify-' + type + ' notify-content">' + data + '</span></p>';
            }
        } else {
            htmlMessage = '<p> Xảy ra lỗi trong quá trình xử lý. </p>';
        }
        $('#modalNotify .modal-body .modal-cap').html(modalCap);
        $('#modalNotify .modal-body .modal-text').html(htmlMessage);
        $('#modalNotify').modal('show');
    }
};
