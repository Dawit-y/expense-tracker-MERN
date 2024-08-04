import mongoose from "mongoose";

const financialRecordSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
  amount: { type: String, required: true },
  category: { type: String, required: true },
  paymentMethod: { type: String, required: true },
});

const financialRecordModel = new mongoose.model(
  "Record",
  financialRecordSchema
);

export default financialRecordModel;
