import { useState, useEffect } from 'react';
import httpClient from '../axios/custom-client';
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

  return { users };
};

export default useUsers;
