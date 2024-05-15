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
    font-size: 18px; 
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
        const url = `https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,40,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70`
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
        <StyledButton type="submit" >Buscar personaje
          <i className="material-icons right">search</i>
        </StyledButton>
    </form>
    {error && <Error> No has seleccionado un personaje </Error> }
    </>
  )
}

export default FormaBuscador