const express = require("express");
const Mahasiswa = require("../models/Mahasiswa");
const router = express.Router();

// get semua mahasiswa
router.get("/", async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.find();
    res.json(mahasiswa);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// post tambah mahasiswa
router.post("/", async (req, res) => {
  try {
    const mahasiswa = new Mahasiswa(req.body);
    await mahasiswa.save();
    res.status(201).json(mahasiswa);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// put update mahasiswa by npm
router.put("/:npm", async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.findOneAndUpdate({ npm: req.params.npm }, req.body, { new: true });
    res.json(mahasiswa);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// delete mahasiswa by npm
router.delete("/:npm", async (req, res) => {
  try {
    await Mahasiswa.findOneAndDelete({ npm: req.params.npm });
    res.json({ message: "mahasiswa berhasil dihapus" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
