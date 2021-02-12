const expres = require (express);
const app = express (); 

app.use (express.static ("./public"));
app.listen (3000, () => console.log ("Servidor corrriendo en el Puerto 3000"));

//Template Engine
app.set ("view engine", "ejs");

//Routers
const mainRoutes = require ("./routes/mainRoutes");
const userRoutes = require ("./routes/mainRoutes");

app.use ("/", mainRoutes);
app.use ("user", userRoutes);