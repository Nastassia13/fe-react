const express = require("express");
const mongoose = require("mongoose");
const Router = require("./Routes")

const app = express();

app.use(express.json());

mongoose.connect('mongodb://nastassia:11L6pLDkksywWAsI@ac-xhy17ba-shard-00-00.qpoqeem.mongodb.net:27017,ac-xhy17ba-shard-00-01.qpoqeem.mongodb.net:27017,ac-xhy17ba-shard-00-02.qpoqeem.mongodb.net:27017/dojo_blog?ssl=true&replicaSet=atlas-443q6s-shard-0&authSource=admin&retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

app.listen(8000, () => {
  console.log("Server is running at port 8000");
});
