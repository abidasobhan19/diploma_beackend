const mongoose = require ('mongoose')

mongoose.connect('mongodb://localhost:27017/Diploma',{ useNewUrlParser: true , useUnifiedTopology: true , useFindAndModify:false})
.then(() =>{
    // console.log("db connected");
})
.catch( e => { console.error(e) })