import React, {useState} from 'react';

// eslint-disable-next-line react/prop-types
function MultiLevelButton({label, children}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="multilevel-button">
      <button onClick={handleButtonClick}>{label}</button>
      {isOpen && <div className="multilevel-button__children">{children}</div>}
    </div>
  );
}

function App() {
  return (
    <div>
      <MultiLevelButton label="Level 1">
        <MultiLevelButton label="Level 2">
          <MultiLevelButton label="Level 3">
            <button>Button</button>
          </MultiLevelButton>
          <MultiLevelButton label="Level 3">
            <button>Button</button>
          </MultiLevelButton>
        </MultiLevelButton>
        <MultiLevelButton label="Level 2">
          <button>Button</button>
        </MultiLevelButton>
      </MultiLevelButton>
    </div>
  );
}

export default App;
