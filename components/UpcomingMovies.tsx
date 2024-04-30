import React, { useContext } from 'react';
import MovieCard, { IMovieCard } from './MovieCard';
import { MovieContext } from '../contexts/movie';

const UpcomingMovies = ({ upcomingMovies }: any) => {
  let { setUpcomingMovies } = useContext(MovieContext);

  setUpcomingMovies(upcomingMovies);

  return (
    <div className="my-20 mt-4 grid grid-cols-4 gap-4">
      {upcomingMovies?.list.results?.slice(0, 12).map((movie: IMovieCard) => (
        <MovieCard key={movie?.id} movie={movie} />
      ))}
    </div>
  );
};

export default UpcomingMovies;
