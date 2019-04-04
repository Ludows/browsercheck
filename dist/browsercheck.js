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
    'regexes': {
      'versions': {
        'chrome': /chrome\/([0-9]+(?:\.[0-9]+)*)/,
        'ie': /msie ([0-9]+(?:\.[0-9]+)*)/,
        'safari': /version\/([0-9]+(?:\.[0-9]+)*)/,
        'firefox': /firefox\/([0-9]+(?:\.[0-9]+)*)/,
        'opera': /opr\/([0-9]+(?:\.[0-9]+)*)/
      }
    },
    'errors': {
      'untrackedBrowser': 'ce navigateur n\'est visiblement pas tracké. Voyons voir ce qu\'il se cache la dessous...',
      'signature': window.navigator.userAgent
    },
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
  var EventsList = ['init', 'error', 'obsolete'];

  var BrowserCheck =
  /*#__PURE__*/
  function () {
    function BrowserCheck(opts) {
      _classCallCheck(this, BrowserCheck);

      _typeof(opts) === 'object' ? this.options = _extends(opts, defaults_opts) : this.options = _extends({}, defaults_opts);
      this.current = {};
      this.ua = undefined;
      this.hasSupportedBrowserInList = false;
      this.events = {};
      this.handlerEnabled = {};
    }

    _createClass(BrowserCheck, [{
      key: "initialize",
      value: function initialize() {
        // this.peripheric();
        // console.log(this.options)
        this._createEvents();

        this.getNavigator();
      }
    }, {
      key: "peripheric",
      value: function peripheric() {}
    }, {
      key: "createMarkup",
      value: function createMarkup() {}
    }, {
      key: "getVersion",
      value: function getVersion(name) {
        var rtn; // console.log('getversion ', name)

        if (name === 'safari') {
          rtn = this.ua.match(this.options.regexes.versions[name])[0].substr(8);
        } else {
          rtn = this.ua.match(this.options.regexes.versions[name])[1];
        }

        return rtn;
      }
    }, {
      key: "_handleError",
      value: function _handleError(obj) {
        if (!obj || !obj.type || !obj.label) {
          throw new Error('the type and label of the message are required');
        }

        console[obj.type](this.options.errors[obj.label]);
      }
    }, {
      key: "getNavigator",
      value: function getNavigator() {
        console.log('navigator');
        this.ua = window.navigator.userAgent.toLowerCase(); // console.log(this.ua)
        // console.log('this events', this.events)
        // if(this.handlerEnabled.init && this.handlerEnabled.init === true) {
        // console.log('rentré')
        // document.addEventListener('init', function(e) {console.log(e)})

        window.dispatchEvent(this.events.init); // }

        var navigators = Object.keys(this.options.browsers);
        var browserList = this.options.browsers;

        for (var i = 0; i < navigators.length; i++) {
          var navigator = navigators[i];

          if (this.ua.indexOf(browserList[navigator].label) != -1) {
            // console.log('found', browserList[navigator])
            this.current = {
              name: navigator.charAt(0).toUpperCase() + navigator.slice(1),
              version: this.getVersion(navigator),
              os: 'Coming soon',
              mobile: 'Coming soon'
            };
            this.hasSupportedBrowserInList = true;
            break; // break;
          }
        }

        if (this.hasSupportedBrowserInList === true) {// alert('yeah');
        } else {
          this._handleError({
            'type': 'log',
            'label': 'untrackedBrowser'
          });

          this._handleError({
            'type': 'log',
            'label': 'signature'
          });
        }
      }
    }, {
      key: "_createEvents",
      value: function _createEvents() {
        var _this = this;

        // console.log('one')
        EventsList.forEach(function (hook) {
          //   var event =
          _this.events[hook] = new Event(hook);
        });
      }
    }, {
      key: "on",
      value: function on(event, parameter) {
        console.log('on'); // console.log('my custom handler')

        this.handlerEnabled[event] = true;

        if (typeof parameter === 'function') {
          window.addEventListener(event, parameter);
        } else {
          parameter.elm.addEventListener(event, parameter.func);
        }
      }
    }]);

    return BrowserCheck;
  }(); //  BrowserCheck


  return BrowserCheck;
});