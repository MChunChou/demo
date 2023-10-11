import React from 'react';
import './index.scss';
import MultiLevelButton from 'components/ChatGPT/MultiLevelButton';

const Content = () => {
  const handleMenuItemClick = (text: string) => {
    alert(`You clicked ${text}`);
  };

  const menuItems = [
    {label: 'Item 1', onClick: () => handleMenuItemClick('Item 1')},
    {label: 'Item 2', onClick: () => handleMenuItemClick('Item 2')},
    {label: 'Item 3', onClick: () => handleMenuItemClick('Item 3')},
  ];

  return (
    <div>
      <MultiLevelButton
        label="My Button"
        icon={<span>🚀</span>} menuItems={menuItems} />
    </div>
  );
};

export default Content;

