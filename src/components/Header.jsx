import styled from "@emotion/styled"
import header1 from '../img/header1.jpg'
import Navbar from "../components/Navbar"

const Encabezado = styled.div`
    height: 400px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${header1});
    background-size: cover;
    @media (max-width: 768px) {
      background-size: 768px 300px;
    }
`
const Titulo = styled.h1`
    padding: 0px;
    margin: auto;
    color: #FFF;
    font-family: 'Sedan', sans-serif;
    font-weight: 400;
    text-align: center;
    position: absolute;
    top: 25%;
    left: 18%;
    @media (max-width: 768px) {
      font-size: 2.5em;
    }
`

const Header = () => {
  return (
    <Encabezado>
        <Titulo>LA CARNICERÍA GOURMET</Titulo>
        <Navbar/>
    </Encabezado>
  )
}

export default Header