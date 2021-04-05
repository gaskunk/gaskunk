export const createOutput = <T extends object>(args: any) => {
  const { message, data } = args;
  return ContentService.createTextOutput(
    JSON.stringify({ status: 200, message: message, data: data })
  ).setMimeType(ContentService.MimeType.JSON);
};

interface DoGetEvents extends GoogleAppsScript.Events.DoGet {
  parameter: {
    ping?: string;
  };
}

interface DoPostEvents extends GoogleAppsScript.Events.DoPost {}

export function doGet(e: DoGetEvents) {
  const { ping } = e.parameter;

  if (ping) {
    const values = SpreadsheetApp.getActiveSheet().getRange(1, 1).getValues();
    return createOutput({ message: ping, data: values });
  }
  return createOutput({ message: 'invalid get request' });
}

export function doPost(e: DoPostEvents) {
  if (e.postData) {
    return createOutput({
      message: JSON.parse(e.postData.contents),
    });
  }
  return createOutput({ message: 'invalid post request' });
}
