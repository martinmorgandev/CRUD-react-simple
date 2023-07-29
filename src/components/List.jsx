import React, { useState } from 'react'

function List({global, setGlobal}) {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [idTemp, setIdTemp] = useState('')

    const drop = (id) => {
         const nuevoArray = global.filter((item) => {
            return item.id !== id
         })
         setGlobal(nuevoArray)
    }

    const edit = (id) => {

        setGlobal(global.map((item) => {
            //vamos recorriendo UNO POR UNO
                if(item.id === id ){
                    //si uno de estos cumplio
                    setName(item.name)
                    setAge(item.age)
                    setIdTemp(item.id)
                    //cambia el objeto en la posicion que estamos
                    return {...item, check: !item.check}
                }
                // si no solo ve pasando los demas
                return item
            })
        )
    }

    const submit = (e) => {
        e.preventDefault()

        setGlobal(global.map((item) => {
            if(item.id === idTemp ){
                return {...item, name: name, age: age}
            }
            return item
        })
    )
    }


  return (
    <>
        {global.map((item) => {
             return  <ul key={item.id}>
                    {item.check == true ? 
                    <>
                    <form onSubmit={submit}>  
                       <input 
                        type="text"
                        name='name'
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                        />
                        <input 
                        type="text"
                        name='age'
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        />
                       {/* <button type='submit'>Update</button> */}
                       <button type='submit'>Update</button>
                    </form>
                    <button onClick={() => drop(item.id)}>delete</button>
                    <button onClick={() => edit(item.id)}>Edit</button>
                    </>
                    :
                    <>
                        <li>{item.id}</li>
                        <li>{item.name}</li>
                        <li>{item.age}</li>
                        <button onClick={() => drop(item.id)}>delete</button>
                        <button onClick={() => edit(item.id)}>Edit</button>

                    </>
                    }
                    
                </ul>
            
        })}
    </>
  )
}

export default List