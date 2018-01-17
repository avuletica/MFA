import {environment} from '../../../environments/environment';

export function endpoints() {
  const api = environment.api;
  return {
    auth: {
      login: api + '/security/login',
      signup: api + '/security/sign-up',
    },
    user: {
      information: api + '/security/user',
      backupCodes: api + '/security/backupCodes',
      generateBackupCodes: api + '/security/backupCodes/generate/'
    }
  };
}