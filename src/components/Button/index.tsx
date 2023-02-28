import React, {forwardRef} from 'react';
import {ButtonProps} from './Button';

const Button = forwardRef(({...props}: ButtonProps, ref) => {
    return (
        <button {...props}>
            {props.children}
        </button>
    );
});

Button.displayName = 'Button';
Button.defaultProps = {

};

export default Button;
