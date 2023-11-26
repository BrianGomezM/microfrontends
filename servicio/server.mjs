// Importa los módulos necesarios
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors'; // Importa cors

// Crea una instancia de express
const app = express();
const port = 3001;

// Middleware para habilitar CORS
app.use(cors());

// Otras configuraciones y rutas de tu servidor

// Ruta para obtener datos de la API de perros
app.get('/api/breeds', async (req, res) => {
  try {
    const apiKey = 'live_KubpQHMVPIU2VKXB7kjzYzhEphhPEJnmcwLIJSyCSFLhmyLqNuc0f3dr5gzteb2Z';
    const response = await fetch(`https://api.thedogapi.com/v1/breeds?limit=100&page=0&api_key=${apiKey}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from Dog API:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor intermedio escuchando en http://localhost:${port}`);
});
