import React, {useState} from 'react';
import './NewMessages.css'

const NewMessages = () =>{
    const fetchApi = () =>{

        const data = {
          "text": "take"
          
        }
        const options = {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            
            
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
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