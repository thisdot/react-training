import { EffectCleanup } from "../../../Components/Hooks/useEffect/EffectCleanup";

const UseEffectCleanupFunctionPage = () => {
  return (
    <div>
      <h1>useEffect cleanup function</h1>

      <EffectCleanup  name='John' />
    </div>
  );
};

export default UseEffectCleanupFunctionPage;