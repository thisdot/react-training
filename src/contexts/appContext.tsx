import { createContext } from "react";

interface Context {
    query: string
}

const AppContext = createContext<Context | undefined>(undefined);

const AppProvider = () => {};

const useApp = () => {};

export { AppProvider, useApp };
