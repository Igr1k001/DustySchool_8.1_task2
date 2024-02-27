import React from 'react';

import './User.css';

import { cnUser } from './User.classname';

export interface IUserProps {
    avatar: string;
    name: string;
    description?: string;
}

export const User: React.FC<IUserProps> = ({ avatar, name, description }) => {

    return (
        <div className="User">
            <img className={cnUser('Avatar')} src={avatar}></img>
            <p className={cnUser('Name')}>{name}</p>
            <p className={cnUser('Description')}>{description}</p>
        </div>
    );
}