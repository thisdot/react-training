import { Route, Switch } from 'react-router-dom';
import { About } from '../Pages/Routing/About';
import { NotFound } from '../Pages/Routing/NotFound';
import { User } from '../Pages/Routing/User';
import { Categories } from '../Pages/Routing/NestedRouting/Categories';
import RoutingPage from '../Pages/Routing/RoutingPage';
import { Users } from '../Pages/Routing/Users';
import Home from '../Pages/Home';
import ContextUseStatePage from '../Pages/Context/ContextUseStatePage';
import ContextRerenderPage from '../Pages/Context/ContextRerenderPage';
import ContextPage from '../Pages/Context/ContextPage';
import ContextUseReducerPage from '../Pages/Context/ContextUseReducerPage';
import RoutingLazyPage from '../Pages/Routing/LazyRouting/RoutingLazyPage';
import Posts from '../Pages/Redux/Posts';
import CreatePost from '../Pages/Redux/CreatePost';
import UpdatePost from '../Pages/Redux/UpdatePost';
import ReduxPage from '../Pages/Redux/ReduxPage';
import ComponentsPage from '../Pages/Components/ComponentsPage';
import HooksPage from '../Pages/Hooks/HooksPage';
import UseEffectPage from '../Pages/Hooks/useEffect/UseEffectPage';
import UseEffectSimplePage from '../Pages/Hooks/useEffect/useEffectSimplePage';
import UseEffectFirstRenderPage from '../Pages/Hooks/useEffect/useEffectFirstRenderPage';
import UseEffectDependencyPage from '../Pages/Hooks/useEffect/useEffectDependencyPage';
import UseEffectAsyncPage from '../Pages/Hooks/useEffect/useEffectAsyncPage';
import UseEffectCleanupFunctionPage from '../Pages/Hooks/useEffect/useEffectCleanupFunctionPage';
import UseEffectDependencyPitfallPage from '../Pages/Hooks/useEffect/useEffectDependencyPitfallPage';
import UseEffectObjectPitfallPage from '../Pages/Hooks/useEffect/useEffectObjectPitfallPage';
import { UseCallbackPage } from '../Pages/Hooks/useCallback/useCallbackPage';
import { UseRefPage } from '../Pages/Hooks/useRefPage';
import { CustomHooksPage } from '../Pages/Hooks/CustomHooksPage';
import UseCallbackProblemPage from '../Pages/Hooks/useCallback/useCallbackProblem';
import UseCallbackSolutionPage from '../Pages/Hooks/useCallback/useCallbackSolution';
import { UseMemoPage } from '../Pages/Hooks/useMemoPage';
import ExerciseUseEffect from '../Exercises/ExerciseUseEffect';
import Exercises from '../Pages/Exercises';
import ExerciseArchitecture from '../Exercises/ExerciseArchitecture';
import ExerciseLazyLoading from '../Exercises/ExerciseLazyLoading';
import ExerciseRouting from '../Exercises/ExerciseRouting';
import ExerciseContext from '../Exercises/ExerciseContext';
import ExerciseRedux from '../Exercises/ExerciseRedux';
import ExerciseTesting from '../Exercises/ExerciseTesting';
import ExerciseComponents from '../Exercises/ExerciseComponents';
import ExerciseUseState from '../Exercises/ExerciseUseState';
import ExerciseUseReducer from '../Exercises/ExerciseUseReducer';
import ExerciseEvents from '../Exercises/ExerciseEvents';
import ExerciseCustomHook from '../Exercises/ExerciseCustomHook';

export const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />

    {/* Components */}
    
    <Route path="/components" component={ComponentsPage} exact />

    {/* Hooks */}
    
    <Route path="/hooks" component={HooksPage} exact />
    <Route path="/hooks/use-effect" component={UseEffectPage} exact />
    <Route path="/hooks/use-effect/simple" component={UseEffectSimplePage} exact />
    <Route path="/hooks/use-effect/first-render" component={UseEffectFirstRenderPage} exact />
    <Route path="/hooks/use-effect/dependency" component={UseEffectDependencyPage} exact />
    <Route path="/hooks/use-effect/async" component={UseEffectAsyncPage} exact />
    <Route path="/hooks/use-effect/cleanup" component={UseEffectCleanupFunctionPage} exact />
    <Route path="/hooks/use-effect/pitfalls/dependency" component={UseEffectDependencyPitfallPage} exact />
    <Route path="/hooks/use-effect/pitfalls/object" component={UseEffectObjectPitfallPage} exact />
    <Route path="/hooks/use-callback" component={UseCallbackPage} exact />
    <Route path="/hooks/use-callback/problem" component={UseCallbackProblemPage} exact />
    <Route path="/hooks/use-callback/solution" component={UseCallbackSolutionPage} exact />
    <Route path="/hooks/use-ref" component={UseRefPage} exact />
    <Route path="/hooks/use-memo" component={UseMemoPage} exact />
    <Route path="/hooks/custom-hooks" component={CustomHooksPage} exact />

    {/* Routing */}
    
    <Route path="/routing" component={RoutingPage} exact />
    {/* Standard Routing */}
    <Route path="/about" component={About} exact />
    <Route path="/users" component={Users} exact />
    <Route path="/users/:id" component={User} exact />
    <Route path="/users/:id/:page" component={User} exact />
    {/* Nested Routing */}
    <Route path="/routing/categories" component={Categories} />
    {/* Lazy Routing */}
    <Route path="/routing/lazy" component={RoutingLazyPage} />
    
    {/* Context */}

    <Route path="/context" component={ContextPage} exact />
    <Route path="/context/usestate" component={ContextUseStatePage} exact />
    <Route path="/context/rerender" component={ContextRerenderPage} exact />
    <Route path="/context/usereducer" component={ContextUseReducerPage} exact />

    {/* Redux */}
    
    <Route path="/redux" component={ReduxPage} exact />
    <Route path="/redux/posts" component={Posts} exact />
    <Route path="/redux/posts/create" component={CreatePost} exact />
    <Route path="/redux/posts/:id" component={UpdatePost} exact />

    {/* Exercises */}

    <Route path="/exercises" component={Exercises} exact />    
    <Route path="/exercises/components" component={ExerciseComponents} exact />
    <Route path="/exercises/use-state" component={ExerciseUseState} exact />
    <Route path="/exercises/use-reducer" component={ExerciseUseReducer} exact />
    <Route path="/exercises/use-effect" component={ExerciseUseEffect} exact />
    <Route path="/exercises/custom-hook" component={ExerciseCustomHook} exact />
    <Route path="/exercises/events" component={ExerciseEvents} exact />
    <Route path="/exercises/component-architecture" component={ExerciseArchitecture} exact />
    <Route path="/exercises/lazy-loading" component={ExerciseLazyLoading} exact />
    <Route path="/exercises/routing" component={ExerciseRouting} exact />
    <Route path="/exercises/context" component={ExerciseContext} exact />
    <Route path="/exercises/redux" component={ExerciseRedux} exact />
    <Route path="/exercises/testing" component={ExerciseTesting} exact />

    <Route path="*" component={NotFound} />
  </Switch>
);
