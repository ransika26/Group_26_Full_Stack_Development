import mongoose from "mongoose";
import OrderItem from "../models/Order_item_platform.js";
import CustomerAuthenticationModel from "../models/Customer_authentication_platform.js";
import ECommerceModel from "../models/Product_add_platform.js";

// Fetch order items for a specific seller with status "delivered"
export const getOrdersdeliveredBySeller = async (req, res) => {
  const { sellerId } = req.params;

  try {
    // Validate SellerID
    if (!mongoose.Types.ObjectId.isValid(sellerId)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid SellerID format." });
    }

    const orders = await OrderItem.find({
      SellerID: sellerId,
      status: { $in: ["delivered"] },
    })
      .populate("customerId", "CustomerAddress CustomerPhoneNumber")
      .populate("productId", "ProductName")
      .lean();

    if (!orders.length) {
      return res
        .status(404)
        .json({ success: false, message: "No orders found." });
    }

    res.status(200).json({ success: true, orders });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch orders." });
  }
};
