function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.BrowserCheck = factory();
})(this, function () {
  'use strict'; // import "@babel/polyfill";

  var defaults_opts = {
    'browsers': {
      'chrome': {
        'name': 'Chrome',
        'link': 'https://www.google.com/chrome/browser/desktop/index.html',
        'label': 'chrome'
      },
      'ie': {
        'name': 'Internet Explorer',
        'link': 'https://support.microsoft.com/fr-fr/help/18520/download-internet-explorer-11-offline-installer',
        'label': 'msie'
      },
      'safari': {
        'name': 'Safari',
        'link': 'https://support.apple.com/fr_FR/downloads/internet',
        'label': 'safari'
      },
      'firefox': {
        'name': 'Firefox',
        'link': 'https://www.mozilla.org/fr/firefox/new/',
        'label': 'firefox'
      },
      'opera': {
        'name': 'Opera',
        'link': 'http://www.opera.com/fr',
        'label': 'opr'
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

      _typeof(opts) === 'object' ? this.options = _extends(opts, defaults_opts) : this.options = _extends({}, defaults_opts);
      this.hooks = {
        'init': function init() {},
        'error': function error() {},
        'obsolete': function obsolete() {}
      };
      this.current = {};
    }

    _createClass(BrowserCheck, [{
      key: "initialize",
      value: function initialize() {
        // this.peripheric();
        console.log(this.options);
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
        var ua = window.navigator.userAgent.toLowerCase();
        console.log(ua);
        var navigators = Object.keys(this.options.browsers);
        console.log('navigators', navigators);

        for (var i = 0; i < navigators.length; i++) {
          var navigator = navigators[i];

          if (ua.indexOf(navigator) != -1) {
            console.log('found', navigator);
            this.current = {
              name: navigator.charAt(0).toUpperCase() + navigator.slice(1)
            };
            break; // break;
          }
        }
      }
    }, {
      key: "createEvents",
      value: function createEvents() {}
    }, {
      key: "on",
      value: function on(event, func) {}
    }]);

    return BrowserCheck;
  }(); //  BrowserCheck


  return BrowserCheck;
});