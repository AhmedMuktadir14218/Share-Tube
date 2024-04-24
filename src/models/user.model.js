import mongoose,{Schema} from "mongoose";

const userSchema = new Schema (
    {
        username:{
            type: String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true
        },
        email:{
            type: String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
        },
        fullname:{
            type: String,
            required:true,
            trim:true,
            index:true
        },
        avatar:{
            type:String,
            required:true,
        },
        coverImage:{
            type:String
        },
        watchhistory:{
            type:Schema.Types.ObjectId,
            ref:"Video"
        },
        password:{
            type:String,
            required:[true,"password is requierd"],
        },
        refreshtoken:{
            type:String
        }

    },
    {
        timestamps:true
    }
)

const User = mongoose.model("User",userSchema);
export {User};