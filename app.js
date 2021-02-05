const express = require("express");
const app = express();
const cors = require('cors');
// app.use(cors());
mongoose = require('mongoose');
const drivers = require('./routes/api/drivers')
const customers = require('./routes/api/customers')


const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

  // Conflicting  route with production, put in else statement
// app.get("/", (req, res) => res.send("Hello World"));
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  // app.use(cors({
  //   origin: 'http://localhost:3000'
  // }));

  // app.use(function(req, res, next) {
  //   res.setHeader(
  //     "Access-Control-Allow-Headers",
  //     "X-Requested-With,content-type"
  //   );
  //   res.setHeader("Access-Control-Allow-Origin", "*");
  //   res.setHeader(
  //     "Access-Control-Allow-Methods",
  //     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  //   );
  //   res.setHeader("Access-Control-Allow-Credentials", true);
  //   next();
  // });

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

const users = require("./routes/api/users");
const tasks = require("./routes/api/tasks");
const gapi = require("./routes/api/gapi");
const fileRoutes = require('./routes/file-upload');

app.use("/api/users", users);
app.use("/api/tasks", tasks);
app.use("/api/gapi", gapi)
app.use("/api/", fileRoutes);



const passport = require('passport');
app.use(passport.initialize());
require('./config/passport')(passport);
const path = require('path');
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}