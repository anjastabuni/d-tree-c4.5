const express = require("express");
const mongoose = require("mongoose");
const mahasiswaRouter = require("./routes/mahasiswa");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// middleware
app.use(express.json());
app.use("/mahasiswa", mahasiswaRouter);

// koneksi ke mongodb
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error", err));

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
