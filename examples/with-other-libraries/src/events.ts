import { Skunk } from './entity';
import { createOutput } from '../../utils/gas-content-service';
interface DoGetEvents extends GoogleAppsScript.Events.DoGet {
  parameter: {
    action?: string;
  };
}

// const skunk = new Skunk();
// skunk.id = 0;
// skunk.name = 'gaskunk';
// skunk.description = '🦨';
// skunk.save();

export function doGet(e: DoGetEvents) {
  if (e.parameter.action === 'skunk') {
    // const values = skunk.find();
    const values = SpreadsheetApp.getActiveSheet().getRange(1, 1).getValues();
    return values && createOutput({ message: 'Skunk values', data: values });
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
