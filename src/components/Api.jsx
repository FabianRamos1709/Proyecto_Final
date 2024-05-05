import FormaBuscador from "./FormaBuscador"
import { useState, useEffect } from "react"
import Informacion from "./Informacion"

const Api = () => {

  const[characters,setCharacters] = useState("")
  const[info, setInfo] = useState({})
  
  useEffect(() => {
    if(characters !== ""){
      const buscarCharacter = async () => {
        const url = `https://rickandmortyapi.com/api/character/${characters}`  

        const respuesta = await fetch(url)
        const info = await respuesta.json()
      
        setInfo(info)
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