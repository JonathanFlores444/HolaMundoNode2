const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

const PORT = 3000;
const DATA_FILE = 'datos.json';


const readData = () => {
  const data = fs.readFileSyn(DATA_FILE);
  return JSON.parse(data);
};


const saveData = (data) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};


app.get('/items', (req, res) => {
  const data = readData();
  res.json(data);
});


app.post('/items', (req, res) => {
  const data = readData();
  const newItem = req.body;
  data.push(newItem);
  saveData(data);
  res.status(201).json(newItem);
});

app.put('/items/:nombre', (req, res) => {
  const data = readData();
  const { nombre } = req.params;
  const index = data.findIndex(item => item.nombre === nombre);
  if (index !== -1) {
    data[index] = req.body;
    saveData(data);
    res.json(data[index]);
  } else {
    res.status(404).json({ error: 'Elemento no encontrado' });
  }
});


app.delete('/items/:nombre', (req, res) => {
  const data = readData();
  const { nombre } = req.params;
  const newData = data.filter(item => item.nombre !== nombre);
  if (newData.length !== data.length) {
    saveData(newData);
    res.json({ message: 'Elemento eliminado' });
  } else {
    res.status(404).json({ error: 'Elemento no encontrado' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
