import axios from "axios";

export const getMovieList = async () => {
  const movies = await axios.get(
    `${process.env.REACT_APP_BASEURL}/movie/popular?api_key=${process.env.REACT_APP_APIKEY}`
  )
  console.log({ movieList: movies })
}