import { endpoints } from "../../constants";
import { apiMovies } from "../../utils/axios";


const getUpcoming = async () => {
  const response = await apiMovies.get(endpoints.upcoming_movie);
  return response.data.results;
};

const searchMovie = async ( title: string | null ) => {
  const response = await apiMovies.get(endpoints.search_movie,
    {
      params: {
        query:title,
      },
    }
    )
  return response.data ;
};

export const movieServices = { getUpcoming, searchMovie }