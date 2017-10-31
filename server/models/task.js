import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
    done: Boolean, // standard types
    label: String,
    project: {
        type: {},
        required: true
    },
    assignedTo: {
        type: {},
        required: false,
        default: null
    }
});

const TaskModel = mongoose.model('Task', TaskSchema);

export default TaskModel;