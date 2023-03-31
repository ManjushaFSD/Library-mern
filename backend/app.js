const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const { bookModel } = require("./models/Book");

const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//mongoDb connection string
mongoose.connect(
  "mongodb+srv://manjusharn93:userone@cluster1.ydecups.mongodb.net/LibraryDB?retryWrites=true&w=majority",
  { useNewUrlParser: true }
).then(()=>{
    console.log('***MongoDB connection established***')
}).catch(()=>{
    console.log(error)
})

app.post("/bookentry", async (req, res) => {
  let data = new bookModel(req.body);
  let result = await data.save();
  res.json({"status":"success","data":result});
});

app.post("/viewallbook", async (req, res) => {
  let data = await bookModel.find();
  res.json(data);
});

app.post("/searchbook", async(req,res)=>{
  let data = await bookModel.find(req.body)
  res.json(data)
})
app.listen(3001, () => {
  console.log("-----listening on port 3001------");
});
