import { createOutput } from '../../utils/gas-content-service';
import { gaskunk } from '@gaskunk/core';
interface DoGetEvents extends GoogleAppsScript.Events.DoGet {
  parameter: {
    action?: string;
  };
}

interface Skunk {
  name: string;
  description: string;
}

const skunk = gaskunk<Skunk>({ client: 'spreadsheet' });

// const skunk = new Skunk();
// skunk.id = 0;
// skunk.name = 'gaskunk';
// skunk.description = '🦨';
// skunk.save();

export async function doGet(e: DoGetEvents) {
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

    const names = await skunk('Skunk')?.select('name').build();
    console.log(names);

    const data = {
      one,
      all,
      names: names,
    };
    return createOutput({ message: 'Skunk values', data });
  }
}

// finally, like shown below

// library
// const gaskunk = <T extends object>(tabName: string) => {
//   return {
//     select: async (query: keyof T) => {
//       if (query) {
//         /**
//          * need typecheck
//          * equally user's interface includes type of response -> return
//          */
//         return tabName;
//       } else {
//         throw new Error(tabName);
//       }
//     },
//   };
// };

// user code
// interface Gaskunk {
//   id: number; // primary
//   userName: string;
//   age: number;
//   isActive: boolean;
//   createdAt: Date;
//   updatedAt: Date;
// }

// (async () => {
//   try {
//     /**
//      * hope Array<Gaskunk["id"]>
//      */
//     const ids = await gaskunk<Gaskunk>('gaskunk').select('id');
//   } catch (error) {
//     throw new Error(error.message);
//   }
// })();
