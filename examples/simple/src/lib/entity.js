"use strict";
exports.__esModule = true;
exports.Entity = void 0;
var Entity = /** @class */ (function () {
    function Entity() {
        this.sheets = null;
        this.sheets = SpreadsheetApp.getActiveSheet();
    }
    Entity.prototype.create = function (tableName) {
        // TODO: Insert new sheet
        // console.log(this);
    };
    Entity.prototype.clear = function (tableName) {
        // TODO: Delete sheet
    };
    Entity.prototype.save = function () {
        // TODO: Create table(data)
        var tableName = this.constructor.name;
        console.log(tableName);
        var columnNameAndInitialValues = Object.entries(this);
        columnNameAndInitialValues.map(function (value) {
            /**
             * value[0] : column name
             * value[1] : initial data
             */
        });
        return columnNameAndInitialValues;
    };
    Entity.prototype.find = function () {
        // TODO: Get all data
    };
    Entity.prototype.findBy = function () {
        // TODO: Get data by params
    };
    Entity.prototype["delete"] = function () {
        // TODO: Delete data
    };
    Entity.prototype.deleteBy = function () {
        // TODO: Delete data by params
    };
    Entity.prototype.order = function () {
        // TODO: Sort data
    };
    Entity.prototype.update = function () {
        // TODO: Update data
    };
    return Entity;
}());
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map