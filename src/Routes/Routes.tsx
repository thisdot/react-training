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
import RoutingLazyPage from '../Pages/Routing/LazyRouting/RoutingLazyPage';
import Posts from '../Pages/Redux/Posts';
import CreatePost from '../Pages/Redux/CreatePost';
import UpdatePost from '../Pages/Redux/UpdatePost';
import ReduxPage from '../Pages/Redux/ReduxPage';
import UseStateCounter from '../Pages/Hooks/UseStateCounter';
import UseEffectLifecycle from '../Pages/Hooks/UseEffectLifecycle';
import UseEffectCounter from '../Pages/Hooks/UseEffectCounter';
import UseEffectDependencyPitfall from '../Pages/Hooks/UseEffectDependencyPitfall';
import UseEffectObjectPitfall from '../Pages/Hooks/UseEffectObjectPitfall';
import UseRefInput from '../Pages/Hooks/UseRefInput';
import UseRefPersisted from '../Pages/Hooks/UseRefPersisted';
import CustomHook from '../Pages/Hooks/CustomHook';
import ChildToParent from '../Pages/Components/ChildToParent';
import ChildrenContainment from '../Pages/Components/ChildrenContainment';
import ClickEvent from '../Pages/Components/ClickEvent';
import ClickEventInline from '../Pages/Components/ClickEventInline';
import ClickEventParam from '../Pages/Components/ClickEventParam';
import ComponentSpecialization from '../Pages/Components/ComponentSpecialization';
import ComponentSplitting from '../Pages/Components/ComponentSplitting';
import ContainerPresentation from '../Pages/Components/ContainerPresentation';
import EventSubmit from '../Pages/Components/EventSubmit';
import ConditionalRendering from '../Pages/Components/ConditionalRendering';
import Fragments from '../Pages/Components/Fragments';
import Keys from '../Pages/Components/Keys';
import ComponentsPage from '../Pages/Components/ComponentsPage';
import HooksPage from '../Pages/Hooks/HooksPage';
import BasicComponents from '../Pages/Components/BasicComponents';
import UseStateWithProps from '../Pages/Hooks/UseStateWithProps';
import TestingPage from '../Pages/Testing/TestingPage';

export const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />

    {/* Components */}
        
    <Route path="/components" component={ComponentsPage} exact />
    <Route path="/components/basic" component={BasicComponents} exact />
    <Route path="/components/keys" component={Keys} exact />
    <Route path="/components/fragments" component={Fragments} exact />
    <Route path="/components/events/click" component={ClickEvent} exact />
    <Route path="/components/events/inline" component={ClickEventInline} exact />
    <Route path="/components/events/param" component={ClickEventParam} exact />
    <Route path="/components/events/submit" component={EventSubmit} exact />
    <Route path="/components/child-to-parent" component={ChildToParent} exact />
    <Route path="/components/containment" component={ChildrenContainment} exact />
    <Route path="/components/specialization" component={ComponentSpecialization} exact />
    <Route path="/components/splitting" component={ComponentSplitting} exact />
    <Route path="/components/container-view" component={ContainerPresentation} exact />
    <Route path="/components/conditional-rendering" component={ConditionalRendering} exact />

    {/* Hooks */}    
    
    <Route path="/hooks" component={HooksPage} exact />
    <Route path="/hooks/use-state/counter" component={UseStateCounter} exact />
    <Route path="/hooks/use-state/props" component={UseStateWithProps} exact />
    <Route path="/hooks/use-effect/lifecycle" component={UseEffectLifecycle} exact />
    <Route path="/hooks/use-effect/counter" component={UseEffectCounter} exact />
    <Route path="/hooks/use-effect/pitfalls/dependency" component={UseEffectDependencyPitfall} exact />
    <Route path="/hooks/use-effect/pitfalls/object" component={UseEffectObjectPitfall} exact />
    <Route path="/hooks/use-ref/input" component={UseRefInput} exact />
    <Route path="/hooks/use-ref/persisted" component={UseRefPersisted} exact />
    <Route path="/hooks/custom-hook" component={CustomHook} exact />
    
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
    <Route path="/context/rerender-pitfall" component={ContextRerenderPage} exact />

    {/* Redux */}
    
    <Route path="/redux" component={ReduxPage} exact />
    <Route path="/redux/posts" component={Posts} exact />
    <Route path="/redux/posts/create" component={CreatePost} exact />
    <Route path="/redux/posts/:id" component={UpdatePost} exact />

    {/* Testing */}

    <Route path="/testing" component={TestingPage} exact />

    <Route path="*" component={NotFound} />
  </Switch>
);
