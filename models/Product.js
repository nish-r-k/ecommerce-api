import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  category: String,
  imageUrl: String,
  stock: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

export default mongoose.model('Product', productSchema);
