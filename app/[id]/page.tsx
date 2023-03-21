import { Suspense } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getMovieById, getRecommedationsForMovie } from "@/services/movies";
import { MovieDetailType } from '@/types/movies';
import { getMoviePosterPath } from '@/utils';

import MovieCard from '@/components/MovieCard';
import Casts from '@/components/Casts';
import MovieSummary from '@/components/MovieSummary';
import RecommendedMovies from '@/components/RecommendedMovies';

export async function generateMetadata({ params }: { params: { id: number } }): Promise<Metadata | undefined> {
	const { id } = params;
  const movie: MovieDetailType = await getMovieById(id);

	if (!movie) {
		return {
			title: '404 | Movie Library',
			description: 'A movie you are looking for does\'nt exists',
		}
	}

	const { title, overview, poster_path } = movie; 

	const moviePosterImage = getMoviePosterPath(poster_path);

	return {
    title: title,
    description: overview,
    openGraph: {
      title: title,
      description: overview,
      type: "website",
      images: [
        {
          url: moviePosterImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: overview,
      images: [moviePosterImage],
    },
  };
}

export default async function Page({ params }: { params: { id: number } }) {
  const { id } = params;
  const movie: MovieDetailType = await getMovieById(id);

	if (!movie) return notFound();

	const recommededMoviesPromise = getRecommedationsForMovie(id);

  return (
    <div className="w-full flex flex-col">
      <MovieCard movie={movie} />
      <div className="w-full py-6">
        <div className="w-full flex flex-col-reverse space-y-2 lg:grid lg:grid-cols-[3fr_1fr] lg:gap-6">
          <div className="w-full flex flex-col space-y-6">
            <Casts cast={movie.credits.cast} />
            <Suspense
              fallback={
                <div className="text-white">Loading recommeded movies</div>
              }
            >
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
