import mongoose from "mongoose"

const { Schema } = mongoose;

const onlineUserSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId, 
            ref: "User", 
            required: true, 
          },
        username: { type: String, required: true },
        email: { type: String, unique: true, required: true },
        token: { type: String, required: true }
    }, {
    timestamps: true
}
)

const OnlineUserModal = mongoose.model("OnlineUsers", onlineUserSchema)

export default OnlineUserModal;