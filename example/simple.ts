import * as Gaskunk from '../dist';

Gaskunk.connection({});

class Animal extends Gaskunk.Entity {
  id: number;
  name: string;
  description: string;
}

const skunk = new Animal();
skunk.id = 0;
skunk.name = 'gaskunk';
skunk.description = 'This is my pet.';

skunk.create();
