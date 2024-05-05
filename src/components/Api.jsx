import FormaBuscador from "./FormaBuscador"
import { useState, useEffect } from "react"
import Informacion from "./Informacion"

const Api = () => {

  const[characters,setCharacters] = useState({})
  const[info, setInfo] = useState({})
  console.log(characters)

  useEffect(() => {
    if(Object.keys(characters).length > 0){
      const buscarCharacter = async () => {
        const personaje = characters
        const url = `https://rickandmortyapi.com/api/character/${personaje}`  

        const respuesta = await fetch(url)
        const info = await respuesta.json()
      
        setInfo(info.DISPLAY[personaje])
      }
      buscarCharacter()
    }
  }, [characters])
  

  return (
    <>
         <FormaBuscador
          setCharacters = {setCharacters}
         />
         {info.name && <Informacion info = {info}/>} 
    </>
  )
}

export default Api