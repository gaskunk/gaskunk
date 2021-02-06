interface CreateParams {
  name: string;
}

export class Create {
  private name = '';

  constructor(params: CreateParams) {
    const { name } = params;
    this.name = name;
  }

  all = {
    inspect: () => console.log(this.name),
  };
}
