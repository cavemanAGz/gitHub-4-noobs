/*This listens for the application to be launched, the creates the window*/
chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create('window.html', {
		'outerBounds': {
			'width': 640,
			'height': 480
			}
		});
	});