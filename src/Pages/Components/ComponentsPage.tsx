import HelloWorldFC from "../../Components/Basic/HelloWorldFC";
import { FragmentHelloWorld, FragmentHelloWorldSimple, NoFragment } from "../../Components/Fragments/Fragments";
import KeysByIndex from "../../Components/Keys/KeysByIndex";
import KeysById from "../../Components/Keys/KeysById";
import KeysError from "../../Components/Keys/KeysError";
import PropsParentToChild from "../../Components/Props/PropsParentToChild";
import Greeting from "../../Components/Props/Greeting";
import HelloWorldWithChild from "../../Components/Basic/HelloWorldChild";
import PropsChildToParent from "../../Components/Props/PropsChildToParent";
import JSXConditionalVariable from "../../Components/ConditionalRendering/JSXConditionalVariable";
import JSXConditionalInline from "../../Components/ConditionalRendering/JSXConditionalInline";
import { PostBefore } from "../../Components/ComponentSplitting/PostBefore";
import { PostAfter } from "../../Components/ComponentSplitting/PostAfter";
import UsersContainer from "../../Components/ContainerPresentation/UsersContainer";
import { ErrorDialog } from "../../Components/Composition/Specialization";
import CardChildren from "../../Components/Composition/Containment/CardChildren";
import { ClickEvent } from "../../Components/Events/ClickEvent";
import ClickEventInline from "../../Components/Events/ClickEventInline";
import { ClickEventTarget } from "../../Components/Events/ClickEventTarget";
import { Lazy } from "../../Components/ComponentLazyLoading/Lazy";
import FormSubmit from "../../Components/Events/FormSubmit";

const ComponentsPage = () => {
  const style = { border: '1px solid #ccc', padding: '1rem' };
  const hrStyle = { margin: '2rem 0 2rem 0' };
  const h2Style = { background: '#333', padding: '1rem', color: '#fff' };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Components</h1>
      
      <h2 style={h2Style}>Basic components</h2>

      <h3>Basic component</h3>
      <div style={style}>
        <HelloWorldFC />
      </div>
      <h3>Component with a child component</h3>
      <div style={style}>
        <HelloWorldWithChild /> 
      </div>

      <hr style={hrStyle} />

      <h2 style={h2Style}>JSX Conditional Rendering</h2>

      <h3>Using variables to hold JSX</h3>
      <div style={style}>
        <JSXConditionalVariable isLoggedIn={true} />
      </div>
      <h3>Inline conditional checks</h3>
      <div style={style}>
        <JSXConditionalInline users={['Mario', 'Luigi']} isLoggedIn={true} />
      </div>

      <hr style={hrStyle} />

      <h2 style={h2Style}>Fragments</h2>
      
      <h3>Without a fragment</h3>
      <div style={style}>
        <NoFragment />
      </div>
      <h3>With a fragment</h3>
      <div style={style}>
        <FragmentHelloWorld />
      </div>
      <h3>With a simpler fragment</h3>
      <div style={style}>
        <FragmentHelloWorldSimple />
      </div>

      <hr style={hrStyle} />

      <h2 style={h2Style}>Keys</h2>
      
      <h3>Index as keys</h3>
      <div style={style}>
        <KeysByIndex />
      </div>
      <h3>Ids as keys</h3>
      <div style={style}>
        <KeysById />
      </div>
      <h3>Without keys (error)</h3>
      <div style={style}>
        <KeysError />
      </div>

      <hr style={hrStyle} />

      <h2 style={h2Style}>Props</h2>
      
      <h3>Basic prop</h3>
      <div style={style}>
        <Greeting message='Hello World!' />
      </div>
      <h3>Props from parent to child</h3>
      <div style={style}>
        <PropsParentToChild greeting={'Hi'} firstName={'John'} lastName={'Smith'} />
      </div>
      <h3>Props for child-to-parent communication</h3>
      <div style={style}>
        <PropsChildToParent />
      </div>

      <hr style={hrStyle} />

      <h2 style={h2Style}>Events</h2>
      
      <h3>Basic click event</h3>
      <div style={style}>
        <ClickEvent />
      </div>
      <h3>Click event with inline function</h3>
      <div style={style}>
        <ClickEventInline />
      </div>
      <h3>Button click with event as parameter</h3>
      <div style={style}>
        <ClickEventTarget />
      </div>
      <h3>Form submission</h3>
      <div style={style}>
        <FormSubmit />
      </div>

      <h2 style={h2Style}>Component architecture</h2>

      <h3>Container/Presentation components</h3>
      <div style={style}>
        <UsersContainer />
      </div>
      <h3>Containment</h3>
      <div style={style}>
        <CardChildren title='Containment Example'>
          <p>Child element contained.</p>
        </CardChildren>
      </div>
      <h3>Specialization</h3>
      <div style={style}>
        <ErrorDialog message='Error' />
      </div>

      <h2 style={h2Style}>Component Splitting</h2>
      
      <h3>Before</h3>
      <div style={style}>
        <PostBefore author={{ avatarUrl: 'https://picsum.photos/200/300', name: 'John' }} title='Hello' content='Content...' />
      </div>
      <h3>After</h3>
      <div style={style}>
        <PostAfter author={{ avatarUrl: 'https://picsum.photos/200/300', name: 'John' }} title='Hello' content='Content...' />
      </div>

      <h2 style={h2Style}>Component Lazy Loading</h2>

      <h3>Lazy load an image component</h3>
      <div style={style}>
        <Lazy />
      </div>

    </div>
  );
};

export default ComponentsPage;