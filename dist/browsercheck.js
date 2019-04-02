function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.BrowserCheck = factory();
})(this, function () {
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

  let BrowserCheck =
  /*#__PURE__*/
  function () {
    function BrowserCheck(opts) {
      _classCallCheck(this, BrowserCheck);

      typeof opts === 'object' ? this.options = _extends(opts, defaults_opts) : this.options = _extends({}, defaults_opts);
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
        let ua = navigator.userAgent;
        console.log(ua);
        Object.keys(this.options.browsers).forEach(function (navigator) {
          console.log('navigator', navigator);
          console.log('index navigator', ua.indexOf(navigator.label));

          if (ua.indexOf(navigator.label) >= 0) {
            console.log('found', navigator); // break;
          }
        });
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