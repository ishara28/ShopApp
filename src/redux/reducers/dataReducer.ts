import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  CLEAR_DATA,
} from '../actions/actionTypes';

export interface DataState {
  data: any[];
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  data: [],
  loading: false,
  error: null,
};

export function dataReducer(state = initialState, action: any): DataState {
  switch (action.type) {
    case FETCH_DATA:
      return {...state, loading: true, error: null};
    case CLEAR_DATA:
      return {...state, data: [], loading: true, error: null};
    case FETCH_DATA_SUCCESS:
      return {...state, data: action.payload, loading: false};
    case FETCH_DATA_FAILURE:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
}
