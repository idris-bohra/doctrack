const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require("body-parser");
var cors = require('cors');
const multer = require('multer');
const path = require('path');
const open = require('open');
const Attendence = require("./Schema/Attendence");
const Meal = require("./Schema/Meal");
const Resource = require("./Schema/Resource");
const {spawn} = require('child_process');
require('dotenv').config();

app.use(cors());
app.use(bodyparser.json());
app.use("/public", express.static(path.join(__dirname, "files")));


// Database connection and PORT
try
{
    mongoose.connect(`mongodb+srv://idrisbohra1:9009787253@cluster0.wqdmn.mongodb.net/?retryWrites=true&w=majority`, {
        useFindAndModify: false, 
        useNewUrlParser: true, 
        useUnifiedTopology: true}).then(() => console.log("Database is connected!")).catch(err => console.log(err));
        
}
catch(err)
{
    console.log(err)
}

app.listen(process.env.PORT , ()=>{
    console.log(`Running at ${process.env.PORT }`);
})


//Routes
const TeacherRoutes = require("./Routes/TeacherRoutes");
app.use("/", TeacherRoutes);


// Storing files using Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log('file = ', file)
        console.log(__dirname)
      cb(null, path.join(__dirname , '/uploads'))
    },
    filename: function (req, file, cb) {
        console.log()
      cb(null, file.originalname)
    }
  })

const upload = multer({ storage: storage })


//Converting the image into digital format using OCR technology.
app.post('/formdata' , upload.array('file'),(req,res)=>{
    
    // console.log('hello', req.files[0])
    // console.log('req.body', req.body)

    const faizan = spawn('python', ['hello.py'])

    const childPython = spawn('python',['imageConvert.py', `${ req.files[0]?.path}`, `${req.files[0]?.originalname}`]);

    childPython.stdout.on('data',(data)=>{
        console.log(`stdout:${data}`);
    });

    childPython.stderr.on('data',(data)=>{
        console.error(`stderr:${data}`);
    });

    childPython.on('close',(code)=>{
        console.log(__dirname)
        const name = req.files[0].originalname.split(".")[0];
        console.log('name = ',name)
        let text2 = ".txt";
        let result = name.concat(text2);
        console.log('nameresult = ', result)
        const pathname = path.join(`http://localhost:5000/public/`,result)
        open(pathname);
        return res.status(200).json({'obj' : req.body, 'converted' : true})

    });

})

// API FUNCTION
app.post('/addform' ,upload.array('file'), (req,res)=>{
    console.log('getting')
    console.log(req.body)
    console.log(req.files[0])
    const name = req.files[0]?.originalname.split(".")[0];
    console.log('name = ',name)
    let text2 = ".txt";
    let result = name.concat(text2);
    // result = `\\` + result
    console.log('nameresult = ', result)

    pathname = 'http:\\\\localhost:5000\\public\\' + result;
    console.log('pathname = ', pathname)
    let {role} = req.body

    if(role == 'attendence')
    {
        console.log('inside rolling')
        let {role, teacherid,disecode,forclass,section,teachername,teachermongoid,schoolid } = req.body
        Attendence.findOne({ teacherid: req.body.teacherid }).exec(async (error, found) => {

            if (error) return res.status(400).json({ error });
      
            if (found)
            {      
               
                Attendence.findOneAndUpdate({ teacherid: req.body.teacherid } , {
                        "$push"  : {    // $set function is used for updating data of object in an array
                            "attendence" : pathname
                        }
                    }).exec((err , response)=>{
                        if(err)
                        {
                            return res.status(500).json({err})
                        }
                        else
                        {
                            return res.status(201).json({response})
                        }
                    })
                  
            }
            else
            {
                console.log("req.body" , req.body)
    
                console.log('pathname' , pathname)

                const attendence = new Attendence({
                    role,forclass,teacherid,disecode,forclass,section,teachername,teachermongoid,schoolid,
                    attendence : [pathname]
                })
        
                attendence.save((error , cart)=>{
                    if(error)
                    {
                        res.status(400).json({"error" : error})
                    }
                    else
                    {
                        res.status(200).json({cart})
                    }
                })     
        
            }          
        })
    }
    else if(role == 'meal')
    {
        console.log('meal')
        let {role, teacherid,disecode,teachername,teachermongoid,schoolid } = req.body
        Meal.findOne({ teacherid: req.body.teacherid }).exec(async (error, found) => {

            if (error) return res.status(400).json({ error });
      
            if (found)
            {      
               console.log('found in meal')
                Meal.findOneAndUpdate({ teacherid: req.body.teacherid } , {
                        "$push"  : {    // $set function is used for updating data of object in an array
                            "meal" : pathname
                        }
                    }).exec((err , response)=>{
                        if(err)
                        {
                            return res.status(500).json({err})
                        }
                        else
                        {
                            return res.status(201).json({response})
                        }
                    })
                  
            }
            else
            {
                console.log("req.body" , req.body)
    
                console.log(pathname)

                const meal = new Meal({
                    role,teacherid,disecode,teachername,teachermongoid,schoolid,
                    meal : [pathname]
                })
        
                meal.save((error , cart)=>{
                    if(error)
                    {
                        res.status(400).json({"error" : error})
                    }
                    else
                    {
                        res.status(200).json({cart})
                    }
                })     
        
            }          
        })
    }
    else
    {
        console.log('resource')
        let {role, teacherid,disecode,teachername,teachermongoid,schoolid } = req.body
        Resource.findOne({ teacherid: req.body.teacherid }).exec(async (error, found) => {

            if (error) return res.status(400).json({ error });
      
            if (found)
            {      
               console.log('found in resource')
                Resource.findOneAndUpdate({ teacherid: req.body.teacherid } , {
                        "$push"  : {    // $set function is used for updating data of object in an array
                            "resource" : pathname
                        }
                    }).exec((err , response)=>{
                        if(err)
                        {
                            return res.status(500).json({err})
                        }
                        else
                        {
                            return res.status(201).json({response})
                        }
                    })
                  
            }
            else
            {
                console.log("req.body" , req.body)
    
                console.log(pathname)

                const resource = new Resource({
                    role,teacherid,disecode,teachername,teachermongoid,schoolid,
                    resource : [pathname]
                })
        
                resource.save((error , cart)=>{
                    if(error)
                    {
                        res.status(400).json({"error" : error})
                    }
                    else
                    {
                        res.status(200).json({cart})
                    }
                })     
        
            }          
        })
    }

})








app.get('/hello', (req,res)=>{
    console.log(req.body)
    return res.status(200).json({"hello":"idris"});
})