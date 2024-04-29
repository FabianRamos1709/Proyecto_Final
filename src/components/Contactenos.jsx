import { useEffect } from 'react';

import styled from '@emotion/styled';
import Mapa from "../components/Mapa"

const Subtitulo2 = styled.h1`
  padding-top: 30px;
  margin: 0;
  padding-bottom: 10px;
  color: #FFF;
  font-family: 'Sedan', sans-serif;
  font-weight: 400;
  text-align: center;
  font-size: 35px;
`;

const Subtitulo3 = styled.h2`
  margin: 0;
  color: #FFF;
  font-family: 'Sedan', sans-serif;
  font-weight: 400;
  text-align: left;
  font-size: 15px;
`;

const LineaSeparadora = styled.hr`
  margin-top: 0;
  margin-bottom: 30px;
  height: 2px;
  background-color: #E1AD01;
  width: 80%;
`;

const ContenedorGeneral = styled.div`
  height: 600px;
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContenedorUbicacion = styled.div`
  height: 570px;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
    height: 400px;
  }
`;

const ContenedorContactenos = styled.div`
  height: 570px;
  width: 50%;
  font-family: 'Sedan', sans-serif;
  font-size: 20px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
    height: 400px;
  }
`;

const ContenedorComentario = styled.textarea`
  height: 100px;
  width: 100%;
  margin-top: 10px;
  font-size: 17px;
  border-radius: 100px
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
`;

const ContenedorBoton = styled.div`
  margin-top: 150px;
  font-size: 17px;
  border-radius: 100px
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
`;

const Contactenos = () => {
  useEffect(() => {
    window.M.AutoInit();
  }, []);

  return (
    <section>
      <ContenedorGeneral className='row'>
        <ContenedorUbicacion className='col l6'>
          <Subtitulo2>UBICACION <i className="small material-icons red-text">location_on</i></Subtitulo2>
          <LineaSeparadora/>
          <br/>
            <Mapa/>
          <br/>
          <LineaSeparadora/>
        </ContenedorUbicacion>
        <ContenedorContactenos className='col l6'>
          <div className='container'>
            <Subtitulo2><i className="small material-icons red-text">star</i>CONTACTENOS<i className="small material-icons red-text">star</i></Subtitulo2>
            <LineaSeparadora/>
            <form className="row">
              <Subtitulo3>NOMBRE:</Subtitulo3>
                <div className="input-field col s12 card-panel">
                  <input id="IdNombre" type="text" className="validate" placeholder='Ingrese su nombre' required/>
                  <label className="active" htmlFor="IdNombre"></label>
                  <span className="helper-text" data-error="wrong" data-success="right"></span>
                </div>
                <Subtitulo3>EMAIL:</Subtitulo3>
                <div className="input-field col s12 card-panel">
                  <input id="IdEmail" type="email" className="validate" placeholder='Ingrese su email' required/>
                  <label className="active" htmlFor="IdEmail"></label>
                  <span className="helper-text" data-error="wrong" data-success="right"></span>
                </div>
                <Subtitulo3>COMENTARIO:</Subtitulo3>
                <div className="comment-box col s12">
                    <ContenedorComentario id="IdComentario" type="text" className="validate white" placeholder="Agregue un comentario..." required/>
                    <label className="active" htmlFor="IdComentario"></label>
                </div>
                <ContenedorBoton className='center-align'>
                  <button href="" className="btn waves-effect waves-light red darken-4" type="submit" name="Enviar">Enviar
                    <i className="material-icons right">send</i>
                  </button>
                </ContenedorBoton>
            </form>
          </div>
        </ContenedorContactenos>
      </ContenedorGeneral>
    </section>
  );
};

export default Contactenos;