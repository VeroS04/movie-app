import { ENDPOINTS } from "../../constants";
import { apiMovies } from "../../utils/axios";


const getBanner = async () => {
  const response = await apiMovies.get(ENDPOINTS.UPCOMING_MOVIES);
  return response.data.results;
};

const getPopular = async () => {
  const response = await apiMovies.get(ENDPOINTS.POPULAR_MOVIE);
  return response.data.results;
};

const getUpcoming = async () => {
  const response = await apiMovies.get(ENDPOINTS.UPCOMING_MOVIES);
  return response.data.results;
};

const getTop = async () => {
  const response = await apiMovies.get(ENDPOINTS.TOP_MOViE);
  return response.data.results;
};

export const movieServices = { getBanner, getPopular, getTop, getUpcoming }
