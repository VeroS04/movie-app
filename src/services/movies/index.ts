import { endpoints } from "../../constants";
import { apiMovies } from "../../utils/axios";

const getPopular = async () => {
  const response = await apiMovies.get(endpoints.POPULAR_MOVIE);
  return response.data.results;
};

const getUpcoming = async () => {
  const response = await apiMovies.get(endpoints.UPCOMING_MOVIE);
  return response.data.results;
};

const getTop = async () => {
  const response = await apiMovies.get(endpoints.TOP_MOVIE);
  return response.data.results;
};

const getDetails = async (id: string) => {
  const response = await apiMovies.get(`movie/${id}`);
  return response.data;
};

export const movieServices = { getPopular, getTop, getUpcoming, getDetails }
