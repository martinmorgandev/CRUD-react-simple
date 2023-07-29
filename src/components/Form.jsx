import React, { useState } from 'react'
import List from './List'

function Form() {
    const [global, setGlobal] = useState([])

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [check, setCheck] = useState(false)

    const submit = (e) => {
        e.preventDefault()

        setGlobal([...global, {
            id: window.crypto.randomUUID(),
            name: name,
            age: age,
            check: check
        }])

        setName('')
        setAge('')
    }

    const onChange = (e) => {
        if(e.target.name === "name"){
            setName(e.target.value)
        }else if(e.target.name === "age"){
            setAge(e.target.value)
        }
    }

  return (
    <div>
        <form onSubmit={submit}>
            <label>Name</label>
            <input 
                type="text" 
                name='name'
                value={name}
                onChange={onChange}/>

            <label>Age</label>
            <input 
                type="text" 
                name='age'
                value={age}
                onChange={onChange}
                />

            <button type='submit'>Send</button>
        </form>
        {/* <p>{JSON.stringify(global)}</p> */}
        <List 
            global={global} 
            setGlobal={setGlobal}
            ></List>
    </div>

  )
}

export default Form