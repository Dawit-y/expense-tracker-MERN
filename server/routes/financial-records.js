import express from "express";
import financialRecordModel from "../schema/record-schema.js";

const router = express.Router();

router.get("/getAllUserById/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const records = await financialRecordModel.find({ userId: userId });
    if (records.length === 0) {
      return res.status(404).send("No records found the user");
    }
    res.status(200).send(records);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const record = new financialRecordModel(data);
    const savedRecord = record.save();

    res.status(200).send(savedRecord);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const record = new financialRecordModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (!record) res.status(404).send("");

    res.status(200).send(record);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const record = new financialRecordModel.findByIdAndDelete(id);
    if (!record) res.status(404).send("");

    res.status(200).send(record);
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
