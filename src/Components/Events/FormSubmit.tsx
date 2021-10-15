export default function FormSubmit(): JSX.Element {
  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    console.log('Form submitted.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}