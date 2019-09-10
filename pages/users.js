import React, { useEffect, useState, useRef } from 'react';
import { Button, Form, Input } from 'antd';
import NewUserInput from '../components/NewUserInput';

const initUsers = [
	{
		id: 1,
		name: 'ken',
		email: 'ken@flui.ai'
	},
	{
		id: 2,
		name: 'ken2',
		email: 'ken2@flui.ai'
	}
];

const Users = ({ users }) => {
	return (
		<div>
			<h1>User List</h1>
			{users && users.map(user => <User key={user.id} user={user} />)}
		</div>
	);
};

const User = ({ user }) => {
	return <div>Name: {user.name}</div>;
};

<<<<<<< HEAD:pages/code.js

<<<<<<< HEAD
=======



=======
>>>>>>> upstream/master:pages/users.js
// setUsers([...users, values]);

>>>>>>> upstream/master
const UserListContainer = props => {
	const [users, setUsers] = useState([]);

	// useEffect(() => {});
	//
	// const ref = useRef();
	function onInputChangeHandle(values) {
		console.log('onInputChangeHandle', values);
<<<<<<< HEAD
		setUsers([...users, values]);
	}


=======

		// const newUser = [];
		// for( const user in users) {
		// 	newUser.push(user);
		// }
		// newUser.push(values);

		setUsers([...users, { ...values, id: new Date().getTime() }]);
	}

>>>>>>> upstream/master
	return (
		<>
			<NewUserInput onSubmit={onInputChangeHandle} />
			<Users users={users} />
		</>
	);
};

<<<<<<< HEAD
export default UserListContainer;
=======
export default UserListContainer;
>>>>>>> upstream/master
