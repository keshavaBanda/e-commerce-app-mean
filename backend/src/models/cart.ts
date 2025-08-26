import mongoose, { Document, Schema } from "mongoose";

export interface ICart extends Document {
  userId: mongoose.Types.ObjectId;   // will store ObjectId
  productId: string[];
}

const CartSchema = new Schema<ICart>({
    userId: { 
        type: Schema.Types.ObjectId, 
        ref: 'users', 
        required:true
    },
    productId: [{
        type: String,
        required: true
    }]
})

export default mongoose.model<ICart>('carts', CartSchema);