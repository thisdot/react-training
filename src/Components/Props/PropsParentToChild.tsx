type Props = {  
  greeting: string;
  firstName: string;
  lastName: string;
};

const PropsParentToChild = ({ greeting, firstName, lastName }: Props): JSX.Element => {
  return (
    <div>
      <h1>{greeting}</h1>
      <Person firstName={firstName} lastName={lastName} />
    </div>
  );
};
export default PropsParentToChild;

type PersonProps = {    
  firstName: string;
  lastName: string;
};

const Person = ({ firstName, lastName }: PersonProps): JSX.Element => {
  return <p>{firstName} {lastName}</p>;
};