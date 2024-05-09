import styled from '@emotion/styled'

const Contenedor = styled.div`
    font-family: 'Sedan', sans-serif;
    height: 400px;
    width: 300px;
    box-shadow: 0 10px 20px #000;
    background-size: cover;
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: hidden;
    background-color: #FFF;
    border-radius: 5%;
    margin:auto;

    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: scale(1.5);
    }
`
const Sombra = styled.div`
    background-color: #B71C1C;
    height: 250px;
    width: 400px;
    margin-left: -20px;
    position: relative;
    top: -80px;
    box-shadow: 0 2px 15px #000;
    transform: rotate(25deg);
`
const Foto = styled.img`
    height: 140px;
    width: 140px;
    position: relative;
    top: 180px;
    margin-left: 50px;
    border: none;
    border-radius: 50%;
    box-shadow: 0 2px 15px rgb(58,54,54);
    transform: rotate(-20deg);
`
const ContenedorNombre = styled.div`
    height: 30px;
    width: 100%;
    min-width: 100px;
    white-space: nowrap;
    text-overflow: ellipsis;
    left: 0px;
    right: 0px;
    bottom: 20px;
    background-color: #E1AD01;
    position: relative;
    border-bottom-left-radius: 15px;
`
const Texto = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`

const Informacion = ({info}) => {


    const {name, species, gender, image, status} = info

    const colorByStatus = {
        Dead: "red accent-3",
        Alive: "green accent-3",
        unknown: "yellow lighten-3"
    }

   return (
    <Contenedor>
        <Sombra>
            <Foto src= {image} alt = "Foto Personaje" />
            <ContenedorNombre>
                <Texto><span>{name}</span> </Texto> 
            </ContenedorNombre>
        </Sombra>
        <Texto> Especie: <span>{species}</span></Texto>
        <Texto> Género: <span>{gender}</span></Texto>
        <Texto> Estado: <span className= {`${colorByStatus[status]}`} key={status}>{status}</span></Texto>
    </Contenedor>
  )
}

export default Informacion