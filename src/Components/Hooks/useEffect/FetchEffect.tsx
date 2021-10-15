import { useEffect, useState } from "react";

interface Post {
  id: string;
  title: string;
}

type Props = {
  url: string;
};

export const FetchEffect = ({ url }: Props) => {
  const [posts, setPosts] = useState<Array<Post>>([]);
  
  useEffect(() => {  // can't be an async function
    async function fetchPosts() {
      console.log(`useEffect is fetching posts from ${url}`);
      const response = await fetch(url);
      const data: Array<Post> = await response.json();
      setPosts(data.slice(0, 5));
    }

    // can invoke async functions
    fetchPosts();
  }, [url]);
  
  return (
    <div>
      {posts.map(post => <p key={post.id}>{post?.title}</p>)}
    </div>
  );
}
