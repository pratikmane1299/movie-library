export const dynamic = 'force-dynamic';

import { getAllMoviesOnServer } from "@/services/movies";
import { MoviesResType } from "@/types/movies";

import MoviesGrid from "@/components/MoviesGrid";

export default async function Home() {
  const { results, total_results }: MoviesResType =
    await getAllMoviesOnServer();

  return (
    <section>
      <MoviesGrid
        totalPages={15}
        totalMovies={total_results}
        movies={results}
      />
    </section>
  );
}
