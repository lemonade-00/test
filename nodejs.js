const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://mongo:lo8ZJCC0jvcxC7Ij@wp.yurnrav.mongodb.net/test";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db("Course");
    let query = { Name: "線性代數" };
    let doc = 'CSE';
    dbo.collection(doc).find(query).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
    });
    db.close();
});