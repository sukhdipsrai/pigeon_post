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

app.get("/", (req, res) => res.send("Hello World"));

app.use("/api/drivers", drivers);
app.use("/api/customers", customers);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
