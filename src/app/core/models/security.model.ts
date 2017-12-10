export class SecurityModel {
  username?: string;
  password?: string;
  authToken?: string;
  refreshToken?: string;

  constructor(authToken?: string, password?: string, refreshToken?: string, username?: string) {
    this.authToken = authToken;
    this.password = password;
    this.refreshToken = refreshToken;
    this.username = username;
  }
}
