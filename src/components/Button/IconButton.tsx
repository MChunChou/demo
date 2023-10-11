import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {IconButtonProps as Props} from './Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import './IconButton.scss';

const IconButton = ({fontIcon, onClick, children, ...props}: Props) => {
    const icon = useMemo(()=>{
        if (fontIcon) {
            return <FontAwesomeIcon icon={fontIcon}/>;
        }
        return undefined;
    }, [fontIcon]);

    return (
        <button
            {...props}
            className={classNames('icon-button', props.className)}
            onClick={onClick}
        >
            {icon}
            {children}
        </button>
    );
};


export default IconButton;
