import { Middleware, MiddlewareAPI, Dispatch, AnyAction } from "redux";

export const crashMiddleware: Middleware<Dispatch> = ({ dispatch, getState }: MiddlewareAPI) => {
  return (next: Dispatch<AnyAction>) => {
    return (action: AnyAction) => {
      try {    
        return next(action);
      } catch (err) {    
        console.error('Redux caught an exception: ', err);
        throw err;
      }
    }
  }
}
