export default (function (callback, options) {
    var input = document.createElement('input');
    input.type = 'file';
    input.addEventListener("change", function (e) {
        callback(e.target.files[0], options);
    });
    setTimeout(function () {
        return input.click();
    }, 50);
});