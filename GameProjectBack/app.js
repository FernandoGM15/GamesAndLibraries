const express = require('express');
const morgan = require("morgan");
const path = require("path");
const gameRoutes = require("./routes/gameRoutes");
const app = express();


//SETEO DE PUERTO Y HOST
app.set("port", process.env.PORT || 3000);
app.set("host", process.env.HOST || "127.0.0.1");

//MIDDLEWARE
app.use(morgan("dev"));
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
})
//RUTAS
app.use("/api/games", gameRoutes);

//STATIC FILES
app.use(express.static(path.join(__dirname, "public")))

//SETEO DE SERVER
app.listen(app.get("port"), app.get("host"), () => {
  console.log(`App listening on http://${app.get("host")}:${app.get("port")}`);
});