const {
    getMovies,
    createMovie,
    updateMovie,
    removeMovie,
    getAllMovies,
  } = require("../models/movies");
  
  
  
  const getMovies = async (req, res) => {
    try {
      const movies = await getMovies();
      return res.status(200).send(movies);
    } catch (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error!");
    }
  };
  
  const getAllMovies = async (req, res) => {
    try {
      const movies = await getAllMovies(req.auth.id);
      return res.status(200).send(movies);
    } catch (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error!");
    }
  };
  
  
  const createNewMovie = async (req, res) => {
    try {
      const data = {
        ...req.body,
        author_id: req.auth.id,
      };
      await createMovie(data);
      return res.status(200).send("Movie created successfully!");
    } catch (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error!");
    }
  };
  
  
  const updateCurrentMovie = async (req, res) => {
    try {
      await updateMovie(req.params.id, req.body);
      return res.status(200).send("Movie updated successfully!");
    } catch (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error!");
    }
  };
  
  
  const removeCurrentMovie = async (req, res) => {
    try {
      await removeMovie(req.params.id);
      return res.status(200).send("Movie deleted successfully!");
    } catch (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error!");
    }
  };
  
  module.exports = {
    getMovies,
    createNewMovie,
    updateCurrentMovie,
    removeCurrentMovie,
    getAllMovies,
  };
  