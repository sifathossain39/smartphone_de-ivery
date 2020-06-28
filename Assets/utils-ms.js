/** docReady is a single plain javascript function that provides a method of scheduling one or more javascript functions to run at some later point when the DOM has finished loading. */
!function(t,e){"use strict";function n(){if(!a){a=!0;for(var t=0;t<o.length;t++)o[t].fn.call(window,o[t].ctx);o=[]}}function d(){"complete"===document.readyState&&n()}t=t||"docReady",e=e||window;var o=[],a=!1,c=!1;e[t]=function(t,e){return a?void setTimeout(function(){t(e)},1):(o.push({fn:t,ctx:e}),void("complete"===document.readyState||!document.attachEvent&&"interactive"===document.readyState?setTimeout(n,1):c||(document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):(document.attachEvent("onreadystatechange",d),window.attachEvent("onload",n)),c=!0)))}}("docReady",window);

function getCookie(name) {
	var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
	return matches ? decodeURIComponent(matches[1]) : null;
}

function getBackendParamsByName(cName, pName) {
	if (getCookie(cName)) {
		return getCookie(cName);
	} else if (typeof getBackendParams === 'function') {
		var obj = getBackendParams();
		return obj[pName] && obj[pName][1] ? obj[pName][1] : undefined;
	}
}

function addSessionId () {
	if (!getCookie('sid') && typeof getSessionId === 'function') {
		var sId = getSessionId(), nodeLinks = document.getElementsByTagName("a");
		if (sId && sId !== '' && nodeLinks.length) {
			for (var i = 0, max = nodeLinks.length; i < max; i++) {
				if (nodeLinks[i].pathname === '/web/') {
					nodeLinks[i].href = '/web/?sid=' + sId;
				}
			}
		}
	} else if (!getCookie("sid") && typeof getBackendParams === 'function') {
		var sId = getBackendParams(), nodeLinks = document.getElementsByTagName("a");
		if (sId.sessionId.length > 1 && nodeLinks.length) {
			for (var i = 0, max = nodeLinks.length; i < max; i++) {
				if (nodeLinks[i].pathname === '/web/') {
					nodeLinks[i].href = '/web/?'+ sId.sessionId[0] +'=' + sId.sessionId[1];
				}
			}
		}
	}
}

function returnSessionId () {
	if (!getCookie("sid") && typeof getBackendParams === 'function') {
		var sId = getBackendParams();
		url='/web/?'+ sId.sessionId[0] +'=' + sId.sessionId[1];
		
	}else{
		url='/web/';
	}
	return url;
}	
docReady(function() {
	addSessionId();
});