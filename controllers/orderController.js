// controllers/orderController.js
import Order from '../models/Order.js';
import Cart from '../models/Cart.js';

export const createOrder = async (req, res) => {
  const userId = req.user.id;

  // Get user's cart
  const cart = await Cart.findOne({ user: userId }).populate('items.product');
  if (!cart || cart.items.length === 0) {
    return res.status(400).json({ message: 'Cart is empty' });
  }

  const totalAmount = cart.items.reduce((acc, item) => {
    return acc + (item.product.price * item.quantity);
  }, 0);

  const order = new Order({
    user: userId,
    items: cart.items,
    totalAmount
  });

  await order.save();

  // Clear cart after order is created
  cart.items = [];
  await cart.save();

  res.status(201).json({ message: 'Order created successfully', order });
};
