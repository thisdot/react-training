import { Dialog } from "../../Components/Composition/Specialization/Dialog";

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

const ComponentSpecialization = () => (
  <>
    <Dialog title='Message' message='Message' />
    <hr />
    <ErrorDialog message='Error' />
  </>
);

export default ComponentSpecialization;
