import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    phone: String,
    userType: 'Admin' | 'Customer'
}

const UserSchema = new Schema<IUser>({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    userType: {
        type: String,
        require: true,
        enum: ['Admin', 'Customer']
    }
})

export default mongoose.model<IUser>('Users', UserSchema);