import { createReducer, on } from '@ngrx/store';
import { likeQuestion, dislikeQuestion, addQuestion } from './actions';

export const initialState = 0;

// tslint:disable-next-line:variable-name
const _likesReducer = createReducer(initialState,
  on(likeQuestion, state => state + 1),
  on(dislikeQuestion, state => state - 1),
);

export function likesReducer(state, action) {
  return _likesReducer(state, action);
}
