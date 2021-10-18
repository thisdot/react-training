export default function RegisterForm(): JSX.Element {
  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    console.log('Form submitted.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Register</button>
    </form>
  );
}