const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://kainy_admin:6PJt5uISlwnILn08@cluster0.osruv.mongodb.net/Daily_Review?retryWrites=true&w=majority';

const createUser = async (req, res, next) => {
    const newUser = {
        name: req.body.name,
        age: req.body.age
    };
    const client = new MongoClient(url); //iniciating which server we want to connect to. Not taking place here.

    try {
        await client.connect();
        //open the connection
        const db = client.db();
        //got database
        const result = db.collection('products').insertOne(newUser);//connection is what contained. all t
        // access to the collection and created a new document
    } catch (error) {
        return res.json({message: 'Could not store data.'});
    }
    client.close();//make sure every connect you open, you need to close manually. Adding many connection isn't efficient 

    res.json(newUser);
};

const getUsers = async (req, res, next) => {
    
};

exports.createUser = createUser;
exports.getUsers = getUsers;