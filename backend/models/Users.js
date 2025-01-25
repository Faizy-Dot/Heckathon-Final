import mongoose from "mongoose"

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        username: { type: String,required : true  },
        email: { type: String ,unique : true, required : true },
        password: { type: String , requried : true},
        todos: [
            {
              type: String, // Define todos as an array of strings
              required: true, // Ensure each todo in the array is mandatory
            },
          ],
    }, {
    timestamps: true
}
)

const UserModal = mongoose.model("users", userSchema)

export default UserModal;