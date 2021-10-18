import { Link } from "react-router-dom";

const ComponentsPage = () => {
  return (
    <div>
      <p><Link to="/components/basic">Basic</Link></p>
      <p><Link to="/components/keys">Keys</Link></p>
      <p><Link to="/components/fragments">Fragments</Link></p>
      <p><Link to="/components/conditional-rendering">Conditional Rendering</Link></p>
      <p><Link to="/components/events/click">Click event</Link></p>
      <p><Link to="/components/events/inline">Inline event</Link></p>
      <p><Link to="/components/events/param">Event parameter</Link></p>
      <p><Link to="/components/events/submit">Submit event</Link></p>
      <p><Link to="/components/child-to-parent">Child-parent communication</Link></p>
      <p><Link to="/components/containment">Containment</Link></p>
      <p><Link to="/components/specialization">Specialization</Link></p>
      <p><Link to="/components/splitting">Component Splitting</Link></p>
      <p><Link to="/components/container-view">Container and Presentation</Link></p>      
    </div>
  );
};

export default ComponentsPage;