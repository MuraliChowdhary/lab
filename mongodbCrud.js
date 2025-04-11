import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/college");

// Schema + Model
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number
});
const Product = mongoose.model("Product", productSchema);

// Create
app.post("/products", async (req, res) => {
  const prod = new Product(req.body);
  await prod.save();
  res.send("Product Created ✅");
});

// Read
app.get("/products", async (req, res) => {
  const data = await Product.find();
  res.json(data);
});

// Update
app.put("/products/:id", async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, req.body);
  res.send("Product Updated 🛠️");
});

// Delete
app.delete("/products/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.send("Product Deleted 🗑️");
});

app.listen(5000, () => console.log("Server running on port 5000 🚀"));
