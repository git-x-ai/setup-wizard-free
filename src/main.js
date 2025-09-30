const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { exec } = require('child_process');

const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
  app.quit();
} else {
  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });
}

let mainWindow;

function createWindow() {
  const isDev = process.env.NODE_ENV === 'development';

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 600,
    minHeight: 400,
    frame: false,
    titleBarStyle: 'hidden',
    resizable: true,
    title: 'Setup Wizard Free',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      devTools: process.env.NODE_ENV === 'development',
      webSecurity: true,
      allowRunningInsecureContent: false,
      experimentalFeatures: false,
      preload: isDev
        ? path.join(process.cwd(), 'src', 'preload.js')
        : path.join(__dirname, 'preload.js'),
    },
    show: false,
    backgroundColor: '#ffffff',
  });

  if (isDev) {
    setTimeout(() => {
      mainWindow.loadURL('http://localhost:5173').catch(err => {
        console.log('Failed to load URL:', err);
        setTimeout(() => {
          mainWindow.loadURL('http://localhost:5173').catch(retryErr => {
            console.log('Retry failed:', retryErr);
          });
        }, 2000);
      });
    }, 1000);
  } else {
    mainWindow.loadFile(path.join(__dirname, 'index.html'));
  }

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();

    if (process.platform === 'darwin') {
      app.dock.show();
    }
    mainWindow.focus();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  return mainWindow;
}

ipcMain.on('minimize-window', () => {
  const window = BrowserWindow.getFocusedWindow();
  if (window) {
    window.minimize();
  }
});

ipcMain.on('maximize-window', () => {
  const window = BrowserWindow.getFocusedWindow();
  if (window) {
    if (window.isMaximized()) {
      window.unmaximize();
    } else {
      window.maximize();
    }
  }
});

ipcMain.on('close-window', () => {
  const window = BrowserWindow.getFocusedWindow();
  if (window) {
    window.close();
  }
});

ipcMain.handle('open-system-restore', async () => {
  return new Promise(resolve => {
    const command = 'systempropertiesprotection.exe';

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error('Error opening System Protection:', error);
        resolve({ success: false, error: error.message });
      } else {
        console.log('System Protection settings opened successfully');
        resolve({
          success: true,
          message: 'System Protection settings opened',
        });
      }
    });
  });
});

app.whenReady().then(() => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
