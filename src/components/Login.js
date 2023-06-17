import React, { useState } from 'react';
function Login(){
    const [name, setName] = useState('');
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(`Name: ${name}`);
    };
    return (
       <form onSubmit={handleSubmit}>
            <label className='col-lg-4'>Name:
                <input type='text' value={name} placeholder='Please input your name' className='form-control' onChange={(event)=>{setName(event.target.value)}}></input>

            </label>
            <button type='submit' className='btn btn-danger'>Submit</button>
       </form>
    );
}

export default Login;