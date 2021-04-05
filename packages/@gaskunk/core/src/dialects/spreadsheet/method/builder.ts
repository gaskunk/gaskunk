export class SpreadsheetMethodBuilder<T> {
  private _tableName: string;
  private _response: T[] | null;

  async build() {
    if (this._response) return this._response;
    else throw new Error('failed to build method chain, response is empty');
  }

  constructor(tableName: string, options: any = {}) {
    this._tableName = tableName;
    this._response = null;
  }

  select(arg: keyof T) {
    return this;
  }

  as() {
    return this;
  }

  column() {
    return this;
  }

  from() {
    return this;
  }

  with() {
    this._tableName;
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

  insert() {
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
}
