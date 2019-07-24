import React, {useState} from 'react'

export default function Form() {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        role: ''
        
    })

    const changeHandler = event => {
        setFormState({...formState, [event.target.name]: event.target.value});
    }

    const submitHandler = e => {
        e.preventDefault();
    }


    return (
            <form onSubmit={submitHandler}>
                <label>
                    Name
                    <input 
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={formState.name}
                    onChange={changeHandler}
                    />
                </label>
                <label>
                    Email
                    <input 
                    type='text'
                    placeholder='Email'
                    name='email'
                    value={formState.name}
                    onChange={changeHandler}
                    />
                </label>
                <label>
                    Role
                    <input 
                    type='text'
                    placeholder='Role'
                    name='role'
                    value={formState.name}
                    onChange={changeHandler}
                    />
                </label>
                <button>Submit</button>
            </form>
 
    )
}
