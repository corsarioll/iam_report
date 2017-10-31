import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
    name: String, 
    users: {
        type: [{}],
        required: false,
        default: []
    },
    director:{
        type: {},
        required:true
    },
    reports:{
        type:[{}],
        required: false,
        default: []
    }
});

const ProjectModel = mongoose.model('Project', ProjectSchema);

export default ProjectModel;