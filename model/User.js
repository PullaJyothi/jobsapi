const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, 'email required'],
        unique: [true, 'email already exists']
    },
    mobile: {
        type: String,
        required: [true, 'mobile number required'],
        unique: [true, 'mobile number already exists']
    },
    password : {
        type: String,
        required:true
    },
    image : {
        type : Object,
        default : {
            url : "https://www.google.com/search?q=dummy+user+image&rlz=1C1GEWG_enIN1013IN1013&sxsrf=ALiCzsYnDeqUXGwVGbQFznb2bdumsMd8LA:1672992807308&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjS4Pbvv7L8AhVSuGMGHYhbAQYQ_AUoAXoECAEQAw&biw=1163&bih=517&dpr=1.65#imgrc=lwajYrMcLkqoMM"
        }
    },
    role : {
        type: String,
        default:"user"
    },
    jobs : {
        type: Array,
        default: []
    }
}, {
    collection: "users",
    timestamps:true
})

module.exports = mongoose.model("User", UserSchema)