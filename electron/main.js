const {
  BrowserWindow,
  app,
  ipcMain,
  Notification,
  Menu,
  shell,
} = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const { stopOHM } = require('../scripts/stop');

// Handle creating/removing shortcuts on Windows when installing/uninstalling
if (require('electron-squirrel-startup')) {
  app.quit();
}

//creating menu template
const menuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Refresh',
        role: 'reload',
      },
      {
        label: 'Start CPU Monitoring',
        accelerator:
          process.platform === 'darwin' ? 'Command+Alt+S' : 'Ctrl+Alt+S',

        click() {
          shell.openPath(
            path.join(__dirname, '../scripts/OpenHardwareMonitor.exe')
          );
        },
      },
      {
        label: 'Quit CPU Monitoring',
        accelerator:
          process.platform === 'darwin' ? 'Command+Alt+Q' : 'Ctrl+Alt+Q',

        click() {
          stopOHM();
        },
      },
      {
        label: 'Exit',
        accelerator: process.platform === 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click() {
          stopOHM();
          //closing app
          waitForProcessKill();
          function waitForProcessKill() {
            setTimeout(function () {
              app.quit();
            }, 1000);
          }
        },
      },
    ],
  },
];

if (isDev) {
  menuTemplate.push(
    //this is to be used only in dev env
    {
      label: 'DEVELOPMENT',
      submenu: [
        { role: 'reload' },
        {
          label: 'Open Dev Tools',
          accelerator:
            process.platform === 'darwin' ? 'Command+Alt+I' : 'Ctrl+Shift+I',
          click(item, focusedWindow) {
            focusedWindow.toggleDevTools();
          },
        },
      ],
    }
  );
}

//adding extra menu element when on mac
if (process.platform === 'darwin') {
  menuTemplate.unshift({});
} else {
  //starting OpenHardwareMonitor for Windows
  shell.openPath(path.join(__dirname, '../scripts/OpenHardwareMonitor.exe'));
}

function createWindow() {
  // Create the browser window.
  let mainWindow = new BrowserWindow({
    width: 1024,
    //height to match OHM window size
    height: 872,
    backgroundColor: 'white',
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
    icon: 'public/favicon.ico', // icon for windows
    //for mac use .icns
  });

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );

  // Opening the DevTools on startup.
  if (isDev) {
    mainWindow.webContents.openDevTools({ mode: 'detach' });
  }
  //preventing garbage collection with event listener
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
  //building menu from template
  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
}

//some functions to communicate from react
ipcMain.on('asynchronous-message', (event) => {
  console.log('Getting platform:', process.platform); // prints in terminal not console"
});
ipcMain.on('notify', (_, message) => {
  new Notification({ title: 'Notifiation', body: message }).show();
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    //closing all wndows
    stopOHM();
    //closing app
    waitForProcessKill();
    function waitForProcessKill() {
      setTimeout(function () {
        app.quit();
      }, 1000);
    }
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// co
