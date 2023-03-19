import { getAPIPath, getTMDBAPIKey } from "@/utils";

const TMDB_API_KEY = getTMDBAPIKey();
const TMD_API_URL = getAPIPath();

export function getAllMovies(page = 1, searchTerm = '') {
	const routePath = searchTerm ? 'search' : 'discover';
  return fetch(
    `${TMD_API_URL}/${routePath}/movie?api_key=${TMDB_API_KEY}&page=${page}&query=${encodeURIComponent(
      searchTerm
    )}`,
  ).then((res) => res.json());
}
