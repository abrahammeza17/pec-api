require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

const app = express();

app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
    res.json({
        message: 'API REWEAR funcionando correctamente'
    });
});

// Rutas de productos
app.use('/api/products', productRoutes);

// Middleware para rutas inexistentes
app.use(notFound);

// Middleware centralizado de errores
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Servidor funcionando en puerto ${PORT}`);
    });
};

startServer();