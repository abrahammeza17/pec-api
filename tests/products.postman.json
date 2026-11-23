
{
  "info": {
    "name": "REWEAR API - PEC3",
    "description": "Pruebas CRUD de productos de la API REWEAR",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "variable": [
    {
      "key": "baseUrl",
      "value": "http://localhost:3000"
    },
    {
      "key": "userId",
      "value": "PEGA_AQUI_EL_ID_REAL_DE_UN_USUARIO"
    },
    {
      "key": "productId",
      "value": ""
    }
  ],
  "item": [
    {
      "name": "Obtener todos los productos",
      "request": {
        "method": "GET",
        "header": [],
        "url": "{{baseUrl}}/api/products"
      }
    },
    {
      "name": "Obtener producto por ID",
      "request": {
        "method": "GET",
        "header": [],
        "url": "{{baseUrl}}/api/products/{{productId}}"
      }
    },
    {
      "name": "Crear producto",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n    \"name\": \"Producto de prueba Postman\",\n    \"description\": \"Producto creado para comprobar la API REWEAR\",\n    \"price\": 25,\n    \"size\": \"M\",\n    \"category\": \"Chaquetas\",\n    \"condition\": \"Bueno\",\n    \"image\": \"https://example.com/producto.jpg\",\n    \"userId\": \"{{userId}}\",\n    \"available\": true\n}"
        },
        "url": "{{baseUrl}}/api/products"
      },
      "event": [
        {
          "listen": "test",
          "script": {
            "type": "text/javascript",
            "exec": [
              "if (pm.response.code === 201) {",
              "    const product = pm.response.json();",
              "    pm.collectionVariables.set('productId', product._id);",
              "    console.log('Producto creado. ID:', product._id);",
              "}"
            ]
          }
        }
      ]
    },
    {
      "name": "Actualizar producto",
      "request": {
        "method": "PUT",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n    \"price\": 18\n}"
        },
        "url": "{{baseUrl}}/api/products/{{productId}}"
      }
    },
    {
      "name": "Eliminar producto",
      "request": {
        "method": "DELETE",
        "header": [],
        "url": "{{baseUrl}}/api/products/{{productId}}"
      }
    },
    {
      "name": "Comprobar ruta inexistente (404)",
      "request": {
        "method": "GET",
        "header": [],
        "url": "{{baseUrl}}/api/ruta-inventada"
      }
    }
  ]
}
