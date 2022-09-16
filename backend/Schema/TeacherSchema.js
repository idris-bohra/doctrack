const mongoose = require('mongoose');
var Schema = mongoose.Schema;


const TeacherSchema = new Schema({

    schoolid : {
        type : Schema.Types.ObjectId,
        required : true

    },
    disecode : {
        type: String,
        required : true

    },
    teacherid : {
        type: String,
        unique : true,
        required : true

    },
    teacherpassword : {
        type: String,
        required : true

    },
    teachermail : {
        type: String,
        required : true,
        unique : true

    },
    role : {
        type: String,
        required : true

    },
    forclass : {
        type : Number,
    },
    teacherpassword : {
        type : String,
        required : true
    },
   
})

module.exports = (mongoose.model('Teacher' , TeacherSchema));