import React, { useRef, useState } from 'react';
// components
import Card from '../ui/Card';
import { FiUserCheck } from 'react-icons/fi';

const initialFields = {
  name: '',
  email: '',
};

export default function UpdateUser({ findByUsername, updateUser }) {
  const userInputRef = useRef();
  const [foundUser, setFoundUser] = useState(null);
  const [updateFields, setUpdateFields] = useState(initialFields);

  const fieldChangeHandler = (event) => {
    const { name, value } = event.target;
    setUpdateFields((prevFields) => {
      return { ...prevFields, [name]: value };
    });
  };

  const resetForm = () => {
    setFoundUser(null);
    userInputRef.current.value = '';
    setUpdateFields(initialFields);
  };

  const findUserHandler = () => {
    const user = findByUsername(userInputRef.current.value) || 'NOT_FOUND';
    setFoundUser(user);
  };

  const updateUserHandler = () => {
    updateUser(foundUser.id, updateFields);
    resetForm();
  };

  let userAction;
  switch (foundUser) {
    // user query empty
    case null:
      userAction = (
        <button
          onClick={findUserHandler}
          className="w-full mt-3 p-3 rounded-md bg-purple-800 text-white hover:bg-purple-900 transition-all">
          Update user
        </button>
      );
      break;

    // find user query returned undefined
    case 'NOT_FOUND':
      userAction = (
        <div className="grid grid-cols-2 gap-3 mt-3">
          <p className="p-3">User not found</p>
          <button
            onClick={resetForm}
            className="p-3 rounded-md text-purple-800 bg-purple-100 hover:bg-purple-200 transition-all">
            Cancel
          </button>
        </div>
      );
      break;

    // successful user query
    default:
      userAction = (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
          <p className="p-3 col-span-2 md:col-span-1">Update this user?</p>
          <button
            onClick={resetForm}
            className="p-3 rounded-md text-purple-800 bg-purple-100 hover:bg-purple-200 transition-all">
            Cancel
          </button>
          <button
            onClick={updateUserHandler}
            className="p-3 rounded-md bg-purple-800 text-white hover:bg-purple-900 transition-all">
            Update
          </button>
        </div>
      );
  }

  return (
    <Card>
      <div className="flex items-center mb-2 text-xl font-bold ">
        <FiUserCheck className="text-purple-800 mr-3" />
        <h1>Update user</h1>
      </div>
      <div className="mt-4 grid md:grid-cols-3 gap-3">
        <div className="flex flex-col">
          <label htmlFor="username" className="font-bold">
            Username
          </label>
          <input
            type="text"
            ref={userInputRef}
            placeholder="Insert username"
            className="mt-2 rounded-md bg-gray-100 border-transparent focus:border-purple-800 focus:bg-white focus:ring-0"
            disabled={foundUser === null ? false : true}
          />
        </div>
        {foundUser && foundUser !== 'NOT_FOUND' && (
          <div className="md:col-span-2 grid grid-cols-2 gap-3">
            <div className="flex flex-col">
              <label className="font-bold" htmlFor="name">
                New name
              </label>
              <input
                type="text"
                name="name"
                value={updateFields.name}
                onChange={fieldChangeHandler}
                placeholder={foundUser.name}
                className="mt-2 rounded-md bg-gray-100 border-transparent focus:border-purple-800 focus:bg-white focus:ring-0"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="font-bold" htmlFor="email">
                New email
              </label>
              <input
                type="text"
                name="email"
                value={updateFields.email}
                onChange={fieldChangeHandler}
                placeholder={foundUser.email}
                className="mt-2 rounded-md bg-gray-100 border-transparent focus:border-purple-800 focus:bg-white focus:ring-0"
                required
              />
            </div>
          </div>
        )}
      </div>
      {userAction}
    </Card>
  );
}
