const electron = require('electron');

const { app, BrowserWindow } = electron;

app.on('ready', () => {
	const mainWindown = new BrowserWindow({});

	mainWindown.loadURL(`file://${__dirname}/index.html`)
})