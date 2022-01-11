// hooks
import useUsers from './hooks/useUsers';
// components
import Users from './components/Users/Users';
import AddUser from './components/AddUser/AddUser';

function App() {
  const { users, addUser } = useUsers();

  return (
    <div className="container mx-auto max-w-3xl">
      <Users users={users} />
      <AddUser addUser={addUser} />
    </div>
  );
}

export default App;
