import mongoose from "mongoose";

const CarSchema = mongoose.Schema({
    name :{
        type:String,
        required:true,
        minlength:[2,"Car name should be of atleast two characters "],
        maxlength:[20,"Car name not be greater than 20 characters "]
    },
    carNo:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true,
        minlength:[10,"Description should be of atleast 10 characters"],
        maxlength:[100,"Description should be not more than 50 Characters"]
    },
    rent:{
        type:Number,
        required:true
    },
    availability:{
        type:String,
        enum:["Yes","No"],
        default: 'Yes'
    },
    image:{
        type:String,
    }
},
    { timestamps: true },
)

const CarDetail = mongoose.model("CarDetail",CarSchema);
export default CarDetail;