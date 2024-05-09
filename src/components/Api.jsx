import FormaBuscador from "./FormaBuscador"
import { useState, useEffect } from "react"
import Informacion from "./Informacion"
import styled from "@emotion/styled"

const Info = styled.div`
  padding-top: 25px;
  height: 450px;
  width: 50%;
`
const ContenedorFormulario = styled.div`
  width: 50%;
  height: 450px;
  text-align: center;
  background-color: #b71c1c;
`
const ContenedorFormInfo = styled.div`
  display:flex;
`
const LineaSeparadora = styled.hr`
  margin-top: 0;
  margin-bottom: 30px;
  height: 2px;
  background-color: #E1AD01;
  width: 80%;
`

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
    <ContenedorFormInfo> 
     <ContenedorFormulario>
     <h3 className="white-text"> RICK AND MORTY </h3>
     <LineaSeparadora/>
          <FormaBuscador
            setCharacters = {setCharacters}
          />
         </ContenedorFormulario>
         <Info>
            {info.name && <Informacion info = {info}/>} 
         </Info>
    </ContenedorFormInfo>
  </>
  )
}

export default Api