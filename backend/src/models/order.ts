import mongoose, { Document, Schema } from "mongoose";

interface IOrder extends Document {
    date: Date;
    items: Array<any>;
    status: Number
}

const OrderSchema = new Schema<IOrder>({
    date: Date,
    items: Array(['any']),
    status: Number
})

export default mongoose.model<IOrder>('Products', OrderSchema);