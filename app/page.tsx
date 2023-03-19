import { getAllMovies } from "@/services/movies";
import { MoviesResType } from "@/types/movies";

import MoviesGrid from "@/components/MoviesGrid";

export default async function Home() {
  const { results, total_results }: MoviesResType = await getAllMovies();

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
