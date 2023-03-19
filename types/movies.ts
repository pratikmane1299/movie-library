export type MovieListItemType = {
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MoviesResType = {
  page: number;
  results: MovieListItemType[];
  total_results: number;
};

export type MovieDetailGenreType = {
	id: number;
	name: string;
}

export type MovieDetailCastType = {
	id: number;
	original_name: string;
	profile_path: string;
	cast_id: number;
	character: string;
	credit_id: string;
}

export type MovieDetailKeywordType = {
	id: number;
	name: string;
}

export type MovieDetailType = {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: MovieDetailGenreType[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
	revenue: number;
  credits: {
    cast: MovieDetailCastType[];
  };
  keywords: {
    keywords: MovieDetailKeywordType[];
  };
};

export type RecommedationType = {
  id: number;
  title: string;
  poster_path: string;
};

export type RecommedationsResType = {
	page: number;
	total_pages: number;
	total_results: number;
	results: RecommedationType[];
}