import { createContext } from "react";

interface Context {}

const AppContext: React.Context<Context | undefined> = createContext<Context | undefined>(undefined);

const AppProvider = () => {};

const useApp = () => {};

export { AppProvider, useApp };
