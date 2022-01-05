import React, {useState} from 'react';
import './App.css';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';

function App() {
  const [usersList, setUserList] = useState([]);
  const addUserHandler = (uName, uAge) => {
       setUserList( (prevUsersList) => {
            return[...prevUsersList, {name:uName, age:uAge, id:Math.random().toString()}]
       })
  }
  return (
    <div>
     <AddUser onAddUser={addUserHandler}/>
     <UserList users={usersList}/>
    </div>
  );
}

export default App;
