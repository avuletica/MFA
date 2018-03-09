export class UserModel {
  id?: number;
  firstName?: string;
  lastName?: string;
  username?: string;
  password?: string;
  email?: string;
  twoFactorAuthenticationActive: boolean;
  backupCodes?: Array<string>;

  constructor(id?: number,
              firstName?: string,
              lastName?: string,
              username?: string,
              password?: string,
              email?: string,
              backupCodeActive?: boolean,
              backupCodes?: Array<string>) {

    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
    this.email = email;
    this.twoFactorAuthenticationActive = backupCodeActive;
    this.backupCodes = backupCodes;
  }
}
