import { PostNotSplit } from "../../Components/ComponentSplitting/PostNotSplit";
import { PostSplit } from "../../Components/ComponentSplitting/PostSplit";

const ComponentSplitting = () => {
  return (
    <>
      <h3>Before</h3>      
      <PostNotSplit author={{ avatarUrl: 'https://picsum.photos/200/300', name: 'John' }} title='Hello' content='Content...' />
      <hr />
      <h3>After</h3>      
      <PostSplit author={{ avatarUrl: 'https://picsum.photos/200/300', name: 'John' }} title='Hello' content='Content...' />      
    </>
  );
}

export default ComponentSplitting;