import React, { useEffect, useState } from 'react';
import lateral from '../img/lateral1.jpg'
import styled from '@emotion/styled'

const Registro = styled.div`
    margin: 50px 100px;
    background-color: #FFF;
    border-radius: 10px;
`
const Lateral = styled.img`
    margin: 0px;
    padding: 0;
    height: 650px;
    width: 50%;

`
const Registrarse = () => {
    useEffect(() => {
      // Inicializar todos los elementos de texto de Materialize
      M.updateTextFields();
    }, []);
  
    return (
      <Registro>
        <div className="row">
            <Lateral src={lateral} className="left"/>
            <form className="col s6">
                <h4 className="center">FORMULARIO DE REGISTRO</h4>
                <div className="row ">
                    <div className="input-field col s10 offset-s1">
                        <i className="material-icons prefix">assignment_ind</i>
                        <input id="nombres" type="text" className="validate" required/>
                        <label htmlFor="nombres">Nombres</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s10 offset-s1">
                        <i className="material-icons prefix">assignment</i>
                        <input id="apellidos" type="text" className="validate" required/>
                        <label htmlFor="apellidos">Apellidos</label>
                    </div>
                </div>
                <div className="row ">
                    <div className="input-field col s10 offset-s1">
                        <i className="material-icons prefix">email</i>
                        <input id="email" type="email" className="validate" autoComplete="username"required/>
                        <label htmlFor="email">Correo Electronico</label>
                    </div>
                </div>
                <div className="row ">
                    <div className="input-field col s10 offset-s1">
                        <i className="material-icons prefix">lock</i>
                        <input id="password" type="password" className="validate" autoComplete="new-password" required/>
                        <label htmlFor="password">Contraseña</label>
                    </div>
                </div>
                <div className="row ">
                    <div className="input-field col s10 offset-s1">
                        <i className="material-icons prefix">lock</i>
                        <input id="confirm_password" type="password" className="validate" autoComplete="new-password" required/>
                        <label htmlFor="confirm_password">Confirmar Contraseña</label>
                    </div>
                </div>
                <div className="right">
                    <button className="btn waves-effect waves-light red darken-4" type="submit" name="action">
                        Registrarse
                        <i className="material-icons right">send</i>
                    </button>
                </div> 
            </form>
        </div>
      </Registro>
    );
  };
  
  export default Registrarse;