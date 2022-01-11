import React, { useRef, useState } from 'react';
// components
import Card from '../ui/Card';
import { FiUserX } from 'react-icons/fi';

export default function DeleteUser({ findByUsername, deleteUser }) {
  const userInputRef = useRef();
  const [foundUser, setFoundUser] = useState(null);

  const resetForm = () => {
    setFoundUser(null);
    userInputRef.current.value = '';
  };

  const findUserHandler = () => {
    const user = findByUsername(userInputRef.current.value);
    setFoundUser(user);
  };

  const deleteUserHanlder = () => {
    deleteUser(foundUser.id);
    resetForm();
  };

  let userAction;
  switch (foundUser) {
    case null:
      userAction = (
        <button
          onClick={findUserHandler}
          className="w-full mt-3 p-3 rounded-md bg-purple-800 text-white hover:bg-purple-900 transition-all">
          Delete user
        </button>
      );
      break;

    case undefined:
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

    default:
      userAction = (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
          <p className="p-3 col-span-2 md:col-span-1">Delete this user?</p>
          <button
            onClick={resetForm}
            className="p-3 rounded-md text-purple-800 bg-purple-100 hover:bg-purple-200 transition-all">
            Cancel
          </button>
          <button
            onClick={deleteUserHanlder}
            className="p-3 rounded-md bg-purple-800 text-white hover:bg-purple-900 transition-all">
            Delete
          </button>
        </div>
      );
  }

  return (
    <Card>
      <div className="flex items-center mb-2 text-xl font-bold ">
        <FiUserX className="text-purple-800 mr-3" />
        <h1>Delete user</h1>
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
        {foundUser && (
          <>
            <div>
              <label className="font-bold">Name</label>
              <p className="py-3 mt-1">{foundUser.name}</p>
            </div>
            <div>
              <label className="font-bold">Email</label>
              <p className="py-3 mt-1">{foundUser.email.toLowerCase()}</p>
            </div>
          </>
        )}
      </div>
      {userAction}
    </Card>
  );
}
