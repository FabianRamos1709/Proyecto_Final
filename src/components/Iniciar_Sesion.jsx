import React, { useEffect } from 'react';
import styled from '@emotion/styled'
import lateral2 from '../img/lateral3.jpg'

const Inicio = styled.div`
    height: 400px;
    margin: 50px 200px;
    padding: 0;
    background-color: #FFF;
    border-radius: 10px;
`

const Lateral2 = styled.img`
    height: 400px;
    margin: 0px;
    padding: 0;
    width: 50%;
`

const Iniciar_Sesion = () => {
    useEffect(() => {
      // Inicializar todos los elementos de texto de Materialize
      M.updateTextFields();
    }, []);

    return (
      <Inicio>
        <div className="row">
            <Lateral2 src={lateral2} className="left"/>
            <form className="col s6">
                <h4 className="center"> INICIAR SESION </h4>
                <br/>
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">account_circle</i>
                        <input id="email" type="email" className="validate" required autoComplete="username"/>
                        <label htmlFor="email">E-mail</label>
                    </div>
                </div>      
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">lock</i>
                        <input id="password" type="password" className="validate" required autoComplete="current-password"/>
                        <label htmlFor="password">Contraseña</label>
                    </div>
                </div>
    
                <div className="center">
                    <a href='#'>¿Olvidaste tu contraseña?</a>
                </div>
                <br/>
                <div className="center">
                    <button className="btn waves-effect waves-light red darken-4" type="submit" name="action">
                        Iniciar Sesion
                        <i className="material-icons right">send</i>
                    </button>
                </div> 
            </form>
        </div>
      </Inicio>
    );
  };
  
  export default Iniciar_Sesion;