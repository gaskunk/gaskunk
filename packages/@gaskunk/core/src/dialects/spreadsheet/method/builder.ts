export class SpreadsheetMethodBuilder<T> {
  private sheets: GoogleAppsScript.Spreadsheet.Spreadsheet | null;
  private tableName: string;
  private sheet: GoogleAppsScript.Spreadsheet.Sheet | null | undefined;

  private columnNames: (keyof T)[];

  private response: Partial<T>[] | null | undefined;

  constructor(tableName: string, options: { [key: string]: any } = {}) {
    this.sheets = SpreadsheetApp.getActive();
    this.tableName = tableName;
    this.sheet = this.sheets.getSheetByName(tableName);

    this.columnNames = this.sheet?.getDataRange().getValues()[0] ?? [];

    this.response = null;
  }

  build() {
    if (this.response) {
      return this.response;
    } else {
      throw new Error('failed to build method chain, response is empty');
    }
  }

  select(arg: keyof T | '*') {
    const values = this.getAllValues();
    const property: NonNullable<
      SpreadsheetMethodBuilder<T>['response']
    >[number] = {};

    if (arg === '*') {
      this.response = values.map((value) => {
        value.forEach((v, i) => {
          property[this.columnNames[i]] = v;
        });
        return property;
      });
    } else {
      const columnIndex = this.columnNames.indexOf(arg);

      this.response = values.map((value) => {
        property[this.columnNames[columnIndex]] = value[columnIndex];
        return property;
      });
    }

    return this;
  }

  as() {
    return this;
  }

  column() {
    return this;
  }

  from(tableName: string) {
    this.sheet = this.sheets?.getSheetByName(tableName);
    return this;
  }

  with() {
    this.tableName;
    return this;
  }

  where() {
    return this;
  }

  join() {
    return this;
  }

  on() {
    return this;
  }

  clear() {
    return this;
  }

  having() {
    return this;
  }

  distinct() {
    return this;
  }

  group() {
    return this;
  }

  limit() {
    return this;
  }

  offset() {
    return this;
  }

  union() {
    return this;
  }

  order() {
    return this;
  }

  insert(args: { [P in keyof T]: any }[]) {
    args.forEach((arg) => {});
    return this;
  }

  ifConflictOn() {
    return this;
  }

  update() {
    return this;
  }

  delete() {
    return this;
  }

  truncate() {}

  transaction() {}

  count() {
    return this;
  }

  min() {}

  max() {}

  sum() {}

  avg() {}

  increment() {}

  decrement() {}

  pluck() {}

  first() {}

  private getAllValues() {
    const all = this.sheet?.getDataRange().getValues() ?? [[]];
    const [_, ...values] = all;
    return values;
  }
}
