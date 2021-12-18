import "../styles/styles.scss"

import Header from "./secciones/principales/Header"
import Footer from "./secciones/principales/Footer"

import Home from "./paginas/Home"
import Categoria from "./paginas/Categoria"

import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path ="/" element={<Home />} />
      <Route path ="/:link" element={<Categoria />} />
      <Route path = "*" element={<main><p>Oh no, te perdiste</p></main>} />
    </Routes>
    <Footer />
  </BrowserRouter>
)

export default App;
