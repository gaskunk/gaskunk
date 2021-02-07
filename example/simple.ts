import Entity, { connection } from '../dist';

// Call this if you have already created sheets.
connection({});

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
