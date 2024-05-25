
function commafy(num) {
    var str = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return str
}
$(".fee").each(function () {
    $(this).val(commafy($(this).val()));
});
function CheckNumeric() {
    return event.keyCode >= 48 && event.keyCode <= 57;
}
function UpdateFormattedValue(inputElement) {
    var rawValue = inputElement.value;
    if (rawValue != "") {
        rawValue = rawValue.replace(/\D/g, '');
    }
    inputElement.value = commafy(rawValue);
}
function escapeHtml(unsafe) {
    return unsafe.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
function showNotifySuccess(title, content, delays = 3000) {
    var notify = new PNotify({
        title: title,
        text: content,
        type: 'success',
        styling: 'bootstrap3',
        hide: false
    });
    setTimeout(function () {
        notify.remove()
    }, delays);
}

function showNotifyError(title, content, delays = 3000) {
    var notify = new PNotify({
        title: title,
        text: content,
        type: 'error',
        styling: 'bootstrap3',
        hide: false
    });
    setTimeout(function () {
        notify.remove()
    }, delays);
}
function showLoading() {
    document.getElementById('loading-overlay').style.display = 'block';
}

function hideLoading() {
    document.getElementById('loading-overlay').style.display = 'none';
}