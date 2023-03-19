import { Suspense } from 'react';
import { notFound } from 'next/navigation';

import { getMovieById, getRecommedationsForMovie } from "@/services/movies";
import { MovieDetailType } from '@/types/movies';

import MovieCard from '@/components/MovieCard';
import Casts from '@/components/Casts';
import MovieSummary from '@/components/MovieSummary';
import RecommendedMovies from '@/components/RecommendedMovies';

export default async function Page({ params }: { params: { id: number } }) {
  const { id } = params;
  const movie: MovieDetailType = await getMovieById(id);
  // console.log("movie - ", movie);

	if (!movie) return notFound();

	const recommededMoviesPromise = getRecommedationsForMovie(id);

  return (
    <div className="flex flex-col">
      <MovieCard movie={movie} />
      <div className="py-6">
        <div className="grid grid-cols-[3fr_1fr] gap-6">
          <div className="flex flex-col space-y-6">
            <Casts cast={movie.credits.cast} />
            <Suspense fallback={<div className='text-white'>Loading recommeded movies</div>}>
							{/* @ts-expect-error Server Component */}
              <RecommendedMovies promise={recommededMoviesPromise} />
            </Suspense>
          </div>
          <MovieSummary
            status={movie.status}
            language={movie.original_language}
            revenue={movie.revenue}
            budget={movie.budget}
            keywords={movie.keywords.keywords}
          />
        </div>
      </div>
    </div>
  );
}
