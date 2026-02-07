import * as migration_20260207_092036_seed_data from './20260207_092036_seed_data';
import * as migration_20260207_092727_seed_extra_data from './20260207_092727_seed_extra_data';

export const migrations = [
  {
    up: migration_20260207_092036_seed_data.up,
    down: migration_20260207_092036_seed_data.down,
    name: '20260207_092036_seed_data',
  },
  {
    up: migration_20260207_092727_seed_extra_data.up,
    down: migration_20260207_092727_seed_extra_data.down,
    name: '20260207_092727_seed_extra_data'
  },
];
