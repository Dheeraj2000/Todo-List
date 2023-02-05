const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/todo_list_dbms');
mongoose.connect('mongodb://127.0.0.1:27017/todo_list_dbms');
const db = mongoose.connection;
// error
//db.on('error',console.error.bind(console,'erroe connecting to db'));
db.on('error', function(err) { console.log("Donot connect to db"); });
// up and running then message
db.once('open',function(){
    console.log('Success fully connected to the database')
}); 