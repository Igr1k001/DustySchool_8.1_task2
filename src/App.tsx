import React from 'react';
import './App.css';

import { Profile } from './components/Profile/Profile';

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
];

function App() {
    return (
        <div className="App">
			<Profile userProps={user} menuProps={menuButtons}/>
        </div>
    );
}

export default App;

