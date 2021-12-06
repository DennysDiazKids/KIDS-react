import Home from "./Home"
import Catalogo from "./Catalogo"

import { Routes, Route } from "react-router"


const Pages = () => (
    <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/catalogo" element={<Catalogo />} />
        <Route path = "*" element={<main><p>Oh no, te perdiste</p></main>} />
    </Routes>
)

export default Pages