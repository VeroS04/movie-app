import { endpoints } from "../../constants";
import { apiMovies } from "../../util/axios";


const getBanner = async () => {
  const response = await apiMovies.get(endpoints.upcoming_movie);
  return response.data.results;
};

export { getBanner };