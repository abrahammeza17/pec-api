// Middleware para rutas no encontradas (404)
const notFound = (req, res, next) => {
    res.status(404).json({
        message: 'Ruta no encontrada'
    });
};

// Middleware para gestionar errores (500)
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    res.status(500).json({
        message: 'Error interno del servidor'
    });
};

module.exports = {
    notFound,
    errorHandler
};