const mongoose = require('mongoose')
//const validator = require('validator')


mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true
})


// const me = new User({
//     name: '   Andrew  ',
//     email: 'ABCabc@google.com',
//     password: 'phone@1234  '
    
// })

// me.save().then((me)=> {
//     console.log(me)
// }).catch((error)=> {
//     console.log('Error!', error)
// })

// const Taks = mongoose.model('Task', {
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })

// const taks = new Taks({
//     description: '  Learn the Mongoose Lib12345  '
    
// })

// taks.save().then((taks)=> {
//     console.log(taks)
// }).catch((error)=> {
//     console.log('Error!', error)
// })