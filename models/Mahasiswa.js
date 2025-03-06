const mongoose = require("mongoose");

const MahasiswaSchema = new mongoose.Schema({
  npm: {
    type: String,
    required: true,
    unique: true,
  },
  nama: {
    type: String,
    required: true,
  },
  ipk: {
    type: [Number],
    required: true,
  },
});

module.exports = mongoose.model("Mahasiswa", MahasiswaSchema);
