export class CannotDeleteAllError extends Error {
  name = 'CannotDeleteAllError';

  // FIXME: @gaskunk/types/core
  constructor(tableName: string) {
    super();
    Object.setPrototypeOf(this, CannotDeleteAllError.prototype);
    this.message = `Cannot delete all values in ${tableName}`;
  }
}
