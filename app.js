const express = require("express");
const path = require("path"); //para que me interprete bien los paths sin importar el sistema operativo

const app = express();
app.use(express.static("public")); // con esto le estoy diciendo que envie todo lo que haya en la carpeta public, por eso en el html no le tengo que indicar a la ruta de los estilos la carpeta. Todas las peticiones entran aqui primero, 

app.get("/", (request, response, next) => {
  //con get traigo a la home del servidor ("/")
  response.sendFile(path.join(__dirname, "views", "home.html")); // le pido que la respuesta sea imprimir en el servidor el archivo home.html en de la carpeta views
});

app.get("/about", (request, response, next) => {
  response.sendFile(path.join(__dirname, "views", "about.html"));
});

app.get("/works", (request, response, next) => {
  response.sendFile(path.join(__dirname, "views", "works.html"));
});

const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
}
);
