type Props = {
  message: string;
}

const PreventRender = ({ message }: Props) => {
  // if message is undefined, don't render
  if (!message) {
    return null;
  }

  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
}

export default PreventRender;