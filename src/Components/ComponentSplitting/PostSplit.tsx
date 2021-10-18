type Author = {
  name: string;
  avatarUrl: string;
}

type Props = {
  author: Author;
  content: string;
  title: string;
};

export const PostSplit = ({ title, content, author }: Props) => {
  return (
    <div className="post">
      <PostAuthor
        name={author.name}
        avatarUrl={author.avatarUrl}
      />
      <h1>{title}</h1>
      <div className="post-content">
        {content}
      </div>
    </div>
  );
}

type AuthorProps = {
  name: string;
  avatarUrl: string;
};

export const PostAuthor = ({ name, avatarUrl }: AuthorProps) => {
  return (
    <div>
      <img className="avatar"
        src={avatarUrl}
        alt={name}
      />
      <h3>
        {name}
      </h3>
    </div>
  );
}
