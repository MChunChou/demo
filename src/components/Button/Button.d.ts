import * as React from 'react';

export declare interface ButtonProps extends Omit <
React.DetailedHTMLProps <
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>, 'disabled' | 'ref' > {

}

export interface IconButtonProps extends ButtonProps {
    fontIcon?: IconProp,
    disabled?: boolean
}

export declare class Button extends React.Component<ButtonProps, any> {}
