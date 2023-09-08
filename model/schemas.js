const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//signup schema
const signUpSchema = new Schema({
    name: {
        type: String,
        required: [true,'feild should not be empty']
    },
    email: {
        type: String,
        required: [true,'feild should not be empty']
    },
    username: {
        type: String,
        required: [true,'feild should not be empty']
    },
    password: {
        type: String, 
        require: [true, 'feild should not be empty']
    },
});

const SignUp = mongoose.model('SignUp', signUpSchema);


//login schema
const loginSchema = new Schema({
    username: {
        type: String,
        required: [true,'feild should not be empty']
    },
    password: {
        type: String, 
        require: [true, 'feild should not be empty']
    },
});
    
    const Login = mongoose.model('Login', loginSchema);



    module.exports = Login;
    module.exports = SignUp;