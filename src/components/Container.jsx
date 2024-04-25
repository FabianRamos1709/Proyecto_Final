import categoria1 from '../img/categoria1.jpg'
import categoria2 from '../img/categoria2.jpg'
import categoria3 from '../img/categoria3.jpg'
import producto1 from '../img/productoVendido1.jpg'
import producto2 from '../img/productoVendido2.jpg'
import producto3 from '../img/productoVendido3.jpg'
import carniceria from '../img/carniceria.jpg'
import styled from '@emotion/styled'
import { useEffect, useRef } from 'react';

const Subtitulo = styled.h1`
  padding-top: 30px;
  margin: 0;
  padding-bottom: 10px;
  color: #FFF;
  font-family: 'Sedan', sans-serif;
  font-weight: 400;
  text-align: center;
  font-size: 35px;
`
const ImgCarousel = styled.img`
  width: 80%;
  height: 400px;
`
const ContenedorCarrousel = styled.div`
  width: 80%;
  height: 400px;
  margin: auto;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    width: 100%;
    height:300px;
  }
`
const LineaSeparadora = styled.hr`
  margin-top: 0;
  margin-bottom: 30px;
  height: 2px;
  background-color: #E1AD01;
  width: 80%;
`
const LineaSeparadora2 = styled.hr`
  margin-top: 0;
  margin-bottom: 30px;
  height: 2px;
  background-color: #E1AD01;
  width:100%;
`
const Tarjeta = styled.div`
  display: flex;
  text-align:center;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  padding-left: 80px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`
const Producto = styled.img`
  width: 132.02px;
  height: 200px;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`
const Subtitulos2 = styled.h2`
  color: #FFF;
  font-family: 'Sedan', sans-serif;
  font-size: 20px;
  margin-top: 0px;
  margin-bottom: 10px;
`
const Descripcion = styled.div`
  height: 400px;
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`
const ImagenDescripcion = styled.img`
  height: 400px;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`
const TextoDescripcion = styled.div`
  height: 400px;
  width: 50%;
  text-align: center;
  color: #FFF;
  font-family: 'Sedan', sans-serif;
  font-size: 20px;
  padding-left: 20px; 
  padding-right: 20px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
    height: 400px;
  }
`
function Container() {
    const carouselRef = useRef(null);

    const changeImage = () => {
      const carouselInstance = window.M.Carousel.getInstance(carouselRef.current);
      carouselInstance.next();
    };

    useEffect(() => {
      // Inicializando el carrusel
      if (carouselRef.current) {
        window.M.Carousel.init(carouselRef.current, {
          fullWidth: false,
          indicators: true,
        });
      }
      const interval = setInterval(() => {
        changeImage();
      }, 4000); // Cambiar la imagen cada 4 segundos

      return () => clearInterval(interval);
      
    }, []);

    return (
        <div>
          <section>
            <Subtitulo>Categorias Principales</Subtitulo>
            <LineaSeparadora/>
            <ContenedorCarrousel ref={carouselRef} className="carousel carousel-slider">
                    <a className="carousel-item" href="#one!"><ImgCarousel src={categoria1}/></a>
                    <a className="carousel-item" href="#two!"><ImgCarousel src={categoria2}/></a>
                    <a className="carousel-item" href="#three!"><ImgCarousel src={categoria3}/></a>
            </ContenedorCarrousel>
          </section>  
          <section className='red darken-4'>
            <Subtitulo>Productos Más Populares</Subtitulo>
            <LineaSeparadora/>
            <Tarjeta>
              <div className="row">
                <div className="col s12 m10">
                  <span className="card-title">
                    <Subtitulos2>Carne de Res</Subtitulos2>
                    <LineaSeparadora2/>
                  </span>
                  <div className="card medium">
                    <div className="card-image">
                      <Producto src={producto1}/>
                    </div>
                    <div className="card-content ">
                      <p>
                        Nuestra carne Angus proviene de ganado alimentado naturalmente, 
                        sin hormonas añadidas, asegurando una carne pura y saludable. 
                      </p>
                    </div>
                    <div className="card-action grey darken-4">
                      <a className="white-text" href="#">Precio: 50.000 lb</a>
                    </div>
                  </div>
                </div>  
              </div>
              <div className="row">
                <div className="col s12 m10">
                  <span className="card-title">
                    <Subtitulos2>Costilla de Cerdo</Subtitulos2>
                    <LineaSeparadora2/>
                  </span>
                  <div className="card medium">  
                    <div className="card-image">
                      <Producto src={producto2}/>  
                    </div>
                    <div className="card-content">
                      <p>
                      Nuestra carne Angus proviene de ganado alimentado naturalmente, 
                      sin hormonas añadidas, asegurando una carne pura y saludable. 
                      </p>
                    </div>
                    <div className="card-action grey darken-4">
                      <a className="white-text" href="#">Precio: 30.000 lb</a>
                    </div>
                  </div>
                </div>  
              </div>
              <div className="row">
                <div className="col s12 m10">
                  <span className="card-title">
                    <Subtitulos2>Alas de Pollo</Subtitulos2>
                    <LineaSeparadora2/>
                  </span>
                  <div className="card medium">
                    <div className="card-image">
                      <Producto src={producto3}/>
                    </div>
                    <div className="card-content">
                      <p>
                      Nuestra carne Angus proviene de ganado alimentado naturalmente, 
                      sin hormonas añadidas, asegurando una carne pura y saludable.
                      </p>
                    </div>
                    <div className="card-action grey darken-4">
                      <a className="white-text" href="#">Precio: 10.000 lb</a>
                    </div>
                  </div>
                </div>  
              </div>
            </Tarjeta>
          </section>  
          <section>
            <Subtitulo>Nuestra Carnicería</Subtitulo>
            <LineaSeparadora/>
            <Descripcion>
              <ImagenDescripcion src={carniceria}/>
              <TextoDescripcion>
                <h5> Calidad Asegurada </h5>
                <p>
                <br/>Bienvenido a nuestra carnicería, donde la calidad 
                  es nuestra máxima prioridad. Aquí, cada corte de carne 
                  es seleccionado con el máximo cuidado y atención para 
                  garantizar que solo lo mejor llegue a tu mesa.<br/><br/>
                  Nuestro mostrador ofrece una amplia variedad de cortes 
                  frescos y jugosos, desde filetes tiernos hasta sabrosas 
                  costillas y jugosas hamburguesas, todo proveniente de ganado 
                  cuidadosamente seleccionado y criado de manera responsable.
                </p>
              </TextoDescripcion>
            </Descripcion>
          </section>
        </div>
    );
  }
  
  export default Container;