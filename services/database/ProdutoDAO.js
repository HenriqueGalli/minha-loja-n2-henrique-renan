import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';

const tableName = 'produtos';

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({ name: 'produtos.db', location: 'default' });
};

export const createTable = async (db) => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
        value TEXT NOT NULL
    );`;

  await db.executeSql(query);
};

export const getProdutos = async (db) => {
  try {
    const produtos = [];
    const results = await db.executeSql(`SELECT * FROM ${tableName}`);
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        produtos.push(result.rows.item(index))
      }
    });
    return produtos;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get produtos !!!');
  }
};

export const saveProdutos = async (db, todoItems) => {
  const insertQuery =
    `INSERT OR REPLACE INTO ${tableName}(rowid, value) values` +
    todoItems.map(i => `(${i.id}, '${i.value}')`).join(',');

  return db.executeSql(insertQuery);
};

export const deleteTodoItem = async (db, id) => {
  const deleteQuery = `DELETE from ${tableName} where rowid = ${id}`;
  await db.executeSql(deleteQuery);
};

export const deleteTable = async (db) => {
  const query = `drop table ${tableName}`;

  await db.executeSql(query);
};