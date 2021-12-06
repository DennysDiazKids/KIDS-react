import "../styles/styles.scss"

import Header from "./sections/Header"
import Pages from "./pages/Pages"

import { 
  BrowserRouter
} from "react-router-dom"

const App = () => (
  <BrowserRouter>
    <Header />
    <Pages />
  </BrowserRouter>
)

export default App;
