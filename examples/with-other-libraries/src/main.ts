import dayjs from 'dayjs';
import 'dayjs/locale/ja';

dayjs.locale('ja');

export function doGet() {
  const date = dayjs().format('YYYY/MM/DD');
  return ContentService.createTextOutput(JSON.stringify(date)).setMimeType(
    ContentService.MimeType.JSON
  );
}
