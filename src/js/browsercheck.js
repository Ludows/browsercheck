// import "@babel/polyfill";
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
    'errors' : {
        'untrackedBrowser' : 'ce navigateur n\'est visiblement pas tracké. Voyons voir ce qu\'il se cache la dessous...',
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
        'ie' : '11',
        'chrome': '48',
        'firefox': '49',
        'safari': '8',
        'opera': '41'
    }
}

const EventsList = ['init', 'error', 'obsolete'];

class BrowserCheck {
    constructor(opts) {
        typeof opts === 'object' ? this.options =  Object.assign(opts, defaults_opts) : this.options = Object.assign({}, defaults_opts)
        this.current = {}
        this.ua = undefined;
        this.hasSupportedBrowserInList = false;
        this.events = {};
        this.handlerEnabled = {};
    }
    initialize() {
        // this.peripheric();
        // console.log(this.options)
        this._createEvents();
        this.getNavigator();

    }
    peripheric() {

    }
    createMarkup() {

    }
    getVersion(name) {
        let rtn;
        // console.log('getversion ', name)
        if(name === 'safari') {
            rtn = this.ua.match(this.options.regexes.versions[name])[0].substr(8)
        }
        else {
            rtn = this.ua.match(this.options.regexes.versions[name])[1]
        }
        return rtn;   
    }
    _handleError(obj) {
        if(!obj || !obj.type || !obj.label) {
            throw new Error('the type and label of the message are required');
        }
        console[obj.type](this.options.errors[obj.label]);

    }
    getNavigator() {
        console.log('navigator')
        this.ua = window.navigator.userAgent.toLowerCase();
        // console.log(this.ua)

        // console.log('this events', this.events)

        // if(this.handlerEnabled.init && this.handlerEnabled.init === true) {
            // console.log('rentré')
            // document.addEventListener('init', function(e) {console.log(e)})
            window.dispatchEvent(this.events.init)
        // }

        
        
        

        let navigators = Object.keys(this.options.browsers);
        let browserList = this.options.browsers;
        for (let i = 0;  i < navigators.length; i++) {
            let navigator = navigators[i];
            if(this.ua.indexOf(browserList[navigator].label) != -1) {
                // console.log('found', browserList[navigator])
                this.current = {
                    name : navigator.charAt(0).toUpperCase() + navigator.slice(1),
                    version: this.getVersion(navigator),
                    os: 'Coming soon',
                    mobile: 'Coming soon'
                }
                this.hasSupportedBrowserInList = true;
                break;
                // break;
            }
        }

        if(this.hasSupportedBrowserInList === true) {
            // alert('yeah');


        }
        else {
            this._handleError({
                'type': 'log',
                'label': 'untrackedBrowser'
            })
            this._handleError({
                'type': 'log',
                'label': 'signature'
            })
        }
        

    }
    _createEvents() {
        // console.log('one')
        EventsList.forEach((hook) => {
            //   var event =

              this.events[hook] =  new Event(hook);
              
        })        
    }
    on(event, parameter) {
        console.log('on')
        // console.log('my custom handler')
        this.handlerEnabled[event] = true;

        if(typeof parameter === 'function') {
            window.addEventListener(event, parameter)
        }
        else {
            parameter.elm.addEventListener(event, parameter.func)
        }
        
        
        
        
    }

}
export default BrowserCheck




//  BrowserCheck