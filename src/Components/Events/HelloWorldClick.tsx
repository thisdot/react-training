export function HelloWorldClick() {
  const onClick = () => {
    alert('Hello, World.');
  }

  return (
    <button onClick={onClick}>
      Click
    </button>
  );
}
