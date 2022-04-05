// Main Process
const { app, BrowserWindow, Notification, ipcMain } = require('electron');
const path = require('path');
const isDev = !app.isPackaged;

// Instantiate the browser window class
function createWindow() {
  // Create a new windows instance, Browser window <- Renderer Process
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: 'green',
    webPreferences: {
      // Allow JS in index.html to access node moduels; default is false due to security issue
      nodeIntegration: false,
      // will sanitize JS code
      worldSafeExecuteJavaScript: true,
      // A feature that ensures both preload scripts and Electrons internal logic run in separate context
      // Isolate window object from renderer processor
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  // nodeInt -> false; context: true

  // Loading the html file
  win.loadFile('index.html');
  isDev && win.webContents.openDevTools();
}

// Hot reload electron APP config
if (isDev) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
  });
}

// after main process is done; when app is ready, it will call the createWindow function
app.whenReady().then(() => {
  createWindow();
  //   const notification = new Notification({ title: 'APP FIRED 🔥', body: '🔫' });
  //   notification.show();
});

// message is passed from main.js
ipcMain.on('notify', (e, message) => {
  new Notification({ title: 'Notification', body: message }).show();
});

// app.on specify an event you want to react to
// quit windows if it's not windows, mac will stay alive
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// For MAC, reopen a window even if it's closed
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Chromium -> web engine for rendering the UI, full chrome-like web browser
// V8 -> engine that provides capabilities to execute, run, JS code in the browser
// Node JS(V8) -> we are able to run JS code + provides more features; it is apart of nodeJS

// Webpack -> a module builder, bundle JS files for usage in the browser
// Babel -> is a JS compiler
