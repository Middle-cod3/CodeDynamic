const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/dynamic", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((error) => {
    console.log(error);
  });
