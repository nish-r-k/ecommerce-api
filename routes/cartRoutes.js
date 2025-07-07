import express from 'express';
import { addToCart, updateCartItem, removeCartItem, getCart } from '../controllers/cartController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect); // ✅ protect all cart routes

router.get('/', getCart);
router.post('/', addToCart); // ✅ now POST /cart works!
router.put('/update', updateCartItem);
router.delete('/remove', removeCartItem);

export default router;
