export class SpreadsheetMethodBuilder<T> {
  private _response: T[];

  get build() {
    return this._response;
  }

  constructor(tableName: string, options: any = {}) {
    this._response = [];
  }

  select(arg: keyof T) {
    return this;
  }
}
