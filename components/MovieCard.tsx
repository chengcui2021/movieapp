import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface IMovieCard {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

const MovieCard = ({ movie }: { movie: IMovieCard }) => {
  return (
    <Link href={`/movie/${movie?.id}`}>
      <a className="flex w-full flex-col">
        <div className="relative h-[400px] w-full">
          {movie?.poster_path && (
            <Image
              src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
              alt={movie?.title}
              height={400}
              width={250}
            />
          )}
        </div>
        <div className="bg-red mt-3 flex items-center justify-between gap-4">
          <h2 className="text-lg font-medium">{movie?.title}</h2>
        </div>
      </a>
    </Link>
  );
};

export default MovieCard;
