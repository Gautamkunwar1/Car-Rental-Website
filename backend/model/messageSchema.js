import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    msg:{
        type:String,
        required:true,
    }
},
    {timestamps:true},
)
const MsgSchema = mongoose.model("Message",messageSchema);
export default MsgSchema;
