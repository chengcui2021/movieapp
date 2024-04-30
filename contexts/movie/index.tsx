/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, ReactNode, useContext, useState } from 'react';

type movieContextType = {
  upcoming: { id: string }[];
  favourites: { id: string }[];
  setUpcomingMovies: (item: []) => void;
  setFavouritesMovies: (item: []) => void;
};

const movieContextDefaultValues: movieContextType = {
  upcoming: [],
  favourites: [],
  setUpcomingMovies: () => {},
  setFavouritesMovies: () => {},
};

export const MovieContext = createContext<movieContextType>(
  movieContextDefaultValues
);

export function useAuth() {
  return useContext(MovieContext);
}

type Props = {
  children: ReactNode;
};

export default function MovieProvider({ children }: Props) {
  const [upcoming, setUpcoming] = useState([]);
  const [favourites, setfavourites] = useState([]);

  const setUpcomingMovies = (item: []) => {
    setUpcoming(item);
  };

  const setFavouritesMovies = (item: []) => {
    setfavourites(item);
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    favourites,
    upcoming,
    setUpcomingMovies,
    setFavouritesMovies,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
}
