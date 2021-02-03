const express = require("express");
const app = express();
mongoose = require('mongoose');
const drivers = require('./routes/api/drivers')
const customers = require('./routes/api/customers')


const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

// app.get("/", (req, res) => res.send("Hello World"));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

const users = require("./routes/api/users");
const tasks = require("./routes/api/tasks");

app.use("/api/users", users);
app.use("/api/tasks", tasks);




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