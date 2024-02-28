import React from 'react';

import './Profile.css';

import { ProfileCn, ProfileUserCn, ProfileMenuCn } from './Profile.classname';

import { User, IUserProps } from '../User/User';

import { Button } from '../Button/Button';

import { Menu, IMenuProps } from '../Menu/Menu';


export interface IProfileProps {
    userProps: IUserProps,
    menuProps: IMenuProps[]
}


export const Profile: React.FC<IProfileProps> = ({ userProps, menuProps }) => {

    return (
        <div className={ProfileCn}>
            <div className={ProfileUserCn}>
                <User {...userProps}/>
            </div>
            <div className={ProfileMenuCn}>
                {menuProps.map(button => <Menu text={button.text} icon={button.icon}/>)}
            </div>
            <div>
                <Button>
                    Logout
                </Button>
            </div>
        </div>
    );
}
