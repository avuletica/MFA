import {environment} from '../../../environments/environment';

export function endpoints() {
  const api = environment.api;
  return {
    auth: {
      login: api + '/security/login',
      signup: api + '/security/sign-up',
      user: api + '/security/user'
    }
  };
}
