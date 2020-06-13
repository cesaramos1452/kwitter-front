import React, {useEffect} from 'react';


const CreateMessages = (props) => {
    const clicker = () =>{
        props.createMessage({text: 'hello'})
    }
    console.log()
    return (
        <div>
            <button onClick={clicker}>press</button>
        </div>
    );
}

export default CreateMessages;
