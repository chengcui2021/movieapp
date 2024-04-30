import { useEffect } from 'react';
import { ReducerType } from 'global-states';
import { getUpComingMoview, searchMovie } from 'global-states/actions';
import UpcomingMovies from '../../components/UpcomingMovies';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';

interface upcomingMovies {
  list: {
    results: [];
  };
  listIsSuccess: boolean;
}

function Index() {
  // eslint-disable-next-line react/destructuring-assignment
  const dispatch = useDispatch();
  const upcomingMovies: upcomingMovies = useSelector(
    (state: ReducerType) => state.list
  );
  const _handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      dispatch(searchMovie(e.target.value));
    }
  };

  useEffect(() => {
    dispatch(getUpComingMoview(1));
  }, []);
  return (
    <div className="mb-6 flex flex-col">
      <div className="mt-4 flex items-center justify-between">
        <h1 className="text-2xl font-medium">Upcoming Movies</h1>
        <Link href="/favourites">
          <a
            rel=""
            className="text-md bg-slate-800 py-2 px-5 font-normal text-white"
          >
            Favourites
          </a>
        </Link>
      </div>
      <input
        type="search"
        id="default-search"
        className="ps-10 my-10 block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder="Search Movies..."
        onKeyDown={_handleKeyDown}
        required
      />

      {upcomingMovies.listIsSuccess ? (
        upcomingMovies.list?.results.length !== 0 ? (
          <UpcomingMovies upcomingMovies={upcomingMovies} />
        ) : (
          <div
            className="mb-4 rounded-lg bg-blue-50 p-4 text-sm text-blue-800 dark:bg-gray-800 dark:text-blue-400"
            role="alert"
          >
            <span className="font-medium">No data!</span>
          </div>
        )
      ) : (
        <div
          className="mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-800 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <span className="font-medium">page error</span>
        </div>
      )}
    </div>
  );
}

export default Index;
