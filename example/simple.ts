import * as Gaskunk from '../dist';

// Call this if you have already created sheets.
Gaskunk.connection({});

class Animal extends Gaskunk.Entity {
  id!: number;
  name!: string;
  description!: string;
}

const skunk = new Animal();

skunk.id = 0;
skunk.name = 'gaskunk';
skunk.description = '🦨';

skunk.create();
