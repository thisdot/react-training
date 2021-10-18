import CheckboxWithLabel from "../../Components/Testing/CheckboxWithLabel/CheckboxWithLabel";
import MyLink from "../../Components/Testing/MyLink/MyLink";
import { Todo } from "../../Components/Testing/Todo/Todo";
import { TodoAsync } from "../../Components/Testing/TodoAsync/TodoAsync";

const TestingPage = () => {
  return (
    <div>
      <h1>Testing</h1>
      <p>Run <code>npm run test</code>.</p>
      
      <h2>Components being tested</h2>

      <h3>Checkbox</h3>
      <CheckboxWithLabel labelOn="On" labelOff="Off" />

      <h3>Link</h3>
      <MyLink />
      
      <h3>Todo List</h3>
      <Todo />

      <h3>Todo List (Async)</h3>
      <TodoAsync />      
    </div>
  );
}

export default TestingPage;
