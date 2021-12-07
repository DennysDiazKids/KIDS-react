import "../styles/styles.scss"

import Header from "./secciones/principales/Header"
import Pages from "./paginas/Pages"
import Footer from "./secciones/principales/Footer"

import { 
  BrowserRouter
} from "react-router-dom"

const App = () => (
  <BrowserRouter>
    <Header />
    <Pages />
    <Footer />
  </BrowserRouter>
)

export default App;
