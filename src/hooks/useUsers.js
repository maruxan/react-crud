import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
// axios
import httpClient from '../axios/custom-client';
// utils
import { store } from '../utils/utils';

const useUsers = () => {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    await httpClient
      .get('/users')
      .then((res) => res.data)
      .then((data) => store.setItem('users', data))
      .catch((err) => console.log(err));
  }

  useEffect(async () => {
    if (!store.getItem('users')) {
      await fetchUsers();
    }
    const cachedUsers = store.getItem('users');
    setUsers(cachedUsers);
  }, []);

  const findUserByUsername = (username) => {
    return users.find((user) => user.username.toLowerCase() === username.toLowerCase());
  };

  const addUser = (newUser) => {
    const newUsersList = [...users, { ...newUser, id: uuid() }];
    store.setItem('users', newUsersList);
    setUsers(newUsersList);
  };

  const deleteUser = (userId) => {
    const filteredUsers = users.filter((user) => user.id !== userId);
    store.setItem('users', filteredUsers);
    setUsers(filteredUsers);
  };

  return { users, addUser, findUserByUsername, deleteUser };
};

export default useUsers;
