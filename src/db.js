import Dexie from 'dexie';

export const db = new Dexie('letsplay');
db.version(1).stores({
  practices: 'id, content', // Primary key and indexed props
});
