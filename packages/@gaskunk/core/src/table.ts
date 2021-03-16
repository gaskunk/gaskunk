import { getTable } from './sheets';

export class Table {
  private sheets: GoogleAppsScript.Spreadsheet.Spreadsheet | null = null;

  constructor(sheets: GoogleAppsScript.Spreadsheet.Spreadsheet | null) {
    this.sheets = sheets;
  }

  public create(tableName: string) {
    return this.sheets && getTable(this.sheets).create({ tableName });
  }

  public clear(tableName: string) {
    return this.sheets && getTable(this.sheets).clear({ tableName });
  }
}
