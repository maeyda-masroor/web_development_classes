const tasks = require('../model/task');
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custom-error');
const getAllTask=asyncWrapper(async(req,res)=>{
    const task = await tasks.find({})
    res.status(200).json({task}) 
})
const createTask = asyncWrapper(async(req,res)=>{
    const task = await  tasks.create(req.body)
    res.status(201).json({task})
})
const getTask=asyncWrapper(async(req,res,next)=>{
    const {id:taskId} = req.params;
    const task = await tasks.findOne({__id:taskId})
    if(!task){
        return next(createCustomError(' no task ',404));
    }
    res.status(200).json({task})
})
const deleteTask=asyncWrapper(async(req,res,next)=>{
    const {id:taskId} = req.params;
    const task = await tasks.findOneAndDelete({__id:taskId});
    if(!task){
        return next(createCustomError('no task',404))
    }
    res.status(200).json({task})
})
const updateTask=asyncWrapper(async(req,res,next)=>{
    const {id:taskId}= req.params;
    const task = await tasks.findOneAndUpdate({__id:taskId},req.body,{
        new:true,
        runValidators:true
    })
    if(!task){
        return next(createCustomError('no task',404))
    }
    res.status(200).json({task})

})
module.exports = {
    getAllTask,
    createTask,
    getTask,
    updateTask,
    deleteTask,
  }