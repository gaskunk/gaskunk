import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import { createOutput } from '../../utils/service/service';

dayjs.locale('ja');

interface DoGetEvents extends GoogleAppsScript.Events.DoGet {
  parameter: {
    action?: 'Table';
  };
}

export function doGet(e: DoGetEvents) {
  if (e.parameter.action === 'Table') {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName('Table');
    const values = sheet?.getDataRange().getValues();
    return createOutput({ message: 'Spreadsheet values', data: values });
  }
  const date = dayjs().format('YYYY/MM/DD');
  return ContentService.createTextOutput(JSON.stringify(date)).setMimeType(
    ContentService.MimeType.JSON
  );
}
