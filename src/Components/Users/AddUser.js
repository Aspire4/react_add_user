import React,{useState} from 'react';
import classes from './AddUser.module.css'
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

function AddUser(props) {
    const [userName, setUserName] = useState('')
    const [age, setAge] = useState('')
    const [error, setError]= useState();
     const addUserHandler = (e) =>{
         e.preventDefault();
         if(userName.trim().length === 0 || age.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values)'
            });
            return;
         }
         if(+age < 1){
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (>  0)'
            });
             return;
         }
        props.onAddUser(userName, age) 
         setUserName('')
         setAge('')
     }

     const userChange = (e)=>{
      setUserName(e.target.value)
     }
     const ageChange = (e)=>{
        setAge(e.target.value)
       }

     const errorHandler = () => {
         setError(null);
     } 

    return (
         <div>
       { error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username' >Username</label> 
          <input id='username' type='text' value={userName} onChange={userChange}/>
          <label htmlFor='age' >Age (Years)</label> 
          <input id='age' type='number' value={age} onChange={ageChange}/>
          <Button type='submit'>Add User</Button>
        </form>
        </Card>
        </div>
    )
}
    
export default AddUser;
