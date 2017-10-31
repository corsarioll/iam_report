import mongoose from 'mongoose';

const ReportSchema = new mongoose.Schema({
    body: String,
    date : { 
        type: Date, 
        default: Date.now 
    }, 
    project:{
        type: {},
        required: true,
        default: null
    },
    created_by:{
        type: {},
        required: true,
        default: null
    }
});

const ReportModel = mongoose.model('Report', ReportSchema);

export default ReportModel;