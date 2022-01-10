import React from 'react';
import useUsers from '../../hooks/useUsers';

export default function Users() {
  const { users } = useUsers();

  const usersList = users ? (
    users.map((user, i) => (
      <tr key={i} className="border-t h-8 text-gray-600 hover:text-black">
        <td>{user.username.toLowerCase()}</td>
        <td>{user.name}</td>
        <td>{user.email.toLowerCase()}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td>Loading users...</td>
    </tr>
  );

  return (
    <div className="my-6 p-6 bg-gray-50 rounded-md shadow-md">
      <h1 className="mb-2 text-xl font-bold border-b-2 border-purple-600">Users</h1>
      <table className="w-full table-fixed">
        <thead>
          <tr className="h-10">
            <th className="text-left">username</th>
            <th className="text-left">name</th>
            <th className="text-left">email</th>
          </tr>
        </thead>
        <tbody>{usersList}</tbody>
      </table>
    </div>
  );
}
