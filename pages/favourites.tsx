import MovieCard, { IMovieCard } from '@/components/MovieCard';
import { useEffect, useContext } from 'react';
import { MovieContext } from '../contexts/movie';

const FavouritesPage = () => {
  let { favourites } = useContext(MovieContext);
  useEffect(() => {}, []);

  return (
    <div className="mx-auto w-[1300px] max-w-full px-4">
      <div className="flex flex-col">
        <h1 className="text-2xl font-medium">Favourites Movies</h1>
      </div>
      {favourites.length !== 0 ? (
        <div className="mt-4 grid grid-cols-4 gap-4">
          {favourites?.map((movie: IMovieCard) => (
            <MovieCard key={movie?.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div
          className="my-20 mb-4 rounded-lg bg-blue-50 p-4 text-sm text-blue-800 dark:bg-gray-800 dark:text-blue-400"
          role="alert"
        >
          <span className="font-medium">No data!</span>
        </div>
      )}
    </div>
  );
};

export default FavouritesPage;
