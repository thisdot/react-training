import { useParams } from "react-router-dom";

export const User = () => {
  const { id, page } = useParams<{ id: string; page: string; }>();

  return (
    <div>
      <h1>User {id}</h1>
      {page && 
        <p>Page {page}</p>
      }
    </div>
  );
}
