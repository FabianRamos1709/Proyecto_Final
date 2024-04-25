import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="transparent">
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="right on-med-and-down">
          <li><Link to = "/">Inicio</Link></li>
          <li><Link to = "/API">API</Link></li>
          <li><Link to = "/Contactenos">Contactenos</Link></li>
          <li><Link to = "/Sobre_Nosotros">Sobre Nosotros</Link></li>
          <li><Link to = "/Iniciar_Sesion">Iniciar Sesion</Link></li>
          <li><Link to = "/Registrarse">Registrarse</Link></li>
        </ul>
      </div>
    </nav>
  
  )
}

export default Navbar