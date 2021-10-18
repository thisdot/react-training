type Props = {
  title: string;
}

// The React.FC type automatically includes the children prop.
const PostContainmentFC: React.FC<Props> = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>      
      {children}
    </div>
  );
}

export default PostContainmentFC;