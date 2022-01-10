
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectId

const {MongoClient, ObjectID} = require ('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    //console.log('Connected correctly')
    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Andrew',
    //     age: 28
    // }, (error, result)=> {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },
    //     {
    //         description: 'Renew the house',
    //         completed: false
    //     },
    //     {
    //         description: 'Pot plants',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log ('Unable to inser documents')
    //     }

    //     console.log(result)
    // })

    // db.collection('users').findOne({_id: new ObjectID("61d102cfa28d6ebe8a9e7747")}, (error, user)=> {
    //     if (error)
    //     {
    //         return console.log ('Unable to fetch documents')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 28}).toArray((error, users)=> {
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 28}).count((error, count)=> {
    //     console.log(count)
    // })

    // db.collection('tasks').findOne({_id: new ObjectID("61d0fd5227063b460675d0b0")}, (error, task)=> {
    //     if (error)
    //     {
    //         return console.log ('Unable to fetch documents')
    //     }

    //      console.log(task)
    // })

    // db.collection('tasks').find({ completed: false}).toArray((error, tasks)=> {
    //      console.log(tasks)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("61d0f89657eec5e51915aef4")
    // }, {
    //     // $set: {
    //     //     name: 'Mike'
    //     // }
    //     $inc: {
    //         age: 1
    //     }

    // }).then((result) => {
    //     console.log(result)
    // }).catch((error)=> {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: true
    // }, {
    //     $set: {
    //         completed: false
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error)=> {
    //     console.log(error)
    // })

    db.collection('users').deleteMany({
        age: 28
    }).then((result) => {
        console.log(result)
    }).catch((error)=> {
        console.log(error)
    })
    
    db.collection('tasks').deleteOne({
        description: "Clean the house"
    }).then((result) => {
        console.log(result)
    }).catch((error)=> {
        console.log(error)
    })
    

})

