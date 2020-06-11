import React, {useState} from 'react';
import './NewMessages.css'

const GetMessages = () =>{
    const fetchApi = () =>{

        fetch('https://kwitter-api.herokuapp.com/messages?limit=1&offset=0&username=cesaramos1452')
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    
      }
    return(
        <div>
            <button onClick={fetchApi}>Click</button>
        </div>
    )
}

export default GetMessages