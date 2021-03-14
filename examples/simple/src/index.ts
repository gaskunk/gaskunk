interface DoGetEvents extends GoogleAppsScript.Events.DoGet {
  parameter: {
    ping?: string;
  };
}

interface DoPostEvents extends GoogleAppsScript.Events.DoPost {}

function createOutput(message: string) {
  return ContentService.createTextOutput(
    JSON.stringify({ status: 200, message: message })
  ).setMimeType(ContentService.MimeType.JSON);
}

export function doGet(e: DoGetEvents) {
  const { ping } = e.parameter;

  if (ping) {
    return createOutput(ping);
  }
  return createOutput('get error!');
}

export function doPost(e: DoPostEvents) {
  if (e.postData) {
    return createOutput(e.postData.contents);
  }
  return createOutput('post error!');
}
