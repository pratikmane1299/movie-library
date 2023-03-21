import Image from "next/image";
import Link from "next/link";

import { RecommedationsResType } from "@/types/movies";
import { getRecommendedMovieImagePath } from "@/utils";

type RecommendedMoviesPropsType = {
  promise: Promise<RecommedationsResType>;
};

async function RecommendedMovies({ promise }: RecommendedMoviesPropsType) {
  const { results } = await promise;

  return (
    <div className="w-full flex flex-col">
      <h6 className="mb-4 text-base font-semibold">Recommendations</h6>
      <div className="w-full flex gap-3 overflow-x-auto">
        {results.length > 0 &&
          results.slice(0, 10).map((recommedation) => (
            <div key={recommedation.id} className="flex-[0_0_17%]">
              <Link href={`/${recommedation.id}`}>
                <Image
                  src={getRecommendedMovieImagePath(recommedation.poster_path)}
                  alt={recommedation.title}
                  width={160}
                  height={90}
                  className="w-full h-[90px] rounded"
                />
                <span className="text-sm font-medium text-white">
                  {recommedation.title}
                </span>
              </Link>
            </div>
          ))}

        {results?.length === 0 && (
          <span>No recommedations found for this movie...</span>
        )}
      </div>
    </div>
  );
}

export default RecommendedMovies;
