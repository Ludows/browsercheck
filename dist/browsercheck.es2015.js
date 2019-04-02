(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.BrowserCheck = factory());
}(this, (function () { 'use strict';

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
        'ie' : '11',
        'chrome': '48',
        'firefox': '49',
        'safari': '8',
        'opera': '41'
    }
};

class BrowserCheck {
    constructor(opts) {
        typeof opts === 'object' ? this.options =  Object.assign(opts, defaults_opts) : this.options = Object.assign({}, defaults_opts);
        this.hooks = {
            'init': () => {},
            'error': () => {},
            'obsolete': () => {}
        };
        this.current = {};
    }
    initialize() {
        // this.peripheric();
        console.log(this.options);
        this.getNavigator();

    }
    peripheric() {

    }
    createMarkup() {

    }
    getNavigator() {
        let ua = navigator.userAgent;
        console.log(ua);
        Object.keys(this.options.browsers).forEach((navigator) => {
            console.log('navigator', navigator);
            console.log('index navigator', (ua.indexOf(navigator.label)));
            if((ua.indexOf(navigator.label))>=0) {
                console.log('found', navigator);
                // break;
            }
        });
    }
    createEvents() {

    }
    on(event, func) {

    }

}





//  BrowserCheck

return BrowserCheck;

})));
