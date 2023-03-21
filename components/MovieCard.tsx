import { Playfair_Display } from 'next/font/google';

import { MovieDetailGenreType, MovieDetailType } from "@/types/movies";
import { getMovieBackdropPath, getMoviePosterPath, getMovieRatingInPercentage } from "@/utils";

import Image from "next/image";
import MovieRating from "./MovieRating";

const playfair = Playfair_Display({
	subsets: ['latin'],
	weight: '400',
})

type MovieCardPropsType = {
	movie: MovieDetailType;
}

function MovieCard({ movie }: MovieCardPropsType) {
	const backdropImage = getMovieBackdropPath(movie.backdrop_path);

	function renderMovieGenres() {
		return movie.genres.reduce((prev: string, genre: MovieDetailGenreType) => {
			return (prev += genre?.name + ", ");
		}, '');
	}

  return (
    <div className="relative w-full h-[400px] flex flex-col justify-center">
      <div className="absolute w-full h-full z-0 opacity-50">
        <Image
          src={backdropImage}
          alt={movie.title}
          width={1900}
          height={800}
          className="h-full w-full rounded"
        />
      </div>
      <div className="p-6 grid grid-cols-[1fr_3fr] gap-6 z-[1]">
        <div>
          <Image
            src={getMoviePosterPath(movie.poster_path)}
            alt={movie.title}
            width={500}
            height={300}
            className="w-full h-[300px] rounded-lg"
          />
        </div>
        <div className="w-full flex flex-col justify-center">
          <h1 className={`mb-2 text-3xl font-semibold text-white ${playfair.className}`}>
            {movie.title}
          </h1>
          <div className="mb-1 flex items-center space-x-2 text-sm font-normal">
            <span>{movie.release_date}</span>
            {movie.genres.length > 0 && <span>{renderMovieGenres()}</span>}
          </div>
					<div className="mb-4 flex items-center space-x-2 ">
						<MovieRating
              rating={getMovieRatingInPercentage(movie.vote_average)}
            />
						<span className="text-base font-semibold tracking-wide">User Reviews</span>
					</div>
          {movie?.tagline && (
            <span className="block font-light text-base italic text-gray-400">
              {movie.tagline}
            </span>
          )}
          <div className="mt-4 flex flex-col space-y-1">
            <span className="text-white font-medium text-xl">Overview</span>
            <p className={`text-sm font-light leading-5 tracking-wide ${playfair.className}`}>{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
