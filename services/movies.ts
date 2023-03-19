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

export async function getMovieById(id: number) {
	const res = await fetch(
    `${TMD_API_URL}/movie/${id}?api_key=${TMDB_API_KEY}&append_to_response=credits,keywords`
  );

	if (res.ok) {
    const data = await res.json();
		if (data?.["status_code"] === 34) return null;
    else return data;
  }

	return null;
}

export function getRecommedationsForMovie(movieId: number) {
	return fetch(
    `${TMD_API_URL}/movie/${movieId}/recommendations?api_key=${TMDB_API_KEY}`
  ).then((res) => res.json());
}
