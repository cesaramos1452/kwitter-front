import React, {useState} from 'react';


const CreateMessages = (props) => {
    console.log(props.messages.messages)
    const [userMesssage, setUserMessage] = useState('')

    const setUserInput = (event) =>{
        setUserMessage(event.target.value)
        
    }

    const clicker = (event) =>{
        event.preventDefault()
        props.createMessage({text:userMesssage})
        setUserMessage('')
    }
    return (
        <div>
            <form onSubmit={clicker}>
                <div>
                    <textarea 
                    value={userMesssage}
                    onChange={setUserInput}
                    placeholder='Write Message Here'
                    >

                    </textarea>
                </div>
                <button>Click</button>
             </form>
        </div>
    );
}

export default CreateMessages;
