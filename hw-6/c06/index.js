const express = require("express");
const { expressjwt: jwt } = require("express-jwt");

const connectDB = require("./pkg/db/config");
connectDB();
const { getSection } = require("./pkg/config");
const { login, register } = require("./handlers/auth");
const {
  getAllMovies,
  createNewMovie,
  updateCurrentMovie,
  removeCurrentMovie,
  getAllMovies,
} = require("./handlers/movies");

const app = express();
app.use(express.json());

// /api znaci deka ke se proveruva jwt token na sekoja ruta koja pocnuva so /api
app.use(
  "/api",
  jwt({
    secret: getSection("development").jwt_secret,
    algorithms: ["HS256"],
  })
    // ako koristime /api pred sekoja ruta vo ovoj slucaj .unless nema logika bidejki pocnuva so
    // /auth/...
    .unless({
      path: ["/auth/login", "/auth/register"],
    })
);

app.get("/", (req, res) => res.send("Hello World!"));
app.post("/auth/login", login);
app.post("/auth/register", register);

//public data - site knigi koi se objaveni
app.get("/movies", getAllMovies);
// private data - bidejki se zemaat knigite na avtorot
app.get("/api/movies/",  getAllMovies);
app.post("/api/movies", createNewMovie);
app.put("/api/movies/:id", updateCurrentMovie);
app.delete("/api/movies/:id", removeCurrentMovie);

app.listen(3000, () => console.log("Server started at port 3000!"));
