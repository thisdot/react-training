import './Button.css';

type Props = {
  label: string;  
  size?: string;
  isPrimary?: boolean;
  backgroundColor?: string;
  onClick: () => void;
};

export const Button = ({ backgroundColor, label, isPrimary = false, size = 'medium', onClick }: Props) => {
  const mode = isPrimary ? 'button-primary' : 'button-secondary';
  const style = backgroundColor ? { backgroundColor } : {};

  return (
    <button 
      onClick={onClick}
      className={['button', `button-${size}`, mode].join(' ')}
      style={style}>
      {label}
    </button>
  );
};
