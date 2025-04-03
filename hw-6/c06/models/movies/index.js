const mongoose = require("mongoose");

// Cekor 1: Napravete ja semata za ovie polinja
// title
// year
// language
// genre
// director
// case
// rating
// duration


const movieSchema = mongoose.Schema(
  {
    // ako sakame da prebaruvame po kod mora da bide unikaten
   // bookCode: {
   //   type: String,
   //   unique: true,
   // },
    title: String,
    year: Number,
    language: String,
    director: String,
    genre: String,
    case: String,
    rating: Number,
    duration: Number,
    // author_id e relevantno ime ovde, se raboti za account
    author_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Account", // pratete ja referencata i ke znaete za koj model stanuva zbor
      immutable: true,
    },

  },
  { timestamps: true }
);

//Cekor 2: Napravete CRUD za ovoj model/schema

const MovieModel = mongoose.model("Movie", bookSchema, "Movies");

// get
const getMovies = async () => {
  return await MovieModel.find();
};




// create
const createMovie = async (data) => {
  const newMovie = new MovieModel(data);
  return await newMovie.save();
};

// update
const updateMovie = async (id, data) => {
  return await MovieModel.updateOne({ _id: id }, data);
};

// remove
const removeMovie = async (id) => {
  return await MovieModel.deleteOne({ _id: id });
};

module.exports = {
  getMovies,
  createMovie,
  updateMovie,
  removeMovie,
  
};


