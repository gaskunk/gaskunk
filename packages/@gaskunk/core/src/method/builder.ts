export class MethodBuilder {
  public _statuments: never[];
  constructor(private tableName = '') {
    this._statuments = [];
  }

  column() {
    return this;
  }

  select() {
    return this.column();
  }
}
