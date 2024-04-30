import { MovieContext } from '../../contexts/movie';
import { useContext, useState, useEffect } from 'react';
import Image from 'next/image';
import dayjs from 'dayjs';

import { useRouter } from 'next/router';

interface thismovie {
  id: string;
  title: string;
  vote_average: number;
  poster_path: string;
  genres: string;
}

const page = () => {
  const router = useRouter();
  const [btnText, setBtnText] = useState('');

  let { upcoming, favourites, setFavouritesMovies } = useContext(MovieContext);

  const { id } = router.query;

  let thismovie: thismovie;

  upcoming?.list?.results?.forEach(function (movie: thismovie) {
    if (movie.id.toString() === id) {
      thismovie = movie;
    }
  });

  useEffect(() => {
    const i = favourites.findIndex((e) => e.id === thismovie.id);
    if (favourites.length === 0 || i === -1) {
      setBtnText('Add to my favourates');
    } else {
      setBtnText('Remove from my favourates');
    }
  }, []);

  const addFavourite = () => {
    if (!favourites.includes(thismovie)) {
      favourites.push(thismovie);
      setFavouritesMovies(favourites);
      setBtnText('Remove from my favourates');
    } else {
      const newFavourites = favourites.filter(function (el) {
        return el.id !== thismovie.id;
      });
      setFavouritesMovies(newFavourites);
      setBtnText('Add to my favourates');
    }
  };
  return (
    <div className="mx-auto w-[1000px] max-w-full px-4">
      <div className="mt-6 flex flex-col">
        <div className="flex gap-7">
          <div className="relative flex">
            <div className="relative h-[400px] w-[270px]">
              <Image
                src={
                  thismovie?.poster_path
                    ? `https://image.tmdb.org/t/p/original${thismovie?.poster_path}`
                    : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`
                }
                alt={thismovie?.title}
                height={500}
                width={350}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-medium">{thismovie?.title}</h2>
              <span
                className={`flex flex-col rounded-md p-2 text-white ${
                  thismovie?.vote_average < 5
                    ? `bg-red-700`
                    : thismovie?.vote_average == 5
                    ? `bg-orange-700`
                    : `bg-green-700`
                }`}
              >
                {thismovie?.vote_average}
              </span>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <h5 className="text-md font-medium">
                {dayjs(thismovie?.release_date).format('MMM DD YYYY')}
              </h5>
              <h5 className="text-md font-medium">
                {thismovie?.genres?.map((genre: any) => genre?.name).join(', ')}
              </h5>
            </div>
            <div className="mt-5 flex flex-col">
              <p className="text-md font-normal">{thismovie?.overview}</p>
            </div>
            <button
              onClick={addFavourite}
              className="mt-3 rounded bg-purple-900 py-2 px-4 font-bold text-white hover:bg-blue-400"
            >
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
