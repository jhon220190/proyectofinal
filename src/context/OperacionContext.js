import React, {useState, createContext} from 'react'

export const OperacionContext = createContext();

const OperacionContextProvider = (props) => {
    const [operacion, setOperacion] = useState();

    const operacionModificar = (oper) => {
        setOperacion(oper)
    }

    return (
        <OperacionContext.Provider value={{operacion, operacionModificar}}>
            {props.children}
        </OperacionContext.Provider>
    )
}

export default OperacionContextProvider;