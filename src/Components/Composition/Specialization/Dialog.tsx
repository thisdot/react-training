import styles from './Dialog.module.css';

type DialogProps = {
  title: string;
  message: string;
  className?: string;
};

export function Dialog(props: DialogProps) { console.log(props.className);
  return (
    <div className={`${styles.dialog} ${props.className ? styles[props.className] : ''}`}>
      <h1>{props.title}</h1>
      <p>{props.message}</p>
    </div>
  );
}
