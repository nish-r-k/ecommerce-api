import Product from '../models/Product.js';

// Create Product (Admin only)
export const createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//  Get All Products with Search + Pagination
export const getProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;      // current page number
    const limit = parseInt(req.query.limit) || 6;    // items per page
    const skip = (page - 1) * limit;

    const query = {};

    if (req.query.q) {
      const searchRegex = new RegExp(req.query.q, 'i'); // case-insensitive regex
      query.$or = [
        { name: { $regex: searchRegex } },
        { category: { $regex: searchRegex } }
      ];
    }

    const total = await Product.countDocuments(query);

    const products = await Product.find(query)
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    res.json({
      products,
      page,
      pages: Math.ceil(total / limit),
      total
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//  Get Single Product by ID
export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//  Update Product (Admin only)
export const updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//  Delete Product (Admin only)
export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
