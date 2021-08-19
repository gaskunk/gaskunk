// import { gaskunk } from '@gaskunk/core';

interface DoGetEvents extends GoogleAppsScript.Events.DoGet {
  parameter: {
    action?: string;
  };
}

interface Skunk {
  name: string;
  description: string;
}

interface CreateOutputArgs<T = {}> {
  message: string;
  data?: T;
}

// const skunk = gaskunk<Skunk>({ client: 'spreadsheet' });

const createOutput = <T extends object>(args: CreateOutputArgs<T>) => {
  const { message, data } = args;
  return ContentService.createTextOutput(
    JSON.stringify({ status: 200, message: message, data: data })
  ).setMimeType(ContentService.MimeType.JSON);
};

export function doGet(e: DoGetEvents) {
  if (e.parameter.action === 'skunk') {
    // const values = skunk.find();
    const one = SpreadsheetApp.getActive()
      .getSheets()[0]
      .getRange(1, 1)
      .getValues();

    const all = SpreadsheetApp.getActive()
      .getSheetByName('Skunk')
      ?.getDataRange()
      .getValues();

    // const names = await skunk('Skunk')?.select('name').build();
    // console.log(names);

    const data = {
      one,
      all,
      // names: names,
    };
    return createOutput({ message: 'Skunk values', data });
  }
}
