const electron = require("electron");
const ffmpeg = require("fluent-ffmpeg");

const { app, BrowserWindow, ipcMain } = electron;

let mainWindown;

app.on('ready', () => {
	mainWindown = new BrowserWindow({});
	mainWindown.loadURL(`file://${__dirname}/index.html`)
})

ipcMain.on('video:submit', (event, path) => {
	ffmpeg.ffprobe(path, (err, metadata) => {
		mainWindown.webContents.send('video:metadata', metadata.format.duration);
	})
})