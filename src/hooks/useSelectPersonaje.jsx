import { useState } from "react" 
import styled from "@emotion/styled"

const Select = styled.select`
    width: 50%;
    display: block;
    text-align: center;
    margin: 30px auto;
    border-radius: 20px;
    &:hover{
        background-color: #F5F5DC;
    }
`
const Label = styled.label`
    font-size: 20px;
    font-family: 'Sedan', sans-serif;
    color: #F5F5DC;
`
const ContenedorSelector = styled.div`
    margin-top: 40px;
`
const useSelectPersonaje = (label, opciones) => {

    const [state, setState] = useState('') 

    const SelectPersonaje = () => (
        <ContenedorSelector>
            <Label>{label}</Label>
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
        </ContenedorSelector>
    )

        return [state, SelectPersonaje]
}

export default useSelectPersonaje
