import React from 'react';
// components
import Card from '../ui/Card';
import { FiUserPlus } from 'react-icons/fi';

export default function AddUser() {
  return (
    <Card>
      <div className="flex items-center mb-2 text-xl font-bold ">
        <FiUserPlus className="text-purple-800 mr-3" />
        <h1>Add user</h1>
      </div>
    </Card>
  );
}
