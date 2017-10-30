import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: {
        type: String,
        require: true,
    },  
    role:{
        type: {},
        required:true,
        default: null
    }
});

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;