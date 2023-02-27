import { endpoints } from "../../constants";
import { apiMovies } from "../../utils/axios";


const getUpcoming = async () => {
  const response = await apiMovies.get(endpoints.upcoming_movie);
  return response.data.results;
};


export const movieServices = { getUpcoming }