'use strict';
const Config = require('electron-config');

module.exports = new Config({
	defaults: {
		darkMode: false,
		zoomFactor: 1,
		lastWindowState: {
			width: 1300,
			height: 850
		},
		alwaysOnTop: false
	}
});