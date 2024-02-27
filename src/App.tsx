import React from 'react';
import './App.css';

import { User } from './components/User/User';

import { Button } from './components/Button/Button';

import { Menu } from './components/Menu/Menu';

import keyIcon from './icon/Key.svg';
import chatIcon from './icon/Chat.svg';
import bellIcon from './icon/Bell.svg';
import storageIcon from './icon/Storage.svg';
import helpIcon from './icon/Help.svg';
import inviteIcon from './icon/Invite.svg';


const user = {
        avatar: 'https://storage.yandexcloud.net/themitri4-backet/capybaras/capybara-3.jpeg',
        name: 'Jane Doe',
		description: 'This is a small bio description to let users express themselves'
    };


const menuButtons = [
	{
		icon: keyIcon,
		text: 'Account' 
	},
	{
		icon: chatIcon,
		text: 'Chat Settings' 
	},
	{
		icon: bellIcon,
		text: 'Notifications' 
	},
	{
		icon: storageIcon,
		text: 'Storage' 
	},
	{
		icon: helpIcon,
		text: 'Help' 
	},
	{
		icon: inviteIcon,
		text: 'Invite a friend' 
	}
]

function App() {
    return (
        <div className="App">
			<div className="Profile">
				<div className="User">
					<User avatar={user.avatar} name={user.name} description={user.description}/>
				</div>
				<div className='Menu_block'>
					{menuButtons.map(button => <Menu text={button.text} icon={button.icon}/>)}
				</div>
				<div className="Buttons">
					<Button>
						Logout
					</Button>
				</div>
			</div>
        </div>
    );
}

export default App;

