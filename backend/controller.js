import BookStore from "./model.js";

// Function to seed initial data into the database
export const seedDatabase = async () => {
  try {
    await BookStore.deleteMany();

    const books = [
      {
        title: "",
        author: "",
        genre: "",
        description: "",
        price: 0,
        image: "",
      },
    ];

    await BookStore.insertMany(books);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Define function for fetching all books
export const getAllBooks = async (req, res) => {
  try {
    const allBooks = await BookStore.find();
    res.json(allBooks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
