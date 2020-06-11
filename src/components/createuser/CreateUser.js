import React, {useState} from 'react';
import './CreateUser.css'

const CreateUser = () => {
    const [userName, setUserName] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [password, setPassword] = useState('');

    const fetchApi = () =>{
        const data = {
          "username": userName,
          "displayName": displayName,
          "password": password
        }
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(data)
        };
    
        fetch('https://kwitter-api.herokuapp.com/users', 
        options)
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    
      }

    const onSubmit = (event) =>{
        event.preventDefault()

        if(displayName !== '' 
        && password !== '' && userName !== ''){
        fetchApi();
        resetSignUp();
        
        }
        else{alert('ERROR SIGNING UP')}
        
    }

    const resetSignUp = () =>{
        setUserName('');
        setDisplayName('');
        setPassword('');
    }
    
    return (
       <div className='createuser'>
           <form onSubmit={onSubmit}>
                <div>

                    <input 
                    type='text' 
                    name='userName' 
                    placeholder='Username'
                    autoFocus 
                    value={userName} 
                    onChange={(event)=>setUserName(event.target.value)}
                    />
                        
                </div>

                <div>

                    <input 
                    type='text' 
                    name='displayName' 
                    placeholder='DisplayName'
                    value={displayName} 
                    onChange={(event)=>setDisplayName(event.target.value)}
                    className='inputmargin'
                    />
                        
                </div>

                <div>

                    <input 
                    type='password' 
                    name='password' 
                    placeholder='password' 
                    value={password} 
                    onChange={(event)=>setPassword(event.target.value)}
                    className='inputmargin'
                    />
                        
                </div>

                <button className='signup'>Sign Up</button>

           </form>
           

       </div>
    )
}

export default CreateUser;
