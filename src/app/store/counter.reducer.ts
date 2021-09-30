import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export interface iState {
  firstNum: number;
  secondNum: number;
} 

export const initialState:iState = {
  firstNum: -5,
  secondNum: 10,
};

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      firstNum: state.firstNum + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      secondNum: state.secondNum - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      firstNum: -5,
      secondNum: 10,
    };
  })
);

export function counterReducer(state: iState | undefined, action: Action) {
  return _counterReducer(state, action);
}
