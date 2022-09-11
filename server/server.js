const express=require('express');
const bodyParser=require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require ('mongoose');
const config = require('./config/config').get(process.env.NODE_ENV);
const app = express();
mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE)


const { User } = require('./models/user'); 
const { Ad } = require('./models/ad');
const { COMMENT } = require('./models/comments');
const { auth} = require('./middleware/auth')
app.use(bodyParser.json());
app.use(cookieParser());



//post
app.post('/api/ad',(req,res)=>{
    const ad = new Ad(req.body)

    ad.save((err,doc)=>{
        if(err) return res.status(400).send(err);
        res.status(200).json({
            post:true,
            adId: doc._id
        })
    })
})
//Get
//anounces randomly
app.get('/api/ads',(req,res)=>{
    // locahost:3001/api/books?skip=3&limit=2&order=asc
    let skip = parseInt(req.query.skip);
    let limit = parseInt(req.query.limit);
    let order = req.query.order;

    // ORDER = asc || desc
    Ad.find().skip(skip).sort({_id:order}).limit(limit).exec((err,doc)=>{
        if(err) return res.status(400).send(err);
        res.send(doc.sort(() => Math.random() - 0.5));
    })
})
// Get anounce by id 
app.get('/api/getAd',(req,res)=>{
    let id = req.query.id;

    Ad.findById(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.send(doc);
    })
})
// Get by category
app.get('/api/Ad-Category',(req,res)=>{
    let category = req.query.category
    Ad.find({category:category}).exec((err,docs)=>{
        if(err) return res.status(400).send(err);
        res.send(docs)
    })
})
app.get('/api/Ad-Email',(req,res)=>{
    let email = req.query.email
    Ad.find({email:email}).exec((err,docs)=>{
        if(err) return res.status(400).send(err);
        res.send(docs)
    })
})
// Get user's ads
app.get('/api/user_ads',(req,res)=>{
    
    Ad.find({email:req.query.email}).exec((err,docs)=>{
        if(err) return res.status(400).send(err);
        res.send(docs)
    })
})



//Delete
//delete Ad
app.delete('/api/delete_ad',(req,res)=>{
    let id = req.query.id;

    Ad.findByIdAndRemove(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json(true)
    })
})
//Update
app.post('/api/ad_update',(req,res)=>{
    Ad.findByIdAndUpdate(req.body._id,req.body,{new:true},(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json({
            success:true,
            doc
        })
    })
})

//User request
//Post
//register
app.post('/api/register',(req,res)=>{
    const user = new User(req.body);

    user.save((err,doc)=>{
        if(err) return res.json(err);
        res.status(200).json({
            success:true,
            user:doc
        })
    })
})
app.post('/api/user_update',(req,res)=>{
    User.findByIdAndUpdate(req.body._id,req.body,{new:true},(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json({
            success:true,
            doc
        })
    })
})


//login

app.post('/api/login',(req,res)=>{
    User.findOne({'email':req.body.email},(err,user)=>{
        if(!user) return res.json({isAuth:false,message:'Auth failed, email not found'})

        user.comparePassword(req.body.password,(err,isMatch)=>{
            if(!isMatch) return res.json({
                isAuth:false,
                message:'Wrong password'
            });

            user.generateToken((err,user)=>{
                if(err) return res.status(400).send(err);
                res.cookie('auth',user.token).json({
                    isAuth:true,
                    id:user._id,
                    email:user.email
                })
            })
        })
    })
})

//Get
app.get('/api/users',(req,res)=>{
    User.find({},(err,users)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send(users)
    })
})
//logout
app.get('/api/auth',auth,(req,res)=>{
    res.json({
        isAuth:true,
        id:req.user._id,
        email:req.user.email,
        name:req.user.name,
        lastname:req.user.lastname
    })
});


app.get('/api/logout',auth,(req,res)=>{
    req.user.deleteToken(req.token,(err,user)=>{
        if(err) return res.status(400).send(err);
        res.sendStatus(200)
    })
})
//get user by id 
app.get('/api/getUser',(req,res)=>{
    let id = req.query.id;

    User.findById(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.send(doc);
    })
})
// get user by email
app.get('/api/User-Email',(req,res)=>{
    let email = req.query.email
    User.find({email:email}).exec((err,docs)=>{
        if(err) return res.status(400).send(err);
        res.send(docs)
    })
})
//////////comments/////////:
//post comment
app.post('/api/AddComment',(req,res)=>{
    const comment = new COMMENT(req.body);

    comment.save((err,doc)=>{
        if(err) return res.json(err);
        res.status(200).json({
            success:true,
            comment:doc
        })
    })
})
app.get('/api/AdComment',(req,res)=>{
    let adId = req.query.adId
    COMMENT.find({adId:adId}).exec((err,docs)=>{
        if(err) return res.status(400).send(err);
        res.send(docs)
    })
})


const port = process.env.PORT || 4000;
app.listen(port,()=>{
    console.log(`SERVER RUNNNING`)
})