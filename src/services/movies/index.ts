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

const getDetails = async (id: string) => {
  const response = await apiMovies.get(`movie/${id}`);
  return response.data;
};

export const movieServices = { getBanner, getPopular, getDetails }
