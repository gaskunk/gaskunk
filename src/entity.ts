export class Entity {
  create() {
    // TODO: Insert new sheet
    // console.log(this);
  }
  drop() {
    // TODO: Delete sheet
  }
  save() {
    // TODO: Create table(data)
    const tableName = this.constructor.name;
    console.log(tableName);

    const columnNameAndInitialValues = Object.entries(this);
    columnNameAndInitialValues.map((value) => {
      /**
       * value[0] : column name
       * value[1] : initial data
       */
    });
  }
  find() {
    // TODO: Get all data
  }
  findBy() {
    // TODO: Get data by params
  }
  delete() {
    // TODO: Delete data
  }
  deleteBy() {
    // TODO: Delete data by params
  }
  order() {
    // TODO: Sort data
  }
  update() {
    // TODO: Update data
  }
}
