type DialogProps = {
  title: string;
  message: string;
  className?: string;
};

export function Dialog(props: DialogProps) {
  return (
    <div className={`dialog ${props.className ? props.className : ''}`}>
      <h1>{props.title}</h1>
      <p>{props.message}</p>
    </div>
  );
}

type ErrorDialogProps = {  
  message: string;
};

export function ErrorDialog({ message }: ErrorDialogProps) {
  return (
    <Dialog
      title="Error"
      message={message} 
      className="errorDialog" />
  );
}
