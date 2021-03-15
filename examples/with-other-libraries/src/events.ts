import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import { createOutput } from '../../utils/service/service';

dayjs.locale('ja');

interface DoGetEvents extends GoogleAppsScript.Events.DoGet {
  parameter: {
    action?: 'user';
  };
}

export function doGet(e: DoGetEvents) {
  if (e.parameter.action === 'user') {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName('User');
    const range = sheet?.getDataRange();
    const values = range?.getValues();
    return createOutput({ message: 'Spreadsheet values', data: values });
  }
  const date = dayjs().format('YYYY/MM/DD');
  return ContentService.createTextOutput(JSON.stringify(date)).setMimeType(
    ContentService.MimeType.JSON
  );
}
