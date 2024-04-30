import {
  UPCOMING_MOVIES_SUCCESS,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILER,
  UPCOMING_MOVIES_FAILER,
} from 'constants/actionTypes';

import { AnyAction } from 'redux';
import { _countryReducerState as ReducerState } from 'types';

const initialState: ReducerState = {
  list: [],
  listIsLoading: false,
  listIsSuccess: false,
  listIsError: false,
  listMessage: '',
};

export default function actionReducer(state = initialState, action: AnyAction) {
  switch (action?.type) {
    case SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        list: action.payload,
        listIsLoading: false,
        listIsSuccess: true,
        listIsError: false,
        listMessage: 'Success',
      };
    case SEARCH_MOVIES_FAILER:
      return {
        ...state,
        listIsLoading: false,
        listIsSuccess: false,
        listIsError: true,
        listMessage: 'Fail',
      };
    case UPCOMING_MOVIES_FAILER:
      return {
        ...state,
        listIsLoading: false,
        listIsSuccess: false,
        listIsError: true,
        listMessage: 'Fail',
      };
    case UPCOMING_MOVIES_SUCCESS:
      return {
        ...state,
        list: action.payload,
        listIsLoading: false,
        listIsSuccess: true,
        listIsError: false,
        listMessage: 'Success',
      };
    default:
      return state;
  }
}
