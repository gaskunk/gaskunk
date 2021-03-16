export class Table {
  private sheets: GoogleAppsScript.Spreadsheet.Spreadsheet | null = null;

  constructor(sheets: GoogleAppsScript.Spreadsheet.Spreadsheet | null) {
    this.sheets = sheets;
  }

  public create(name: string) {
    this.sheets?.insertSheet(name);
    return `Created ${name}`;
  }

  public clear(name: string) {
    const target = this.sheets?.getSheetByName(name);
    if (target) {
      this.sheets?.deleteSheet(target);
      return `Cleared ${name}`;
    }
    return new Error(`Cannot clear ${name}`);
  }
}
