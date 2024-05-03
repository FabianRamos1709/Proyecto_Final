import { useState } from "react" 

const useSelectPersonaje = (label, opciones) => {

    console.log(opciones)
    const [state, setState] = useState('') 

    const SelectPersonaje = () => (
        <>
        <label>{label}</label>

        <select
            value = {state} 
            onChange={e => setState(e.target.value)} 
        >
            <option value = "" > Seleccione un personaje </option>

            {opciones.map(opcion => (
                <option
                key = {opcion.id}
                value = {opcion.nombre}
                >{opcion.nombre}</option>
            ))}    
        </select>
        </>
    )
        return [state, SelectPersonaje]   
    }

    export default useSelectPersonaje
