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
        'ie' : '11',
        'chrome': '48',
        'firefox': '49',
        'safari': '8',
        'opera': '41'
    }
}

class BrowserCheck {
    constructor(opts) {
        this.options = Object.assign(opts, defaults_opts)
        this.hooks = {
            'init': () => {},
            'error': () => {},
            'obsolete': () => {}
        }
    }
    initialize() {
        // this.peripheric();
        this.getNavigator();

    }
    peripheric() {

    }
    createMarkup() {

    }
    getNavigator() {
        let ua = navigator.userAgent
        let object;
        Object.keys(this.options.browsers).forEach((navigator) => {
            switch (navigator) {
                case value:
                    
                    break;
            
                default:
                    break;
            }
        })
    }
    createEvents() {

    }
    isOld() {

    }
    on(event, func) {

    }

}