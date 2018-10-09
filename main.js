const { app, BrowserWindow } = require("electron");

const url = require("url");
const path = require("path");

let win;

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600, icon: path.join(__dirname, `src/assets/images/favicon.ico`) });

  // load the dist folder from Angular
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/index.html`),
      protocol: "file:",
      slashes: true,
      icon: path.join(__dirname, `src/assets/images/favicon.ico`)
    })
  );

  // The following is optional and will open the DevTools:
  // win.webContents.openDevTools()
  win.setMenu(null)

  win.maximize()

  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);

// on macOS, closing the window doesn't quit the app
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// initialize the app's main window
app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});