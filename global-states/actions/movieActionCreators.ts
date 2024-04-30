import { LIST } from 'constants/actionTypes';

import { CountryType } from 'types';
import { apiRequests } from '../../utils';
import {
  UPCOMING_MOVIES,
  UPCOMING_MOVIES_SUCCESS,
  UPCOMING_MOVIES_FAILER,
  SEARCH_MOVIES,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILER,
} from '../../constants/actionTypes';

export const searchMovie = (query: string) => async (dispatch: any) => {
  dispatch({ type: SEARCH_MOVIES });
  try {
    const response = await apiRequests({
      method: 'get',
      url: `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=5f903ecb6b073c7dd7579bc929d43d83&language=en-US`,
    });
    dispatch({ type: SEARCH_MOVIES_SUCCESS, payload: response });
  } catch (error: any) {
    dispatch({
      type: SEARCH_MOVIES_FAILER,
      payload: { error: error?.data?.message || error.statusText },
    });
  }
};
export const getUpComingMoview = (page: number) => async (dispatch: any) => {
  dispatch({ type: UPCOMING_MOVIES });
  try {
    const response = await apiRequests({
      method: 'get',
      url: `https://api.themoviedb.org/3/movie/upcoming?api_key=5f903ecb6b073c7dd7579bc929d43d83&language=en-US&page=${page}`,
    });
    dispatch({ type: UPCOMING_MOVIES_SUCCESS, payload: response });
  } catch (error: any) {
    dispatch({
      type: UPCOMING_MOVIES_FAILER,
      payload: { error: error?.data?.message || error.statusText },
    });
  }
};
