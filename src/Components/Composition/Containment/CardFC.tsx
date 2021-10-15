type Props = {
  title: string;
}

// The React.FC type automatically includes the children prop.
const CardFC: React.FC<Props> = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>      
      {children}
    </div>
  );
}

export default CardFC;