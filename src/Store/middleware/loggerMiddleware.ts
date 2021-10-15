import { Middleware, MiddlewareAPI, Dispatch, AnyAction } from "redux";

export const loggerMiddleware: Middleware<Dispatch> = ({ dispatch, getState }: MiddlewareAPI) => {
  return (next: Dispatch<AnyAction>) => {
    return (action: AnyAction) => {
      console.log('dispatching: ', action);
      let result = next(action);  
      console.log('next state: ', getState()); 
      return result;
    };
  };
}
