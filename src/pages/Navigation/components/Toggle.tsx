import React, {useState, useEffect, useMemo, useCallback} from 'react';
import classNames from 'classnames';

interface ToggleProps {
    onClick: () => void
}

const Toggle = (props:ToggleProps) => {
    const [isActive, setIsActive] = useState(true);

    const handleClick = () => {
        setIsActive(!isActive);
        props.onClick();
    };

    const className = classNames('toggle', {'active': isActive});
    return (
        <div
            className={className}
            onClick={handleClick}
        >
        </div>
    );
};

Toggle.defaultProps = {

};

export default Toggle;
