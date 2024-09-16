const mongoose = require('mongoose');
const { Schema } = mongoose;

const top10Schema =Schema({
    name:{
        type:String,
        required:true,

    },
    last:{
        type:String,
        required:true,

    },
    buy:{
        type:String,
        required:true,

    },
    sell:{
        type:String,
        required:true,

    },
    volume:{
        type:String,
        required:true,

    },
    base_unit:{
        type:String,
        required:true,

    },
    
});
const top10Model=mongoose.model('top10',top10Schema)
module.exports=top10Model