import { Entity } from '../src/entity';

const SHEETS_VALUES = [
  ['id', 'name', 'description'],
  [0, 'gaskunk', '🦨'],
  [1, 'skunk', 'This is Skunk!'],
];

SpreadsheetApp['getActiveSpreadsheet'] = jest.fn(
  () =>
    (({
      insertSheet: jest.fn(),
      getSheetByName: jest.fn(() => ({})),
    } as unknown) as GoogleAppsScript.Spreadsheet.Spreadsheet)
);

SpreadsheetApp['getActive'] = jest.fn(
  () =>
    (({
      insertSheet: jest.fn(),
      deleteSheet: jest.fn(),
      getSheetByName: jest.fn(() => ({
        clearContents: jest.fn(() => ({})),
        appendRow: jest.fn(),
        getDataRange: jest.fn(() => ({
          getValues: jest.fn(() => SHEETS_VALUES),
        })),
      })),
    } as unknown) as GoogleAppsScript.Spreadsheet.Spreadsheet)
);

class Skunk extends Entity {
  constructor() {
    super();
  }
  id!: number;
  name!: string;
  description!: string;
}

describe('Entity', () => {
  it('create', () => {
    const skunk = new Skunk();
    const name = 'Table';
    expect(skunk.create(name)).toBe(`Created ${name}`);
  });

  it('save', () => {
    const skunk = new Skunk();
    skunk.id = 0;
    skunk.name = 'gaskunk';
    skunk.description = '🦨';
    /**
     * Column names: SHEETS_VALUES[0]
     * Initial values: SHEETS_VALUES[1]
     */
    expect(skunk.save()).toEqual([SHEETS_VALUES[0], SHEETS_VALUES[1]]);
  });

  it('clear', () => {
    const skunk = new Skunk();
    const name = 'Table';
    expect(skunk.clear(name)).toBe(`Cleared ${name}`);
  });

  it('find', () => {
    const skunk = new Skunk();
    expect(skunk.find()).toEqual(SHEETS_VALUES);
  });

  it('remove', () => {
    const skunk = new Skunk();
    expect(skunk.remove()).toBe(`Deleted ${skunk.constructor.name} data`);
  });
});
