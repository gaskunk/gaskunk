import { Table } from '../src/table';

SpreadsheetApp['getActiveSpreadsheet'] = jest.fn(
  () =>
    (({
      insertSheet: jest.fn(),
    } as unknown) as GoogleAppsScript.Spreadsheet.Spreadsheet)
);

describe('Table', () => {
  it('create', () => {
    const table = new Table(SpreadsheetApp.getActiveSpreadsheet());
    const name = 'Table';
    expect(table.create(name)).toBe(`Created ${name}`);
  });
});
