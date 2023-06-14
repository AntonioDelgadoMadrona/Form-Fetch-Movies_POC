// DEPENDENCIES
import { useRef, useState, useMemo, useCallback } from "react";
// SERVICES
import { searchMoviesService } from "../services/movies.js";

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);
  const previousSearch = useRef(search);

  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return;

    try {
      setLoading(true);
      setError(null);
      previousSearch.current = search;
      const newMovies = await searchMoviesService({ search });
      setMovies(newMovies);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const sortedMovies = useMemo(() => {
    return movies?.length > 0 && sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies;
  }, [sort, movies]);

  return { movies: sortedMovies, getMovies, loading, error };
}
