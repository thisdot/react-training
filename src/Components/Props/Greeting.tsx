type Props = {
  message: string;
};

// using object destructuring
const Greeting = ({ message }: Props): JSX.Element => {
  return <h1>{message}</h1>;
};

// without object destructuring
// const Greeting = (props: Props): JSX.Element => {
//   return <h1>{props.message}</h1>;
// };

export default Greeting;