// context using useReducer

import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from 'react';
import { CounterAction, counterReducer, CounterState, initialCounterState } from './CounterContextReducer';

interface Context {
  state: CounterState;
  dispatch: Dispatch<CounterAction>;
}

const CounterContext: React.Context<Context | undefined> = createContext<Context | undefined>(undefined);

type Props = {
  children: ReactNode;
};

const CounterProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(counterReducer, initialCounterState);
  const value = { state, dispatch };

  return (
    <CounterContext.Provider value={value}>
      {children}
    </CounterContext.Provider>
  );
};

const useCounter = () => {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error(
      '[CounterProvider] useCounter must be used within a CounterProvider'
    );
  }
  return context;
};

export { CounterProvider, useCounter };
