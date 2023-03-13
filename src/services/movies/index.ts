import { endpoints } from "../../constants";
import { apiMovies } from "../../utils/axios";


const getBanner = async () => {
  const response = await apiMovies.get(endpoints.upcoming_movie);
  return response.data.results;
};

const getPopular = async () => {
  const response = await apiMovies.get(endpoints.popular_movie);
  return response.data.results;
};

const getTop = async () => {
  const response = await apiMovies.get(endpoints.top_movie);
  return response.data.results;
};

export const movieServices = { getBanner, getPopular, getTop }