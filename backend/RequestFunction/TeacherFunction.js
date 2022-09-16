const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const Teacher = mongoose.model('Teacher',new Schema({ teacherid: String, teacherpassword : String }));

exports.loginforteachers = (req, res) => {

    console.log('loginforteachers = ', req.body)
    
    Teacher.findOne({teacherid : req.body.teacherid}).exec().then(async (data)=>{

        console.log('inside = ',data)
        if(data)
        {
            if( req.body.teacherpassword == data.teacherpassword)
            {

                return res.status(200).json({messege : "SUCCESS", detail : data});
                
            }
            else
            {
                return res.status(400).json({messege : "Please provide a valid email-id or password"})
            }
        }
        else
        {
            return res.status(400).json({messege : "your Emialid is incorrect or maybe you are not registered"})
        }

    }).catch((error)=>{
        res.status(400).json({messege : `${error}`})
    })
};

