import PostContainment from "../../Components/Composition/Containment/PostContainment";

const ChildrenContainment = () => (
  <PostContainment title='Sample Post Title'>
    <p>Child element contained.</p>
  </PostContainment>
);

// using FC (automatically adds the children prop)

// const ChildrenContainment = () => (
//   <PostContainmentFC title='Sample Post Title'>
//     <p>Child element contained.</p>
//   </PostContainmentFC>
// );

export default ChildrenContainment;