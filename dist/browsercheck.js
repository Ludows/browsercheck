"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

;

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
    module.exports = factory();
  } else {
    root.Browsercheck = factory();
  }
})(void 0, function () {
  'use strict';

  var defaults_opts = {
    'browsers': {
      'chrome': {
        'name': 'Chrome',
        'link': 'https://www.google.com/chrome/browser/desktop/index.html',
        'label': 'Chrome'
      },
      'ie': {
        'name': 'Internet Explorer',
        'link': 'https://support.microsoft.com/fr-fr/help/18520/download-internet-explorer-11-offline-installer',
        'label': 'MSIE'
      },
      'safari': {
        'name': 'Safari',
        'link': 'https://support.apple.com/fr_FR/downloads/internet',
        'label': 'Safari'
      },
      'firefox': {
        'name': 'Firefox',
        'link': 'https://www.mozilla.org/fr/firefox/new/',
        'label': 'Firefox'
      },
      'opera': {
        'name': 'Opera',
        'link': 'http://www.opera.com/fr',
        'label': 'OPR'
      }
    },
    'compatibility': {
      'ie': '11',
      'chrome': '48',
      'firefox': '49',
      'safari': '8',
      'opera': '41'
    }
  };

  var BrowserCheck =
  /*#__PURE__*/
  function () {
    function BrowserCheck(opts) {
      _classCallCheck(this, BrowserCheck);

      this.options = Object.assign(opts, defaults_opts);
      this.hooks = {
        'init': function init() {},
        'error': function error() {},
        'obsolete': function obsolete() {}
      };
    }

    _createClass(BrowserCheck, [{
      key: "initialize",
      value: function initialize() {
        // this.peripheric();
        this.getNavigator();
      }
    }, {
      key: "peripheric",
      value: function peripheric() {}
    }, {
      key: "createMarkup",
      value: function createMarkup() {}
    }, {
      key: "getNavigator",
      value: function getNavigator() {
        var ua = navigator.userAgent;
        var object;
        Object.keys(this.options.browsers).forEach(function (navigator) {
          switch (navigator) {
            case value:
              break;

            default:
              break;
          }
        });
      }
    }, {
      key: "createEvents",
      value: function createEvents() {}
    }, {
      key: "isOld",
      value: function isOld() {}
    }, {
      key: "on",
      value: function on(event, func) {}
    }]);

    return BrowserCheck;
  }();

  return Browsercheck;
});