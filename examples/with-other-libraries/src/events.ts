import { Skunk } from './entity';
import { createOutput } from '../../utils/gas-content-service';
interface DoGetEvents extends GoogleAppsScript.Events.DoGet {
  parameter: {
    action?: string;
  };
}

const skunk = new Skunk();
skunk.id = 0;
skunk.name = 'gaskunk';
skunk.description = '🦨';
skunk.save();

export function doGet(e: DoGetEvents) {
  if (e.parameter.action === 'skunk') {
    const values = skunk.findAll();
    return values && createOutput({ message: 'Skunk values', data: values });
  }
}
