export class CannotClearError extends Error {
  name = 'CannotClearError';

  // FIXME: @gaskunk/types/core
  constructor(tableName: string) {
    super();
    Object.setPrototypeOf(this, CannotClearError.prototype);
    this.message = `Cannot clear ${tableName}`;
  }
}
