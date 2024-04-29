import { useEffect, useState } from 'react';
import lateral from '../img/fondo3.jpg'
import styled from '@emotion/styled'

const Registro = styled.div`
    margin: 50px;
    background-color: #FFF;
    border-radius: 10px;
`
const Lateral = styled.img`
    margin: 0px;
    padding: 0;
    lateral: 0px;
    height: 550px;
    width: 50%;

`
const Registrarse = () => {
    useEffect(() => {
      // Inicializar todos los elementos de texto de Materialize
      window.M.updateTextFields();
    }, []);

    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirm_password] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (nombres === '' || apellidos === '' || email === '' || password === '' || confirm_password === '') {
        alert('Por favor completa todos los campos');
        } else {
        // Aquí puedes enviar los datos del formulario
        console.log('Datos enviados:', { nombres, apellidos, email, password, confirm_password });
        }
    };
  
    return (
      <Registro>
        <div className="row">
            <Lateral src={lateral} className="left"/>
            <form onSubmit={handleSubmit} className="col s6">
                <h4 className="center">FORMULARIO DE REGISTRO</h4>
                <div className="center">
                    <div className="input-field col s12">
                        <input id="nombres" type="text" className="validate" onChange={(e) => setNombres(e.target.value)}/>
                        <label htmlFor="nombres">Nombres</label>
                    </div>
                </div>
                <div className="center">
                    <div className="input-field col s12">
                        <input id="apellidos" type="text" className="validate" onChange={(e) => setApellidos(e.target.value)}/>
                        <label htmlFor="apellidos">Apellidos</label>
                    </div>
                </div>
                <div className="center">
                    <div className="input-field col s12">
                        <input id="email" type="text" className="validate" onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="email">Correo Electronico</label>
                    </div>
                </div>
                <div className="center">
                    <div className="input-field col s12">
                        <input id="password" type="password" className="validate" onChange={(e) => setPassword(e.target.value)}/>
                        <label htmlFor="password">Contraseña</label>
                    </div>
                </div>
                <div className="center">
                    <div className="input-field col s12">
                        <input id="confirm_password" type="password" className="validate" onChange={(e) => setConfirm_password(e.target.value)}/>
                        <label htmlFor="confirm_password">Confirmar Contraseña</label>
                    </div>
                </div>
                <div className="right">
                    <button className="btn waves-effect waves-light red darken-4" type="submit" name="action">
                        Registrarse
                    </button>
                </div> 
            </form>
        </div>
      </Registro>
    );
  };
  
  export default Registrarse;