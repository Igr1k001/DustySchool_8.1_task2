import React from 'react';

import './Menu.css';

import { cnMenu } from './Menu.classname';

export interface IMenuProps {
    icon: string;
    text: string;
}

export const Menu: React.FC<IMenuProps> = ({ text, icon }) => {

    return (
        <div className="Menu">
            <img className={cnMenu('Icon')} src={icon}/>
            <a className={cnMenu('Item')}>{text}</a>
        </div>
    );
}
