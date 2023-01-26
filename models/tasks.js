const mongoose = require("mongoose")

const taskSchema = mongoose.Schema({
    name:
    {
        type:String,
        required:[true,"You Must Enter A Name For Your Task"],
        trim:true,
        maxlength:[20,"Name Can Not Be More Than 25 Characters"],
    },
    completed:
    {
        type:Boolean,
        default:false,
    }
})



const Task = mongoose.model('Task',taskSchema);

module.exports = Task;