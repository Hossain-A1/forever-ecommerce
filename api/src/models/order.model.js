import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  address: {
    type: Object,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },

  status: {
    type: String,
    required: true,
    default: "Order Placed",
  },
  paymentMethod: {
    type: String,
    required: true,
  },

  payment: {
    type: Boolean,
    required: true,
    default: false,
  },
  date: {
    type: Number,
    required: true,
  },
});

const orderModel = model("order", orderSchema);

export default orderModel;
