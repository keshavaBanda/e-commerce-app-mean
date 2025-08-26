import mongoose, { Document, Schema } from "mongoose";

interface ICategory extends Document {
    name: string
}

const CategorySchema = new Schema<ICategory>({
    name: {
        type: String,
        require: true
    }
})

export default mongoose.model<ICategory>('Categories', CategorySchema);