const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { adminLogin } = require("./middleware/adminAuth");

dotenv.config(); // Load .env file

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
// app.use(cors());

const corsOptions = {
  origin: ["http://localhost:3000", "https://soft-alfajores-51ccf5.netlify.app"],
  credentials:true
}
app.use(cors(corsOptions));

// Connect Database
connectDB();

// Routes
app.use("/api", userRoutes);
app.post("/api/admin/login", adminLogin);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
