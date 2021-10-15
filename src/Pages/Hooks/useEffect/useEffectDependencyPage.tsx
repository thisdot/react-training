import { EffectDependency } from "../../../Components/Hooks/useEffect/EffectDependency";

const UseEffectDependencyPage = () => {
  return (
    <div>
      <h1>useEffect with a dependency</h1>

      <EffectDependency name='John' />
    </div>
  );
};

export default UseEffectDependencyPage;