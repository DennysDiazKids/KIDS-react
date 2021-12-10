import "../styles/styles.scss"

import Header from "./secciones/principales/Header"
import Footer from "./secciones/principales/Footer"

import Home from "./paginas/Home"
import Catalogo from "./paginas/Catalogo"
import Newin from "./paginas/New-in"

import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path ="/" element={<Home />}>
        <Route path ="catalogo" element={<Catalogo />}>
          <Route path=":catid" element={<Newin />} />
        </Route>
        <Route path = "*" element={<main><p>Oh no, te perdiste</p></main>} />
      </Route>
    </Routes>
    <Footer />
  </BrowserRouter>
)

export default App;
