// import "@babel/polyfill";
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
        'ie' : '11',
        'chrome': '48',
        'firefox': '49',
        'safari': '8',
        'opera': '41'
    }
}

class BrowserCheck {
    constructor(opts) {
        typeof opts === 'object' ? this.options =  Object.assign(opts, defaults_opts) : this.options = Object.assign({}, defaults_opts)
        this.hooks = {
            'init': () => {},
            'error': () => {},
            'obsolete': () => {}
        }
        this.current = {}
    }
    initialize() {
        // this.peripheric();
        console.log(this.options)
        this.getNavigator();

    }
    peripheric() {

    }
    createMarkup() {

    }
    getNavigator() {
        let ua = window.navigator.userAgent.toLowerCase();
        console.log(ua)
        let object;
        

        let navigators = Object.keys(this.options.browsers);
        console.log('navigators', navigators)
        for (let i = 0;  i < navigators.length; i++) {
            let navigator = navigators[i];
            if(ua.indexOf(navigator) != -1) {
                console.log('found', navigator)
                this.current = {
                    name : navigator.charAt(0).toUpperCase() + navigator.slice(1)
                }
                break;
                // break;
            }
        }

    }
    createEvents() {

    }
    on(event, func) {

    }

}
export default BrowserCheck




//  BrowserCheck