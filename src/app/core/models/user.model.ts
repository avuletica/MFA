export class UserModel {
  id?: number;
  firstName?: string;
  lastName?: string;
  username?: string;
  password?: string;
  email?: string;
  backupCodes?: Array<number>;

  constructor(id?: number,
              firstName?: string,
              lastName?: string,
              username?: string,
              password?: string,
              email?: string,
              backupCodes?: Array<number>) {

    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
    this.email = email;
    this.backupCodes = backupCodes;
  }
}
