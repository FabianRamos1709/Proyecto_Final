import { useState } from "react" 
import styled from "@emotion/styled"

const Select = styled.select`
    width: 20%;
    display: block;
`
const useSelectPersonaje = (label, opciones) => {

    const [state, setState] = useState('') 

    const SelectPersonaje = () => (
        <>
        <label>{label}</label>

        <Select
            value = {state} 
            onChange = {e => setState(e.target.value)} 
        >
            <option value = "" > Seleccione un personaje </option>

            {opciones.map( opcion => (
                <option
                key = {opcion.nombre}
                value = {opcion.id}
                > {opcion.nombre} </option>
            ))}     
        </Select>
        </>
    )

        return [state, SelectPersonaje]
}

export default useSelectPersonaje
