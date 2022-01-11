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
    <div className="max-w-6xl p-6 mx-auto lg:grid grid-cols-3 gap-6">
      <div className="col-span-2">
        <Users users={users} />
      </div>
      <div>
        <AddUser addUser={addUser} />
        <DeleteUser findByUsername={findUserByUsername} deleteUser={deleteUser} />
        <UpdateUser findByUsername={findUserByUsername} updateUser={updateUser} />
      </div>
    </div>
  );
}

export default App;
