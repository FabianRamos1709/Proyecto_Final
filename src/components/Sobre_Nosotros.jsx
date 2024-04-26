import styled from "@emotion/styled"
import carniceria2 from "../img/carniceria2.avif"
import carniceria3 from "../img/carniceria3.jpg"
import historia1 from "../media/historia.mp4"

const LineaSeparadora = styled.hr`
  margin-top: 0;
  margin-bottom: 30px;
  height: 2px;
  background-color: #E1AD01;
  width: 500px;
`
const Historia = styled.div`
    display: flex;
    height: auto;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`
const ImagenHistoria = styled.img`
    width: 50%;
    height: 400px;
    @media (max-width: 768px) {
        width: 100%;
        height: auto;
      }
` 
const TextoHistoria = styled.div`
    width: 50%;
    padding: 30px;
    @media (max-width: 768px) {
        width: 100%;
        padding: 20px;
        height: 400px;
    }
`
    
const Sobre_Nosotros = () => {
  return (
    <>
        <section className="center">
            <h3 className=" white-text "> Nuestra Historia </h3>
            <LineaSeparadora/>
            <video className="responsive-video" controls>
                <source src={historia1} type="video/mp4"/>
            </video>
            <br/><br/><br/>
        </section>
        <section className="red darken-4">
            <Historia>
                <TextoHistoria>
                    <h3 className="white-text accent-3 center"> Llegando a sus hogares </h3>
                    <LineaSeparadora/>
                    <p className="white-text center">
                    Al vecindario llegaba una nueva carnicería por el rumbo de Platón Sánchez; 
                    “La Carniceria Gourmet” se llamaba y, con el tiempo, la calidad de sus productos y su compromiso 
                    con el buen servicio y atención los fue haciendo cada día más populares con sus clientes.
                    <br/>
                    <br/>
                    Ante esto, y queriendo sorprender a su fiel clientela, se dio a la tarea de lanzar un 
                    nuevo producto que, sin imaginarlo se volvería uno de los sabores más populares del norte 
                    del país, un chicharrón que, a mordidas o guisado con salsita, sería el favorito de todo 
                    el Huila.
                    </p>
                </TextoHistoria>
                <ImagenHistoria src={carniceria2}/>    
            </Historia>
        </section>
        <section className="grey darken-4">
            <Historia>
                <ImagenHistoria src={carniceria3}/>    
                <TextoHistoria>
                    <h3 className="white-text accent-3 center"> Dejando Huella </h3>
                    <LineaSeparadora/>
                    <p className="white-text center">
                    Nos llevó a desarrollar nuestra marca propia, una marca que, desde su creación, 
                    ha estado comprometida con crear productos únicos como nuestros famosos empalmes cuadrados, 
                    el delicioso trompo, el bistec taquero, la deliciosa carne seca en sus distintas presentaciones
                    <br/><br/>
                    Compartiendo las recetas de la abuela, línea inspirada en la cocina 
                    tradicional norestense donde una variedad de guisos deliciosos y calientitos siempre están 
                    listos para llevar a la mesa de tu casa o trabajo, en presentaciones individuales, 
                    ½ litro o litro, ideales para que las compartas con quien gustes.
                    </p>
                </TextoHistoria>
            </Historia>
        </section>
    </>
  )
}

export default Sobre_Nosotros