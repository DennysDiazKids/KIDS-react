import { useState, useEffect } from "react"
import { Outlet, NavLink } from "react-router-dom"

import Cargando from "../Cargando"

const HeaderNav = () => {

    const [Menu, setMenu] = useState()

    useEffect(() => {
        fetch(`${process.env.REACT_APP_URL_API}categorias`)
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
                                Menu.map((menunav) => (
                                    <li key={menunav.id}>
                                        <NavLink
                                            to={`./${menunav.link}`}
                                        >
                                            {menunav.nombre}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                        <Outlet />
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