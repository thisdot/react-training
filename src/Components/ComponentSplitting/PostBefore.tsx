type PostAuthor = {
  name: string;
  avatarUrl: string;
}

type Props = {
  author: PostAuthor;
  content: string;
  title: string;
};

export const PostBefore = ({ title, content, author }: Props) => {
  return (
    <div className="post">
      <div className="author">
        <img className="avatar"
          src={author.avatarUrl}
          alt={author.name}
        />
        <h3>
          {author.name}
        </h3>
      </div>
      <h1>{title}</h1>
      <div className="post-content">
        {content}
      </div>
    </div>
  );
}
