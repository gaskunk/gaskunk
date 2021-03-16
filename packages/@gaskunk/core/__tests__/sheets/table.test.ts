import { Table } from '../../src/sheets/table';

SpreadsheetApp['getActiveSpreadsheet'] = jest.fn(
  () =>
    (({
      insertSheet: jest.fn(),
      getSheetByName: jest.fn(() => ({})),
      deleteSheet: jest.fn(),
    } as unknown) as GoogleAppsScript.Spreadsheet.Spreadsheet)
);

describe('Table', () => {
  it('create', () => {
    const table = new Table(SpreadsheetApp.getActiveSpreadsheet());
    const name = 'Table';
    expect(table.create(name)).toBe(`Created ${name}`);
  });

  it('clear', () => {
    const table = new Table(SpreadsheetApp.getActiveSpreadsheet());
    const name = 'Table';
    expect(table.clear(name)).toBe(`Cleared ${name}`);
  });
});
