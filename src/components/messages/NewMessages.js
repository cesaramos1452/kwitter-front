import React, {useState} from 'react';
import './NewMessages.css'

const NewMessages = () =>{
    const fetchApi = () =>{

        const data = {
          "text": "take"
          
        }
        const options = {
          method: 'POST',

          headers: { 
            'Content-Type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNlc2FyYW1vczE0NTIiLCJpYXQiOjE1OTE4ODYxMzEsImV4cCI6MTU5MTk3MjUzMX0.OVfA33WyrZ3MMqW6dqQ2hjyTdCrtoVJipFE1qlW06aI' ,},
          
            body: JSON.stringify(data)
        };
    
        fetch('https://kwitter-api.herokuapp.com/messages', 
        options)
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    
      }
    return(
        <div className='compose-message'>
            {/* <form> */}

                <div>
                    <textarea rows='4' cols='20'/>
                </div>

                <button onClick={fetchApi}>Send</button>

            {/* </form> */}
        </div>
    )
}

export default NewMessages