import {CodeModel} from './code.model';

export class BackupCodeModel {
  backupCodes: Array<CodeModel>;

  constructor(backupCodes?: Array<CodeModel>) {
    this.backupCodes = backupCodes;
  }

}
