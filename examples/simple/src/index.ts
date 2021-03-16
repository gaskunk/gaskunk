import * as GASContentService from '../../utils/gas-content-service';

interface DoGetEvents extends GoogleAppsScript.Events.DoGet {
  parameter: {
    ping?: string;
  };
}

interface DoPostEvents extends GoogleAppsScript.Events.DoPost {}

export function doGet(e: DoGetEvents) {
  const { ping } = e.parameter;

  if (ping) {
    return GASContentService.createOutput({ message: ping });
  }
  return GASContentService.createOutput({ message: 'invalid get request' });
}

export function doPost(e: DoPostEvents) {
  if (e.postData) {
    return GASContentService.createOutput({
      message: JSON.parse(e.postData.contents),
    });
  }
  return GASContentService.createOutput({ message: 'invalid post request' });
}
