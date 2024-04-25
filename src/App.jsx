import Header from "./components/Header"
import Container from "./components/Container"
import Footer from "./components/Footer"
import Contactenos from "./components/Contactenos";

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" exact element={<Container/>}/> 
        <Route path="/Contactenos" element={<Contactenos/>}/> 
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
