import mongoose, { Document, Schema } from "mongoose";

interface IWishList extends Document {
  userId: mongoose.Types.ObjectId;   // will store ObjectId
  productId: string[];
}

const WishListSchema = new Schema<IWishList>({
    userId: {
        type: Schema.Types.ObjectId, 
        ref: 'users',
        required: true
    },
    productId: [{
        type: String,
        required: true
    }]
})

export default mongoose.model<IWishList>('WishLists', WishListSchema);