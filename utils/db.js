import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('workouts.db');

export const initDB = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS history (id INTEGER PRIMARY KEY NOT NULL, workout TEXT, date TEXT);'
    );
  });
};

export const insertWorkout = (workout, date) => {
  db.transaction(tx => {
    tx.executeSql('INSERT INTO history (workout, date) VALUES (?, ?);', [workout, date]);
  });
};

export const getHistory = (callback) => {
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM history;', [], (_, { rows }) => {
      callback(rows._array);
    });
  });
};

