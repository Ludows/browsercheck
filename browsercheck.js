var Browsercheck = (function(){

	var self = {}
	var styles_overlay;
	var the_config = {
			'minIE' : '11',
			'minChrome': '48',
			'minFirefox': '49',
			'minSafari': '8',
			'minOpera': '41',
			'linkPath': 'assets/themes/Recylum-Child-Theme/assets/css/browsercheck.css'
	}
	var arrayNavigators = ['Chrome', 'Internet-Explorer', 'Safari', 'Firefox', 'Opera'];
	var arrayIcons = ['fa-chrome', 'fa-internet-explorer', 'fa-safari', 'fa-firefox', 'fa-opera'];
	var arrayLinks = ['https://www.google.com/chrome/browser/desktop/index.html', 'https://support.microsoft.com/fr-fr/help/18520/download-internet-explorer-11-offline-installer', 'https://support.apple.com/fr_FR/downloads/internet', 'https://www.mozilla.org/fr/firefox/new/', 'http://www.opera.com/fr'];
	
	self.initialized = function() {
		console.log('Browsercheck init');
		_checkNavigator();
	}

	var _checkNavigator = function() {
		var ua = navigator.userAgent,
		index,
		navigateur,
		version;
		if((index = ua.indexOf('Firefox'))>=0) {
			navigateur = 'Firefox';
			version = ua.match(/Firefox\/([0-9]+(?:\.[0-9]+)*)/)[1];
			if (version < the_config.minFirefox) {
				console.log('Obsolete Navigator !');
				_createOverlay();
			}
		} else if((index = ua.indexOf('MSIE'))>=0) {
			navigateur = 'Internet Explorer';
			version = ua.match(/MSIE ([0-9]+(?:\.[0-9]+)*)/)[1];
			if (version < the_config.minIE) {
				console.log('Obsolete Navigator !');
				_createOverlay();
			}
		} else if((index = ua.indexOf('OPR'))>=0) {
			navigateur = 'Opera';
			version =  ua.match(/OPR\/([0-9]+(?:\.[0-9]+)*)/)[1];
			if (version < the_config.minOpera) {
				console.log('Obsolete Navigator !');
				_createOverlay();
			}
		} else if((index = ua.indexOf('Chrome'))>=0) {
			navigateur = 'Google Chrome';
			version = ua.match(/Chrome\/([0-9]+(?:\.[0-9]+)*)/)[1];
			if (version < the_config.minChrome) {
				console.log('Obsolete Navigator !');
				_createOverlay();
			}
		}  else if((index = ua.indexOf('Safari'))>=0) {
			navigateur = 'Safari';
			version = ua.match(/Version\/([0-9]+(?:\.[0-9]+)*)/)[0].substr(8) ;
			console.log('typeof version', typeof(version) );
			console.log('version', ua.match(/Version\/([0-9]+(?:\.[0-9]+)*)/)[2])
			console.log('version 2', ua.match(/Version\/([0-9]+(?:\.[0-9]+)*)/)[0].substr(8))

			if (parseInt(version) < parseInt(the_config.minSafari)) {
				console.log('Obsolete Navigator !');
				_createOverlay();
				console.log('parse version', parseInt(version) < parseInt(the_config.minSafari))
			}
		}
		console.log(navigateur+' '+version);

	}

	var _createOverlay = function() {
		// console.log('nada');
		var overlay = "";
		var head  = document.getElementsByTagName('head')[0];
    	
    	var link  = document.createElement('link');
    	link.rel  = 'stylesheet';
    	link.type = 'text/css';
    	link.href = window.location.protocol + 
   '//' + window.location.hostname  + '/' + the_config.linkPath;
    	link.media = 'all';
    	head.appendChild(link);
		
        overlay += '<div id="overlay-wrapper">';
        overlay += 		'<div class="overlay-area">';
        overlay +=          '<h2 class="overlay-title"><span>Votre Navigateur est Obsolete </span><br><span style="font-size: 14px;">Ce site n\'est pas visible...</span></h2>'
        overlay += 			'<div id="listbox" class="overlay-container">';
        for (var i = 0; i < 5; i++) {
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
	return self;
})()

Browsercheck.initialized();