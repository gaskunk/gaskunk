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
    // TODO: Get all data
    const tableName = this.constructor.name;
    const target = this.sheets?.getSheetByName(tableName);
    const range = target?.getDataRange();
    const SpreadsheetValues = range?.getValues();

    /**
     * Get first row values as column names
     */
    const columnNames = SpreadsheetValues?.reduce((prev, cur, index) => {
      if (index == 0) return cur;
      return prev;
    }, []);

    // TODO: get values excludes column names
    const values = SpreadsheetValues?.filter((value) => value !== columnNames);

    if (values) {
      return [columnNames, ...values];
    }

    return [columnNames, []];
  }

  public findBy() {
    // TODO: Get data by params
  }

  public deleteAll() {
    /**
     * Delete all data in table
     */
    const tableName = this.constructor.name;
    const target = this.sheets?.getSheetByName(tableName);
    const result = target?.clearContents();
    if (result) return `Deleted ${tableName} data`;
    return new Error(`Cannot deleted ${tableName} data`);
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
