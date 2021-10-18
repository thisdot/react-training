type Props = {
  title: string;
  children?: React.ReactNode;
}

const PostContainment = ({ title, children }: Props) => {
  return (
    <div>
      <h2>{title}</h2>      
      {children}
    </div>
  );
}

export default PostContainment;