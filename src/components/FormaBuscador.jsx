import { useEffect, useState } from "react"
import useSelectPersonaje from "../hooks/useSelectPersonaje"
import Error from "./Error"
import styled from "@emotion/styled"

const StyledButton = styled.button`
    background-color: #38b20d;
    box-shadow: 5px 5px rgba(0,0,0,0.5);
    font-weight: 700;
    color: black; 
    padding: 10px 20px; 
    font-size: 16px; 
    border: none; 
    border-radius: 10px;
    cursor: pointer; 
    transition: background-color 0.3s, color 0.3s; 

    &:hover {
        background-color: #5cee2a;
    }

    &:active {
      background-color: #37CC03; 
    }
    &:focus {
      outline: none;
      background-color: #37CC03; 
    }
`
const FormaBuscador = ({setCharacters}) => {

    const [personajes, setPersonajes] = useState([])

    const[error, setError] = useState(false) 

    const [personaje, SelectPersonaje] = useSelectPersonaje("Selecciona el personaje que quieres ver:", personajes)
    
  useEffect( () =>{
    const consultarApi = async() => {
        const numbers = Array.from({ length: 100 }, (_, index) => index + 1);
        const url = `https://rickandmortyapi.com/api/character/${numbers}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
    
        const arrayPersonajes = resultado.map(personaje => {
            const objeto = {
                id: personaje.id, 
                nombre: personaje.name
            }
            return objeto
        })
        setPersonajes(arrayPersonajes)
    }
    consultarApi();
  }, [])
 
  const handleSubmit = e => {
    e.preventDefault()
    if (personaje === ""){
      setError(true)

      return
    }
    setError(false) //desactiva el error
    
    setCharacters(
      personaje
    )
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <SelectPersonaje/>
        <StyledButton type="submit">
          Buscar Personaje
        </StyledButton> 
    </form>
    {error && <Error> No has seleccionado un personaje </Error> }
    </>
  )
}

export default FormaBuscador