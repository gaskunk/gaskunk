import { getSheets } from './sheets';

export class Entity {
  private sheets: GoogleAppsScript.Spreadsheet.Spreadsheet | null = null;

  constructor(sheets?: GoogleAppsScript.Spreadsheet.Spreadsheet) {
    this.sheets = sheets || SpreadsheetApp.getActive();
  }

  public save() {
    const tableName = this.constructor.name;
    const properties = Object.entries(this);
    return (
      this.sheets && getSheets(this.sheets).save({ tableName, properties })
    );
  }

  public findAll() {
    /**
     * Get all data in table
     */
    const tableName = this.constructor.name;
    return this.sheets && getSheets(this.sheets).findAll({ tableName });
  }

  public findBy() {
    // TODO: Get data by params
  }

  public deleteAll() {
    /**
     * Delete all data in table
     */
    const tableName = this.constructor.name;
    return this.sheets && getSheets(this.sheets).deleteAll({ tableName });
  }

  public deleteBy() {
    // TODO: Delete data by params
  }

  public order() {
    // TODO: Sort data
  }

  public update() {
    // TODO: Update data
  }
}