import { LoggerFactory } from '@gaskunk/logger';
import { ConsoleLogger } from '@gaskunk/logger/lib/console-logger';
import { SheetLogger } from '@gaskunk/logger/lib/sheet-logger';
import { DataLogger } from '@gaskunk/logger/lib/data-logger';
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

describe('Sheet', () => {
  const logger = new LoggerFactory().create('data');
  if (logger instanceof ConsoleLogger || logger instanceof DataLogger) return;

  it('create', () => {
    const skunk = new Skunk();
    const name = 'Table';
    expect(skunk.create(name)).toBe(
      logger.logGet(skunk.constructor.name, 'create')
    );
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
    expect(skunk.clear(name)).toBe(
      logger.logGet(skunk.constructor.name, 'clear')
    );
  });
});

describe('Data', () => {
  const logger = new LoggerFactory().create('data');
  if (logger instanceof ConsoleLogger || logger instanceof SheetLogger) return;

  it('find', () => {
    const skunk = new Skunk();
    expect(skunk.find()).toEqual(SHEETS_VALUES);
  });

  it('remove', () => {
    const skunk = new Skunk();
    expect(skunk.remove()).toBe(
      logger.logGet(skunk.constructor.name, 'remove')
    );
  });
});
