import { lazy, Suspense, useState } from "react";
import { Loading } from "./Loading";

const LazyImage = lazy(() => import('./LazyImage'));

export const Lazy = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      {!isClicked && 
        <button onClick={() => setIsClicked(true)}>Lazy Load Image</button>
      }
      {isClicked &&  
        <Suspense fallback={<Loading />}>
          <div>
            <LazyImage />
          </div>
        </Suspense>
      }
    </div>
  );
};