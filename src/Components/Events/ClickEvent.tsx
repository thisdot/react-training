export function ClickEvent() {
  const onClick = () => {
    alert('Hello, World.');
  }

  return (
    <button onClick={onClick}>
      Click
    </button>
  );
}
