const TMDB_IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/';
const TMDB_POSTER_SIZE = "w500";

export const isServer = typeof window ? false : true;

export function getAPIPath() {
	return isServer
    ? process.env.TMD_API_BASE_PATH
    : process.env.NEXT_PUBLIC_TMD_API_BASE_PATH;
}

export function getTMDBAPIKey() {
	return isServer
    ? process.env.TMD_API_BASE_PATH
    : process.env.NEXT_PUBLIC_TMDB_API_KEY;
}

export function getTMDBImageBasePath() {
  return TMDB_IMAGE_BASE_PATH;
}

export function getPosterBasePath() {
  return `${getTMDBImageBasePath()}${TMDB_POSTER_SIZE}`;
}

export function getMoviePosterPath(path: string) {
	return `${getPosterBasePath()}${path}`;
}
