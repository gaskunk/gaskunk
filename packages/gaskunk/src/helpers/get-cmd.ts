/**
 * sourced: https://github.com/RenaudRohlinger/create-r3f-app/blob/master/lib/utils/get-install-cmd.js
 */

import execa from 'execa';

let installCmd: 'yarn' | 'npm' | undefined;
let claspCmd: 'clasp' | 'npx clasp' | undefined;

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

export const getClaspCmd: () => 'clasp' | 'npx clasp' = () => {
  if (claspCmd) {
    return claspCmd;
  }

  try {
    execa.sync('clasp', ['-v']);
    claspCmd = 'clasp';
  } catch (e) {
    claspCmd = 'npx clasp';
  }

  return claspCmd;
};
