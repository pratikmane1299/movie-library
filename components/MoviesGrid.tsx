"use client";
import { useEffect, useRef, useState } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";

import { getMoviePosterPath } from "@/utils";
import { getAllMovies } from "@/services/movies";
import { useDebounce } from "@/hooks/useDebounce";

import InfiniteList from "./InfiniteList";
import SearchBar from "./SearchBar";
import { MovieListItemType } from "@/types/movies";

const inter = Inter({ subsets: ["latin"] });

type MoviesGridPropsType = {
  totalPages: number;
  totalMovies: number;
  movies: MovieListItemType[];
};

function MoviesGrid({ totalPages, totalMovies, movies }: MoviesGridPropsType) {
  const [fetchedMovies, setMovies] = useState<MovieListItemType[]>(movies);
  const [page, setPage] = useState(1);
  const [value, setValue] = useState("");
  const debouncedVal = useDebounce(value, 250);
  const mount = useRef(0);

  useEffect(() => {
    mount.current += 1;
  });

  useEffect(() => {
    if (mount.current >= 1) {
      searchMovies();
    }
  }, [debouncedVal]);

  async function fetchMoreMovies() {
    const { results } = await getAllMovies(page + 1, debouncedVal);

    setPage(page + 1);
    setMovies([...fetchedMovies, ...results]);
  }

	async function searchMovies() {
		const {results} = await getAllMovies(1, debouncedVal);
		setPage(1);
		setMovies([...results]);
	}

  return (
    <InfiniteList
      page={page}
      total={totalMovies}
      totalPages={totalPages}
      onFetchNextPage={() => {
        fetchMoreMovies();
      }}
    >
      <div className="pt-6 flex flex-col">
        <SearchBar
          id="movies-search-bar"
          name="movies-search-bar"
          value={value}
          placeholder="Search for your favourite movies..."
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="my-6 grid grid-cols-4 gap-6">
          {fetchedMovies?.map((movie) => (
            <div
              key={movie.id}
              className="w-full flex flex-col hover:scale-110"
            >
              <Image
                src={`${getMoviePosterPath(movie?.poster_path)}`}
                alt={movie?.title}
                width={500}
                height={300}
                className="w-full h-[200px] md:h-[300px] object-cover"
              />
              <div className="mt-2">
                <h6
                  className={`${inter.className} font-medium text-sm md:text-base`}
                >
                  {movie.title}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </InfiniteList>
  );
}

export default MoviesGrid;
