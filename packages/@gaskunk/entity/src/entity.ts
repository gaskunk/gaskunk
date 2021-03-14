import { Table } from './table';

export class Entity {
  private sheets: GoogleAppsScript.Spreadsheet.Spreadsheet | null = null;
  private table = new Table(this.sheets);

  constructor(sheets?: GoogleAppsScript.Spreadsheet.Spreadsheet) {
    this.sheets = sheets || SpreadsheetApp.getActive();
  }

  save() {
    /**
     * Insert sheet as new table
     */
    this.table.create(this.constructor.name);

    const members = Object.entries(this);
    const columnNameAndInitialValues = members.filter(
      (member) => !member.includes('sheets') && !member.includes('table')
    );

    return columnNameAndInitialValues;
  }
  find() {
    // TODO: Get all data
  }
  findBy() {
    // TODO: Get data by params
  }
  delete() {
    // TODO: Delete data
  }
  deleteBy() {
    // TODO: Delete data by params
  }
  order() {
    // TODO: Sort data
  }
  update() {
    // TODO: Update data
  }
}
