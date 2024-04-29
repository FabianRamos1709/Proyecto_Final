import Header from "./components/Header"
import Container from "./components/Container"
import Footer from "./components/Footer"
import Contactenos from "./components/Contactenos";
import Sobre_Nosotros from "./components/Sobre_Nosotros";
import Registrarse from "./components/Registrarse";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" exact element={<Container/>}/> 
        <Route path="/Contactenos" element={<Contactenos/>}/> 
        <Route path="/Sobre_Nosotros" element= {<Sobre_Nosotros/>} />
        <Route path="/Registrarse" element = {<Registrarse/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
