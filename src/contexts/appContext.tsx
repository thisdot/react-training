import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface Context {
  searchTerm: string;  
  setSearchTerm: Dispatch<SetStateAction<string>>; 
}

const AppContext: React.Context<Context | undefined> = createContext<Context | undefined>(undefined);

type Props = {
  children: ReactNode;
};

const AppProvider = ({ children }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const value = { searchTerm, setSearchTerm };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// instead of calling useContext directly in our components,
// we make our own hook that throws an error if we try to
// access context outside of the provider
const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error(
      '[AppContext] useApp must be used within a AppContext'
    );
  }
  return context;
};

export { AppProvider, useApp };
