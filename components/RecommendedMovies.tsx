import { RecommedationsResType } from "@/types/movies";
import { getMoviePosterPath, getRecommendedMovieImagePath } from "@/utils";
import Image from "next/image";

type RecommendedMoviesPropsType = {
  // movieId: number;
  promise: Promise<RecommedationsResType>;
};

async function RecommendedMovies({ promise }: RecommendedMoviesPropsType) {
	const {results} = await promise;
	
  return (
    <div className="w-full flex flex-col">
      <h6 className="mb-4 text-base font-semibold">Recommendations</h6>
      <div className="w-full flex gap-3 overflow-x-auto">
        {results.length > 0 &&
          results.slice(0, 10).map((recommedation) => (
            <div
              key={recommedation.id}
              className="w-[170px]"
            >
              <Image
                src={getRecommendedMovieImagePath(recommedation.poster_path)}
                alt={recommedation.title}
								width={160}
								height={100}
								className="w-full h-[100px] rounded"
              />
              <span className="text-sm font-medium text-white">
                {recommedation.title}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default RecommendedMovies;
