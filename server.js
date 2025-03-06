const express = require("express");
const app = express();
const port = 3000;

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// routes
// home
app.get("/", (req, res) => {
  res.send("Selamat datang di sistem prediksi kelulusan mahasiswa.");
});

// get untuk ambil data mahasiswa
app.get("/mahasiswa", (req, res) => {
  res.json([
    {
      npm: "18411017",
      nama: "Rebly Megib Tabuni",
      ipk: [3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 4.1, 4.2],
    },
    {
      npm: "18411018",
      nama: "Jelky Walia",
      ipk: [3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 4.1, 4.2],
    },
  ]);
});

// post untuk menambah data mahasiswa
app.post("/mahasiswa", (req, res) => {
  const data = req.body;
  res.status(201).json({ message: "Mahasiswa ditambahkan!", data });
});

// put untuk mengupdate mahasiswa by npm
app.put("/mahasiswa/:npm", (req, res) => {
  const { npm } = req.params;
  const updatedData = req.body;
  res.json({ message: `Data mahasiswa ${npm} diperbaruhi`, updatedData });
});

// delete untuk menghapus mahasiswa
app.delete("/mahasiswa/:npm", (req, res) => {
  const { npm } = req.params;
  res.json({ message: `mahasiswa dengan ${npm} dihapus` });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
