const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoURI = "mongodb+srv://aman88sh:7mDAMzyMflF7rvK7@cluster0.hjgxl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed", error);
    process.exit(1);
  }
};

module.exports = connectDB;
