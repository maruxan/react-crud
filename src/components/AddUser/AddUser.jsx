import React, { useState } from 'react';
// hooks
import useUsers from '../../hooks/useUsers';
// components
import Card from '../ui/Card';
import { FiUserPlus } from 'react-icons/fi';

const initialFields = {
  username: '',
  name: '',
  email: '',
};

export default function AddUser({ addUser }) {
  const [fields, setFields] = useState(initialFields);

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setFields((prevFields) => {
      return { ...prevFields, [name]: value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    addUser(fields);
    clearFields();
  };

  const clearFields = () => {
    setFields(initialFields);
  };

  return (
    <Card>
      <div className="flex items-center mb-2 text-xl font-bold ">
        <FiUserPlus className="text-purple-800 mr-3" />
        <h1>Add user</h1>
      </div>
      <form className="mt-4 grid md:grid-cols-3 gap-3" onSubmit={submitHandler}>
        <div className="flex flex-col">
          <label htmlFor="username" className="font-bold">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={fields.username}
            onChange={inputChangeHandler}
            className="mt-2 rounded-md bg-gray-100 border-transparent focus:border-purple-800 focus:bg-white focus:ring-0"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" className="font-bold">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={fields.name}
            onChange={inputChangeHandler}
            className="mt-2 rounded-md bg-gray-100 border-transparent focus:border-purple-800 focus:bg-white focus:ring-0"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={fields.email}
            onChange={inputChangeHandler}
            className="mt-2 rounded-md bg-gray-100 border-transparent focus:border-purple-800 focus:bg-white focus:ring-0"
            required
          />
        </div>
        <button
          type="submit"
          className="md:col-span-3 p-3 rounded-md bg-purple-800 text-white hover:bg-purple-900 transition-all">
          Add user
        </button>
      </form>
    </Card>
  );
}
