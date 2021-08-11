/**
 * sourced: https://github.com/RenaudRohlinger/create-r3f-app/blob/master/lib/utils/get-install-cmd.js
 */

import execa from 'execa';

let installCmd: 'yarn' | 'npm' | undefined;

export const getInstallCmd = () => {
  if (installCmd) {
    return installCmd;
  }

  try {
    execa.sync('yarnpkg', ['--version']);
    installCmd = 'yarn';
  } catch (e) {
    installCmd = 'npm';
  }

  return installCmd;
};
