import { Table } from './table';

export class Entity {
  private sheets: GoogleAppsScript.Spreadsheet.Spreadsheet | null = null;
  private table = new Table(this.sheets);

  constructor(sheets?: GoogleAppsScript.Spreadsheet.Spreadsheet) {
    this.sheets = sheets || SpreadsheetApp.getActive();
  }

  save() {
    /**
     * Insert new sheet as table
     */
    const tableName = this.constructor.name;
    this.table.create(tableName);

    const entityProperties = Object.entries(this);
    const values = entityProperties.filter(
      (property) => !property.includes('sheets') && !property.includes('table')
    );

    /**
     * Insert column name
     */
    const colunmNames = values.map((value) => value[0]);
    const target = this.sheets?.getSheetByName(tableName);
    target?.appendRow(colunmNames);

    /**
     * Insert initial values
     */
    const initialValues = values.map((value) => value[1]);
    target?.appendRow(initialValues);

    return {
      columnNames: colunmNames,
      initialValues: initialValues,
    };
  }
  find() {
    // TODO: Get all data
    const tableName = this.constructor.name;
    const target = this.sheets?.getSheetByName(tableName);
    const range = target?.getDataRange();
    const values = range?.getValues();

    /**
     * Get first row values as column names
     */
    const columnNames = values?.map((value) => value[0]);

    // TODO: get values excludes column names

    return columnNames;
  }
  findBy() {
    // TODO: Get data by params
  }
  delete() {
    /**
     * Delete all data in table
     */
    const tableName = this.constructor.name;
    const target = this.sheets?.getSheetByName(tableName);
    const result = target?.clearContents();
    if (result) return `Deleted ${tableName} data`;
    return new Error(`Cannot deleted ${tableName} data`);
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
