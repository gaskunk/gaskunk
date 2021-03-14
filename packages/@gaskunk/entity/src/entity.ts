export class Entity {
  private sheets: GoogleAppsScript.Spreadsheet.Spreadsheet | null = null;

  constructor(sheets?: GoogleAppsScript.Spreadsheet.Spreadsheet) {
    this.sheets = sheets || SpreadsheetApp.getActive();
  }

  private create(name: string) {
    this.sheets?.insertSheet(name);
  }

  clear(name: string) {
    const target = this.sheets?.getSheetByName(name);
    if (target) {
      this.sheets?.deleteSheet(target);
      return `Cleared ${name}`;
    }
    return new Error(`Cannot clear ${name}`);
  }

  save() {
    /**
     * Insert sheet as new table
     */
    const tableName = this.constructor.name;
    this.create(tableName);

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
