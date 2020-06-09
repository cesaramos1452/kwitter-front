import React from 'react';

const CreateUser = () => {
    return (
       <div name='createuser'>
           <div>
                <form>
                    <label htmlFor='username'>User name</label>
                    <input type='text' name='userName'/>
                </form>
           </div>

           <div>
                <form>
                    <label htmlFor='displayname'>Display name</label>
                    <input type='text' name='displayName'/>
                </form>
           </div>

           <div>
                <form>
                    <label htmlFor='password'>Password</label>
                    <input type='text' name='password'/>
                </form>
           </div>

       </div>
    )
}

export default CreateUser;
