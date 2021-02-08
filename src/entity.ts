export class Entity {
  private sheets: GoogleAppsScript.Spreadsheet.Sheet | null = null;

  constructor() {
    this.sheets = SpreadsheetApp.getActiveSheet();
  }

  create(tableName: string) {
    // TODO: Insert new sheet
    // console.log(this);
  }
  clear(tableName: string) {
    // TODO: Delete sheet
  }
  save() {
    // TODO: Create table(data)
    const tableName = this.constructor.name;
    console.log(tableName);

    const columnNameAndInitialValues = Object.entries(this);
    columnNameAndInitialValues.map((value) => {
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
