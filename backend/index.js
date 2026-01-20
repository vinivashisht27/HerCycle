const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./utils/db");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("HerCycle Backend Running 🚀");
});

// --- ROUTES ---
// This connects the file we just made to the server
app.use("/api/auth", require("./routes/authRoute"));

// You can keep or remove this if you aren't using it yet
// app.use("/api/users", require("./routes/userRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});