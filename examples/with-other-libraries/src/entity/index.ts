import { Entity } from '@gaskunk/core';

export class Skunk extends Entity {
  constructor() {
    super();
  }

  id!: number;
  name!: string;
  description!: string;
}
