import { getData } from './data';
import { getSheet } from './sheet';

export class Entity {
  constructor(private sheets?: GoogleAppsScript.Spreadsheet.Spreadsheet) {
    this.sheets = sheets || SpreadsheetApp.getActive();
  }

  /**
   * Create new sheet as table
   */
  public create(tableName: string) {
    return this.sheets && getSheet(this.sheets).create({ tableName });
  }

  /**
   * Create entities, insert initial values
   */
  public save() {
    const tableName = this.constructor.name;
    const properties = Object.entries(this);
    return this.sheets && getSheet(this.sheets).save({ tableName, properties });
  }

  /**
   * Delete table (drop)
   */
  public clear(tableName: string) {
    return this.sheets && getSheet(this.sheets).clear({ tableName });
  }

  /**
   * Get all values in table
   */
  public find() {
    const tableName = this.constructor.name;
    return this.sheets && getData(this.sheets)?.find({ tableName });
  }

  // TODO: Get values by params
  public findBy() {}

  /**
   * Delete all values in table
   */
  public remove() {
    const tableName = this.constructor.name;
    return this.sheets && getData(this.sheets)?.remove({ tableName });
  }

  // TODO: Delete values by params
  public removeBy() {}

  // TODO: Update values
  public update() {}

  // TODO: Check values by id
  public hasId() {}

  // TODO: Get id by values
  public getId() {}

  // TODO: Merge multiple table
  public merge() {}

  public insert() {}

  public count() {}

  // TODO: Executes raw GAS methods
  public methods() {}
}
