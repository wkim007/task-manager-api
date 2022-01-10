const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')


const app = express()
const port = process.env.PORT 

// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         //if (!file.originalname.endsWith('.pdf')) {
//         if (!file.originalname.match(/\.(doc|docx)$/)) {
//             //return cb(new Error('Please upload a PDF'))
//             return cb(new Error('Please upload a word document'))
//         }

//         cb (undefined, true)

//         // cb(new Error('File must be a PDF'))
//         // cb(undefined, true)
//         // cb(undefined, false)
//     }
// })

// app.post('/upload', upload.single('upload'), (req, res)=> {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({error: error.message})
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, ()=> {
    console.log('Server is up on port ' + port)
})

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('61d7162739cc2df1b2380402')
//     // //await task.populate('owner').execPopulate()
//     // await task.populate('owner') 
//     // console.log (task.owner)

//     const user = await User.findById('61d7161939cc2df1b23803fc')
//     await user.populate('tasks')
//     console.log(user.tasks)

// }

// main()

// const jwt = require('jsonwebtoken')

// const myFunction = async() => {
//     const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days'})
//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// }

// myFunction()