import { FetchEffect } from "../../../Components/Hooks/useEffect/FetchEffect";

const UseEffectAsyncPage = () => {
  return (
    <div>
      <h1>Asynchronous useEffect</h1>
      <FetchEffect url='https://jsonplaceholder.typicode.com/posts' />
    </div>
  );
};

export default UseEffectAsyncPage;