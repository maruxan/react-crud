import React from 'react';
// hooks
import useUsers from '../../hooks/useUsers';
// components
import Card from '../ui/Card';
import { FiUsers } from 'react-icons/fi';

export default function Users({ users }) {
  const usersList =
    users.length > 0 ? (
      users.map((user, i) => (
        <tr key={i} className="border-t h-8 text-gray-600 hover:text-purple-800">
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
    <Card>
      <div className="flex items-center mb-2 text-xl font-bold ">
        <FiUsers className="text-purple-800 mr-3" />
        <h1>Users</h1>
      </div>
      <table className="w-full table-fixed">
        <thead>
          <tr className="h-10">
            <th className="text-left">Username</th>
            <th className="text-left">Name</th>
            <th className="text-left">Email</th>
          </tr>
        </thead>
        <tbody>{usersList}</tbody>
      </table>
    </Card>
  );
}
