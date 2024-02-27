import React from 'react';

import './Profile.css';


import { User, IUserProps } from '../User/User';

import { Button } from '../Button/Button';

import { Menu, IMenuProps } from '../Menu/Menu';


export interface IProfileProps {
    userProps: IUserProps,
    menuProps: IMenuProps[]
}


export const Profile: React.FC<IProfileProps> = ({ userProps, menuProps }) => {

    return (
        <div className="Profile">
            <div className="User">
                <User {...userProps}/>
            </div>
            <div className='Menu_block'>
                {menuProps.map(button => <Menu text={button.text} icon={button.icon}/>)}
            </div>
            <div className="Buttons">
                <Button>
                    Logout
                </Button>
            </div>
        </div>
    );
}
