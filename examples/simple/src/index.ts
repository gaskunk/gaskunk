import * as Service from '../../utils/service';

interface DoGetEvents extends GoogleAppsScript.Events.DoGet {
  parameter: {
    ping?: string;
  };
}

interface DoPostEvents extends GoogleAppsScript.Events.DoPost {}

export function doGet(e: DoGetEvents) {
  const { ping } = e.parameter;

  if (ping) {
    return Service.createOutput({ message: ping });
  }
  return Service.createOutput({ message: 'invalid get request' });
}

export function doPost(e: DoPostEvents) {
  if (e.postData) {
    return Service.createOutput({
      message: JSON.parse(e.postData.contents),
    });
  }
  return Service.createOutput({ message: 'invalid post request' });
}
