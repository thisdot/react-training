import { useState } from 'react';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

const MyLink = () => {
  const [status, setStatus] = useState(STATUS.NORMAL);

  const onMouseEnter = () => {
    setStatus(STATUS.HOVERED);
  };

  const onMouseLeave = () => {
    setStatus(STATUS.NORMAL);
  };

  return (
    <a
      className={status}
      href='/'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {status}
    </a>
  );
};

export default MyLink;