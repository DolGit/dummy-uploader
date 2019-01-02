'use strict';

exports.__esModule = true;

exports.default = function (callback, options) {
    var input = document.createElement('input');
    input.type = 'file';
    input.addEventListener("change", function (e) {
        callback(e.target.files[0], options);
    });
    input.click();
};

module.exports = exports['default'];