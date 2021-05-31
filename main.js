

const { app, BrowserWindow } = require('electron');

function createWindow(){
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        backgroundColor: "",
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true
        }
    })
    
    win.loadFile('index.html');
}


app.whenReady().then(createWindow)

