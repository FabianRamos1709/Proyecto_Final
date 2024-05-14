import styled from '@emotion/styled'

const Contenedor = styled.div`
    font-family: 'Sedan', sans-serif;
    height: 460px;
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
    position:relative;

    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: scale(1.3);
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
    left: 0px;
    right: 0px;
    bottom: 20px;
    background-color: #E1AD01;
    position: relative;
    span{
        margin:auto;
        font-size: 20px;
        font-weight: 600;
    }
`
const Texto = styled.div`
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 700;
    width: 50%;
    position:
    text-align: center;
    span{
        font-weight: 550; 
    } 
`
const Detalles = styled.div`
    display: flex;
    margin: 4px auto;
    width: 70%;
`
const Texto1 = styled.div`
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 700;
    width: 100%;
    margin-top: 5px;
    text-align: center;
    span{
        font-weight: 500; 
        font-size: 18px;
    } 
`
const Informacion = ({info}) => {

    const {id, name, species, gender, image, status, location} = info

    const colorByStatus = {
        Dead: "red accent-1",
        Alive: "green accent-1",
        unknown: "yellow lighten-3"
    }
    const colorByGender = {
        Male: "blue accent-1",
        Female: "pink accent-1",
        unknown: "yellow lighten-3"
    }

   return (
    <Contenedor>
        <Sombra>
            <Foto src= {image} alt = "Foto Personaje" />
            <ContenedorNombre>
                <span>{name}</span>
            </ContenedorNombre>
        </Sombra>
        <Texto1> Especie <br/> <span>{species}</span></Texto1>
        <Texto1> Localizacion <br/> <span>{location.name}</span></Texto1>
        <Detalles>
            <Texto> Género <br/> <span className= {`${colorByGender[gender]}`} key={gender}>{gender}</span></Texto>
            <Texto> Estado <br/> <span className= {`${colorByStatus[status]}`} key={status}>{status}</span></Texto>
        </Detalles>
    </Contenedor>
  )
}

export default Informacion