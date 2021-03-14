"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.doGet = void 0;
var dayjs_1 = __importDefault(require("dayjs"));
require("dayjs/locale/ja");
dayjs_1["default"].locale('ja');
function doGet() {
    var date = dayjs_1["default"]().format('YYYY/MM/DD');
    return ContentService.createTextOutput(JSON.stringify(date)).setMimeType(ContentService.MimeType.JSON);
}
exports.doGet = doGet;
//# sourceMappingURL=main.js.map