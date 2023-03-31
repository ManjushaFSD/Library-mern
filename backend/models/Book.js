const mongoose = require('mongoose')


let BookSchema = mongoose.Schema({

"bookTitle":String,
"bookAuthor":String,
"bookPrice":Number,
"bookCoverImage":String,

})

var bookModel = mongoose.model("books",BookSchema);
module.exports = {bookModel}