const express = require('express')

const learnerRouter = express.Router()

const data = require('../data/data')

learnerRouter.get('/learner',(req,res) =>{
    res.status(200).json({message:"Connected"})
})

learnerRouter.get('/:idx',(req,res)=>{
    let idx = Number(req.params.idx)   
if (idx > data.length|| idx < 0){
    res.status(404).json({message:"Learner Not Found"})
}

    res.status(200).json({learner:data[idx]})
})
module.exports = learnerRouter