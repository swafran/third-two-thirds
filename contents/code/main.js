// see https://develop.kde.org/docs/extend/plasma/kwin/

screenHeight = 1080 - 30
screenWidth = 1920

function twoThirdsWindowLeft() {
  var win = workspace.activeClient;
  win.geometry = {
      x: 0,
      y: 0,
      width: screenWidth * .66,
      height: screenHeight,
  }
}

function twoThirdsWindowRight() {
  var win = workspace.activeClient;
  win.geometry = {
      x: screenWidth * .34,
      y: 0,
      width: screenWidth * .66,
      height: screenHeight,
  }
}

function thirdWindowLeft() {
  var win = workspace.activeClient;
  win.geometry = {
      x: 0,
      y: 0,
      width: screenWidth * .34,
      height: screenHeight,
  }
}

function thirdWindowRight() {
  var win = workspace.activeClient;
  win.geometry = {
      x: screenWidth * .66,
      y: 0,
      width: screenWidth * .34,
      height: screenHeight,
  }
}

registerShortcut("Make current window size 2/3 of screen, pos left", "Make current window size 2/3 of screen, pos left", "Meta+J", twoThirdsWindowLeft);
registerShortcut("Make current window size 2/3 of screen, pos right", "Make current window size 2/3 of screen, pos right", "Meta+M", twoThirdsWindowRight);
registerShortcut("Make current window size 1/3 of screen, pos left", "Make current window size 1/3 of screen, pos left", "Meta+K", thirdWindowLeft);
registerShortcut("Make current window size 1/3 of screen, pos right", "Make current window size 1/3 of screen, pos right", "Meta+L", thirdWindowRight);
