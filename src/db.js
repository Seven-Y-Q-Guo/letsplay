import Dexie from 'dexie';

export const db = new Dexie('letsplay');

// status: 0, 1 or 2
// 0 success
// 1 error
// 2 or undefine: not started
db.version(1).stores({
  practices: 'id, content, status', // Primary key and indexed props
});
