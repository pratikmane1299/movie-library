const TMDB_IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/';
const TMDB_POSTER_SIZE = "w500";
const TMD_BACKDROP_IMAGE_SIZE = "w1920_and_h800_multi_faces";
const TMDB_PROFILE_IMAGE_SIZE = 'w185';
const TMD_RECOMMENDED_MOVIE_IMAGE_SIZE = 'w185';

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

export function getMovieBackdropPath(path: string) {
	return `${getTMDBImageBasePath()}${TMD_BACKDROP_IMAGE_SIZE}${path}`;
}

export function getMovieRatingInPercentage(average: number) {
	return Math.ceil(average * 10);
}

export function getProfileImagePath(path: string) {
	return `${getTMDBImageBasePath()}${TMDB_PROFILE_IMAGE_SIZE}${path}`;
}

export function getRecommendedMovieImagePath(path: string) {
	return `${getTMDBImageBasePath()}${TMD_RECOMMENDED_MOVIE_IMAGE_SIZE}${path}`;
}