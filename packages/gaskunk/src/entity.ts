export class Entity {
  private create(
    sheets: GoogleAppsScript.Spreadsheet.Spreadsheet,
    name: string
  ) {
    sheets.insertSheet(name);
  }
  clear(sheets: GoogleAppsScript.Spreadsheet.Spreadsheet, name: string) {
    const target = sheets.getSheetByName(name);
    if (target) {
      sheets.deleteSheet(target);
    }
    return new Error(`Cannot clear ${name}`);
  }
  save() {
    const sheets = SpreadsheetApp.getActiveSpreadsheet();

    /**
     * Insert sheet as new table
     */
    const tableName = this.constructor.name;
    this.create(sheets, tableName);

    const columnNameAndInitialValues = Object.entries(this);
    columnNameAndInitialValues.forEach((value) => {
      /**
       * value[0] : column name
       * value[1] : initial data
       */
    });

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
