import styled from '@emotion/styled'

const Contenedor = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
`

const Texto = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`

const Informacion = (info) => {

    const {name, species, gender, origin, image} = info
  return (
    <Contenedor>
        <img src= {`${image}`} alt = "Foto Personaje" />
        <Texto> Nombre: <span>{name}</span></Texto>
        <Texto> Especie: <span>{species}</span></Texto>
        <Texto> Género: <span>{gender}</span></Texto>
        <Texto> Origen: <span>{origin.name}</span></Texto>
    </Contenedor>
  )
}

export default Informacion