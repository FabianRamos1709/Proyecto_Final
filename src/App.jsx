import Header from "./components/Header"
import Container from "./components/Container"
import Footer from "./components/Footer"
import Contactenos from "./components/Contactenos";
import Sobre_Nosotros from "./components/Sobre_Nosotros";
import Registrarse from "./components/Registrarse";
import Iniciar_Sesion from "./components/Iniciar_Sesion"
import Api from "./components/Api";
import ScrollToTop from "./ScrollTop";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {

  return (
    <Router>
      <ScrollToTop />
      <Header/>
      <Routes>
        <Route path="/" exact element={<Container/>}/> 
        <Route path="/API" element={<Api/>}/>
        <Route path="/Contactenos" element={<Contactenos/>}/> 
        <Route path="/Sobre_Nosotros" element= {<Sobre_Nosotros/>} />
        <Route path="/Registrarse" element = {<Registrarse/>} />
        <Route path="/Iniciar_Sesion" element = {<Iniciar_Sesion/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
