import Entity from '../src/lib';

class Skunk extends Entity {
  id!: number;
  name!: string;
  description!: string;
}

const skunk = new Skunk();

skunk.id = 0;
skunk.name = 'gaskunk';
skunk.description = '🦨';

skunk.save();
