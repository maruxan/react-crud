// hooks
import useUsers from './hooks/useUsers';
// components
import Users from './components/Users/Users';
import AddUser from './components/AddUser/AddUser';
import DeleteUser from './components/DeleteUser/DeleteUser';
import UpdateUser from './components/UpdateUser/UpdateUser';

function App() {
  const { users, addUser, findUserByUsername, deleteUser, updateUser } = useUsers();

  return (
    <div className="container mx-auto max-w-3xl">
      <Users users={users} />
      <AddUser addUser={addUser} />
      <DeleteUser findByUsername={findUserByUsername} deleteUser={deleteUser} />
      <UpdateUser findByUsername={findUserByUsername} updateUser={updateUser} />
    </div>
  );
}

export default App;
