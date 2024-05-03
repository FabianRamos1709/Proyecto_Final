import { useEffect, useState } from "react"
import useSelectPersonaje from "../hooks/useSelectPersonaje"


const Api = () => {

  const [personajes, setPersonajes] = useState([])

  const [personaje, SelectPersonaje] = useSelectPersonaje("Selecciona el personaje que quieres ver:", personajes)

  useEffect( () =>{
    const consultarApi = async() => {
        const url = "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15"
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
 
  return (
    <>
     
    </>
  )
}

export default Api