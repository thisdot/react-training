type Props = {
  title: string;
  children?: React.ReactNode;
}

const CardChildren = ({ title, children }: Props) => {
  return (
    <div>
      <h2>{title}</h2>      
      {children}
    </div>
  );
}

export default CardChildren;