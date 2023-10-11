import React, {useState} from 'react';
import './index.scss';

type MenuItem = {
  label: string;
  onClick: () => void;
};

type MultiLevelButtonProps = {
  label: string;
  icon?: React.ReactNode;
  menuItems?: MenuItem[];
};

const MultiLevelButton: React.FC<MultiLevelButtonProps> = ({
  label,
  icon,
  menuItems,
}) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen((prevState) => !prevState);
  };

  const handleMenuItemClick = (onClick: () => void) => {
    setIsSubMenuOpen(false);
    onClick();
  };

  return (
    <div className="multi-level-button" onClick={toggleSubMenu}>
      {icon && <div className="multi-level-button__icon">{icon}</div>}
      <div className="multi-level-button__label">{label}</div>
      <div
        className={`multi-level-button__sub-menu ${
          isSubMenuOpen ? 'multi-level-button__sub-menu--active' : ''
        }`}
      >
        {menuItems && menuItems.map((item, index) => (
          <div
            key={index}
            className="multi-level-button__sub-menu-item"
            onClick={() => handleMenuItemClick(item.onClick)}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiLevelButton;
