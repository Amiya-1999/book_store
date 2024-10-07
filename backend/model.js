import mongoose from "mongoose";

const bookStoreSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  description: String,
  price: Number,
  image: String,
});

const BookStore = mongoose.model("BookStore", bookStoreSchema);

export default BookStore;
