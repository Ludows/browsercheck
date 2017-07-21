(function(root, factory){
// AMD Support
if (typeof define === 'function' && define.amd) {
  define([], factory(root));
}
// RequireJS Support
else if ( typeof exports === 'object') {
  module.exports = factory(root);
}
// Browser Support
else {
  root.Browsercheck = factory(root);
}
})(typeof global !== "undefined" ? global : this.window || this.global, function (root) {
  'use strict';
  var Browsercheck = {};
  var supports = !!document.querySelector && !!root.addEventListener; // Feature test
  var styles_overlay;
  var mobile_class;
  var html;
  var arrayNavigators = ['Chrome', 'Internet-Explorer', 'Safari', 'Firefox', 'Opera'];
  var arrayIcons = ['fa-chrome', 'fa-internet-explorer', 'fa-safari', 'fa-firefox', 'fa-opera'];
  var arrayLinks = ['https://www.google.com/chrome/browser/desktop/index.html', 'https://support.microsoft.com/fr-fr/help/18520/download-internet-explorer-11-offline-installer', 'https://support.apple.com/fr_FR/downloads/internet', 'https://www.mozilla.org/fr/firefox/new/', 'http://www.opera.com/fr'];
	
  

var defaults = {
  'minIE' : '11',
  'minChrome': '48',
  'minFirefox': '49',
  'minSafari': '8',
  'minOpera': '41',
  'linkPath': 'assets/themes/Recylum-Child-Theme/assets/css/browsercheck.css'
}

function extend( a, b ) {
  for( var key in b ) {
    if( b.hasOwnProperty( key ) ) {
      a[key] = b[key];
    }
  }
  return a;
}


Browsercheck.init = function(options) {
  if (arguments[0] && typeof arguments[0] == "object"){
    this.options = extend( {}, defaults)
    extend( this.options, options)
    // console.log('opts Notify', arguments[0])
  } else {
    this.options = defaults;
  }
  _checkNavigator();


}
// Petite function pour détecter le device et balancer la classe dans le HTML
function _isPeripheric() {
  console.log('check mobile');
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  var isTablette = /iPad|tablette/
  var isAndroid = /(android)/i.test(navigator.userAgent);
  var isMobile = /(mobile)/i.test(navigator.userAgent);
  var isResizing;
  if (iOS === true || isAndroid === true || isMobile === true) {
    mobile_class = 'is-mobile';
  }
  else {
    mobile_class = 'is-desktop';
  }
  html = document.querySelector('html');
  html.className += mobile_class;

}

function _createOverlay() {
		// console.log('nada');
		var overlay = "";
		var head  = document.getElementsByTagName('head')[0];

    	var link  = document.createElement('link');
    	link.rel  = 'stylesheet';
    	link.type = 'text/css';
    	console.log('protocol',window.location.protocol)
    	var local = window.location.protocol.match(/file:/)
    	if (local) {
    		link.href = window.location.protocol + 
   			'' + window.location.hostname  + '' + Browsercheck.options.linkPath;
    	}
    	else {
    		link.href = window.location.protocol + 
   			'//' + window.location.hostname  + '/' + Browsercheck.options.linkPath;	
    	}
    	
    	link.media = 'all';
    	head.appendChild(link);
		
        overlay += '<div id="overlay-wrapper">';
        overlay += 		'<div class="overlay-area">';
        overlay +=          '<h2 class="overlay-title"><span>Votre Navigateur est Obsolete </span><br><span style="font-size: 14px;">Ce site n\'est pas visible...</span></h2>'
        overlay += 			'<div id="listbox" class="overlay-container">';
        for (var i = 0; i < arrayLinks.length; i++) {
        overlay += 				'<div id="box-navigator-'+ arrayNavigators[i].toLowerCase() +'" class="box-navigator box-navigator-'+ arrayNavigators[i].toLowerCase() +'">';
        overlay += 					'<div class="box-content">';
        overlay += 					'<div class="img-area-overlay">';
        overlay += 						'<i style="font-size: 90px" class="fa '+arrayIcons[i] +'"></i>';
        overlay += 					'</div>';
        overlay += 					'<div class="link-area-overlay">';
        overlay += 						'<a target="_self" href="'+ arrayLinks[i] +'" title="Télécharger '+ arrayNavigators[i] +'">Télécharger</a>';
        overlay += 					'</div>';
        overlay += 					'</div>';
        overlay += 				'</div>';
        }
        overlay += 			'</div>';
        overlay += 		'</div>';
        overlay += '</div>';

        document.body.innerHTML += overlay;

    


    
	    }
function _checkNavigator() {
		var ua = navigator.userAgent,
		index,
		navigateur,
		version;
		if((index = ua.indexOf('Firefox'))>=0) {
			navigateur = 'Firefox';
			version = ua.match(/Firefox\/([0-9]+(?:\.[0-9]+)*)/)[1];
			if (version < Browsercheck.options.minFirefox) {
				console.log('Obsolete Navigator !');
				_createOverlay();
			}
			else {
				_isPeripheric();
				html.className += ' ua-'+ navigateur.toLowerCase() +'';
				html.className += ' ua-'+ version +'';
			}
		} else if((index = ua.indexOf('MSIE'))>=0) {
			navigateur = 'Internet-Explorer';
			version = ua.match(/MSIE ([0-9]+(?:\.[0-9]+)*)/)[1];
			if (version < Browsercheck.options.minIE) {
				console.log('Obsolete Navigator !');
				_createOverlay();
			}
			else {
				_isPeripheric();
				html.className += ' ua-'+ navigateur.toLowerCase() +'';
				html.className += ' ua-'+ version +'';
			}
		} else if((index = ua.indexOf('OPR'))>=0) {
			navigateur = 'Opera';
			version =  ua.match(/OPR\/([0-9]+(?:\.[0-9]+)*)/)[1];
			if (version < Browsercheck.options.minOpera) {
				console.log('Obsolete Navigator !');
				_createOverlay();
			}
			else {
				_isPeripheric();
				html.className += ' ua-'+ navigateur.toLowerCase() +'';
				html.className += ' ua-'+ version +'';
			}
		} else if((index = ua.indexOf('Chrome'))>=0) {
			navigateur = 'Google-Chrome';
			version = ua.match(/Chrome\/([0-9]+(?:\.[0-9]+)*)/)[1];
			console.log('Google chrome versionset by user ?', Browsercheck.options.minChrome)
			if (version < Browsercheck.options.minChrome) {
				console.log('Obsolete Navigator !');
				_createOverlay();
			}
			else {
				_isPeripheric();
				html.className += ' ua-'+ navigateur.toLowerCase() +'';
				html.className += ' ua-'+ version +'';
			}
		}  else if((index = ua.indexOf('Safari'))>=0) {
			navigateur = 'Safari';
			version = ua.match(/Version\/([0-9]+(?:\.[0-9]+)*)/)[0].substr(8) ;
			// console.log('typeof version', typeof(version) );
			// console.log('version', ua.match(/Version\/([0-9]+(?:\.[0-9]+)*)/)[2])
			// console.log('version 2', ua.match(/Version\/([0-9]+(?:\.[0-9]+)*)/)[0].substr(8))

			if (parseInt(version) < parseInt(Browsercheck.options.minSafari)) {
				console.log('Obsolete Navigator !');
				_createOverlay();
				console.log('parse version', parseInt(version) < parseInt(Browsercheck.options.minSafari))
			}
			else {
				_isPeripheric();
			}
		}
		console.log(navigateur+' '+version);

	}





  







  return Browsercheck;
})
