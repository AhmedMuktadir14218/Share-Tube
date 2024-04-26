import { asyncHandler } from "../utils/asyncHandler.js";


// const registerUser = asyncHandler(
//     async (req,res) => {
//          res.status(200).json({
//             message:"ok"
//         })
//     }
// )



const registerUser =  async (req, res, next) => {
    try {
        await res.status(200).json({
            message:"ok,all right"
        })
    } catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
}

export {registerUser}