
// importing DB Collection
const Task = require('../models/tasks');



// get all tasks
const getAllTasks = async (req,res) => {

    try {
        const allTasks = await Task.find({});
        res.status(200).json({tasks:allTasks});
    }
    catch (error) {
        res.status(500).json({error:error.message})
    }
}


// create a task 
const createTask = async (req,res) => {
    try 
    {
        const newTask = { name:req.body.name , completed:req.body.completed };
        const {id} = await Task.create(newTask);
        res.status(201).json({taskId:id});
    }
    catch (error) 
    {
        
        res.status(500).json({error:error.message})
    }
}


// get a task
const getTask = async (req,res) => {
    
    try {
        const thistask = await Task.findOne({_id:req.params.id?.trim()});
        if(thistask)
        {
            return res.json({task:thistask});
        }
        else
        {
            return res.status(404).json({error:`This Task ${req.params.id} is Not Found`});
        }
    }

    catch (error) {
        res.status(500).json({error:error.message});
    }
}


// update a task

const updateTask = async (req,res) => {
    const taskid = req.params.id;
    try 
    {
        const taskUpdated = await Task.findByIdAndUpdate(taskid, req.body , {new:true,runValidators:true});
        if (taskUpdated)
        {
            return res.status(200).json({task:taskUpdated});
        }
        else
        {
            return res.status(404).json({done:false,msg:"Item Not Found"});
        }
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}

// delete a task

const deleteTask = async (req,res) => {
    
    const taskid = req.params.id;
    try
    {
        const deletedTask = await Task.findOneAndRemove({_id:taskid});
        if ( deletedTask )
        {
            return res.status(200).json({done:true,msg:"Item Deleted",task:deletedTask});
        }
        else
        {
            return res.status(404).json({done:false,msg:"Item Not Found"});
        }
    }
    catch (error)
    {
        res.status(404).json({done:false,msg:error.message});
    }
}


module.exports = { 
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask, 
} ;