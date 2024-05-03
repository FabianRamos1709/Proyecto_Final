import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const BarraNav = styled.nav`
  text-shadow: red 0.1em 0.1em 0.2em;
`

const Navbar = () => {
  return (
    <BarraNav className="transparent">
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="on-med-and-down">
          <li><Link to = "/">Inicio</Link></li>
          <li><Link to = "/API">API</Link></li>
          <li><Link to = "/Contactenos">Contactenos</Link></li>
          <li><Link to = "/Sobre_Nosotros">Sobre Nosotros</Link></li>
          <li><Link to = "/Iniciar_Sesion">Iniciar Sesion</Link></li>
          <li><Link to = "/Registrarse">Registrarse</Link></li>
        </ul>
      </div>
    </BarraNav>
  
  )
}

export default Navbar