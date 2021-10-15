import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface Context {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
}

const CountContext: React.Context<Context | undefined> = createContext<Context | undefined>(undefined);

function useCountContext() {
  const context = useContext(CountContext);
  if (!context)
    throw new Error('useCountContext must be used within CountProvider!');
  return context;
}

type Props = {
  children: ReactNode;
};

function CountProvider({ children }: Props) {
  // the count for our counter component
  const [count, setCount] = useState(0);
  // this message never changes!
  const [message, setMessage] = useState('Hello from Context!');
  const value = {
    count,
    setCount,
    message,
    setMessage
  };

  return (
    <CountContext.Provider value={value}>
      {children}
    </CountContext.Provider>
  );
}

function Message() {
  const { message } = useCountContext();
  // show text with a random color for
  // each render of this component
  const getColor = () => (Math.floor(Math.random() * 255));
  const style = {
    color: `rgb(${getColor()},${getColor()},${getColor()})`
  };
  return (
    <div>
      <h4 style={style}>{message}</h4>
    </div>
  )
}

function Count() {
  const { count, setCount } = useCountContext();
  return (
    <div>
      <h3>Current count from context: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

const ContextRerenderPage = () => {
  return (
    <div>
      <h2>Context Re-rendering Pitfall</h2>
      <CountProvider>        
        <Message />
        <Message />
        <Message />
        <Count />
      </CountProvider>

      <p>
      Every child of the <code>CountProvider</code> re-renders when the button is clicked.
      </p>
      <p>
      The <code>Message</code> components don't use the <code>count</code> from the context, but they still re-render! 
      </p>
    </div>
  )
}

export default ContextRerenderPage;