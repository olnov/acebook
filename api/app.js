const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const likesRouter = require("./routes/likes")
const usersRouter = require("./routes/users");
const postsRouter = require("./routes/posts");
const commentsRouter = require("./routes/comments");
const authenticationRouter = require("./routes/authentication");
const profileRouter = require("./routes/profile-image");
const tokenChecker = require("./middleware/tokenChecker");

const app = express();

// Allow requests from any client
// docs: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
// docs: https://expressjs.com/en/resources/middleware/cors.html
app.use(cors());

// Parse JSON request bodies, made available on `req.body`
app.use(bodyParser.json());

// API Routes
app.use("/users", usersRouter);
app.use("/posts", tokenChecker, postsRouter);
app.use("/tokens", authenticationRouter);
app.use("/comments", tokenChecker, commentsRouter)
app.use("/profile-images", profileRouter);
app.use("/likes", tokenChecker, likesRouter);

// 404 Handler
app.use((_req, res) => {
  res.status(404).json({ err: "Error 404: Not Found - written by Marya" });
});

// Error handler
app.use((err, _req, res, _next) => {
  console.error(err);
  if (process.env.NODE_ENV === "development") {
    res.status(500).send(err.message);
  } else {
    res.status(500).json({ err: "Something went wrong" });
  }
});


/** FUTURE STUFF TO POTENTIALLY IMPLEMENT 

// configurations and dependencies - need to install 

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// dotenv.config();
// app.use(express.json())
// app.use(helmet())
// app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
// app.use(morgan("common") )
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
// app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// file storage - need to install depenencies 

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//       cb(null, "public/assets");
//   },
//   filename: function (req, file, cb) {
//       cb(null, file.originalname);
//   } 
// })
*/

module.exports = app;
