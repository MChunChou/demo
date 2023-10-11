import React, {ReactNode} from 'react';
import './index.scss';

type IconButtonProps = {
  icon: ReactNode;
  label: string;
  onClick: () => void;
  className?: string;
};

const IconButton: React.FC<IconButtonProps> = ({
    icon, label, onClick, className,
}) => {
  return (
    <button className={`icon-button ${className}`} onClick={onClick}>
      {icon}
      <span className="icon-button__label">{label}</span>
    </button>
  );
};

export default IconButton;
