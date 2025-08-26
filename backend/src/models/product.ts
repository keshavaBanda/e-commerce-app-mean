import mongoose, { Document, Schema } from "mongoose";

interface IProduct extends Document {
    productName: string,
    description: string,
    shortDescription: string,
    purchasePrice: number,
    sellingPrice: number,
    images: string[],
    categoryId: mongoose.Schema.Types.ObjectId
}

const ProductSchema = new Schema<IProduct>({
    productName: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: false
    },
    shortDescription: {
        type: String,
        require: false
    },
    purchasePrice: {
        type: Number,
        require: true
    },
    sellingPrice: {
        type: Number,
        require: true
    },
    images: Array(String),
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'Categories',
        required: true
    }
})

export default mongoose.model<IProduct>('Products', ProductSchema);