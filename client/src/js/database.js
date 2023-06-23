import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id' });
      console.log('jate database created');
    },
  });

// adds content to database
export const putDb = async (content) => {
  console.log('PUT content to database');
  const jateDB = await openDB('jate', 1);
  const tx = jateDB.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({ content: content, id: 1 });
  // const request = store.put({ value: content, id: 1 });

  const result = await request;
  console.log('Data saved to database', result);
}

// retrieves data from database
export const getDb = async () => {
  console.log('GET all content from database');
  const jateDB = await openDB('jate', 1);
  const tx = jateDB.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll();

  const result = await request;
  console.log('result.value', result[0].content);
  return result[0].content;
}

initdb();
