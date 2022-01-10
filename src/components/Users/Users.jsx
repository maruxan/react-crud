import React from 'react';
import useUsers from '../../hooks/useUsers';

export default function Users() {
  const { users } = useUsers();

  const usersList = users ? (
    users.map((user, i) => (
      <li key={i}>
        {user.username}: {user.name}
      </li>
    ))
  ) : (
    <p>Loading users...</p>
  );

  return (
    <div>
      <h1>Users</h1>
      <ul>{usersList}</ul>
    </div>
  );
}
