// Copyright 2021 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

async function applyTheme() {
  const theme = await window.SignalWindow.Settings.themeSetting.getValue();
  document.body.classList.remove('light-theme');
  document.body.classList.remove('dark-theme');
  document.body.classList.add(
    `${
      theme === 'system'
        ? window.SignalWindow.context.nativeThemeListener.getSystemTheme()
        : theme
    }-theme`
  );
}

async function applyThemeLoop() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    // eslint-disable-next-line no-await-in-loop
    await window.SignalWindow.Settings.waitForChange();

    // eslint-disable-next-line no-await-in-loop
    await applyTheme();
  }
}

applyTheme();
applyThemeLoop();

window.SignalWindow.context.nativeThemeListener.subscribe(() => {
  applyTheme();
});
