'use strict';

exports.__esModule = true;

exports.default = function (callback, options) {
    var input = document.createElement('input');
    input.type = 'file';
    input.addEventListener("change", function (e) {
        callback(e.target.files[0], options);
    });
    setTimeout(function () {
        return input.click();
    }, 50);
    document.body.append(input);
    input.style.display = 'none';
};

module.exports = exports['default'];