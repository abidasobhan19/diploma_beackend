const mongoose = require('mongoose')

const resultSchema = mongoose.Schema({

    roll:{
        type:Number,
        required:true
    },
    semister:{
            type:Number,
            required:true
    },
    year:{
        type:Number,
        required:true
    },
    result:{
        type:String,
        required:true
    }

    

})

module.exports = mongoose.model('Result', resultSchema);