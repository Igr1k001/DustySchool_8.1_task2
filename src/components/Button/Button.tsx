import React from 'react';

import './Button.css';

export interface IButtonProps extends React.PropsWithChildren {}

export const Button: React.FC<IButtonProps> = (props) => {
    const { children} = props;

    return (
        <button className="Button">
            {children}
        </button>
    );
}