// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos')
  //   .find({_id: new ObjectID('5a1d2529f9b1f6619a4c7e9e')})
  //   .toArray()
  //   .then((docs) => {
  //     console.log('Todos');
  //     console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to count todos', err);
  // });

  db.collection('Users').find({name: 'Parkpoom'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  });

  // db.close();
});
