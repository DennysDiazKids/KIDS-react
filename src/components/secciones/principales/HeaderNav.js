import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"

import Cargando from "../Cargando"

const HeaderNav = () => {

    const [Menu, setMenu] = useState()

    useEffect(() => {
        fetch("http://localhost:3050/categorias")
        .then(response => response.json())
        .then(data => setMenu(data))
    }, [])

    return (
        <nav>
            {
                // SI SLIDER EXISTE QUE RENDERIZE EL SLIDE
                Menu ? (
                    <>
                        <ul className="flex">
                            {
                                Menu.map(({id, nombre}) => (
                                    <li key={id}>
                                        <NavLink to="./catalogo/">{nombre}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </>
                // SINO 
                ) : (
                    <Cargando />
                )
            }
        </nav>
    )
}

export default HeaderNav