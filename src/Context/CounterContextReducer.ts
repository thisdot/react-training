export type CounterState = {
  value: number;
}

export const initialCounterState: CounterState = {
  value: 0,
}

enum ActionKind {
  Increase = 'INCREASE',
  Decrease = 'DECREASE',
}

export type CounterAction = {
  type: ActionKind,
  payload: number,
}

const increaseAction: CounterAction = {
  type: ActionKind.Increase,
  payload: 1,
}

const decreaseAction: CounterAction = {
  type: ActionKind.Decrease,
  payload: 1,
}

export function counterReducer(state: CounterState, action: CounterAction): CounterState {
  const { type, payload } = action;

  switch (type) {     
    case ActionKind.Increase:
	  return {
        ...state, 
        value: state.value + payload
      }
    case ActionKind.Decrease:
      return {
        ...state, 
        value: state.value - payload
      }
    default:
      return state;
  }
}