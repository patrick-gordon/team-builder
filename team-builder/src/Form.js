import React, {useState, useEffect} from 'react'

//ID generator
let idCounter = () => {
    let id=0;
    return function countUp() {
        return id++
    }
}
const idUp = idCounter();

export default function Form(props) {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        role: '' 
    })

    useEffect( () =>{
        setFormState(props.update)
    },[props.update])

    const changeHandler = event => {
        setFormState({...formState, [event.target.name]: event.target.value});
    }

    const submitHandler = e => {
        e.preventDefault();
        if(!props.isUpdating){
       props.setTeam([...props.team, {...formState, id: idUp()}])
        } else if (props.isUpdating){
            
            const updateList = props.members.filter(member => member.id !== formState.id)
            const updateListTwo = [...updateList, formState]
            props.setTeam(updateListTwo)
        }

       setFormState({
           name: '',
           email: '',
           role: '' 
       })
    }


    return (
        <div>
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
                    value={formState.email}
                    onChange={changeHandler}
                    />
                </label>
                <label>
                    Role
                    <input 
                    type='text'
                    placeholder='Role'
                    name='role'
                    value={formState.role}
                    onChange={changeHandler}
                    />
                </label>
                <button>{props.isUpdating ? 'Update Team Member': 'Add to Team'}</button>
            </form>
        </div>
 
    )
}
