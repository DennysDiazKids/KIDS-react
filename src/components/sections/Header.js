import logo from "../../assets/images/logo-kidsmadehere.png"
import Buscador from "./Buscador"
import Login from "./Login"
import Bolsa from "./Bolsa"

import { Outlet, NavLink } from "react-router-dom"

const Header = () => (
    <header>
        <div className="aviso">COMPRA Y RETIRA GRATIS EN NUESTRAS TIENDAS MIRAFLORES, BALBOA, CHACARILLA, POLO Y OLIVAR</div>
        <div className="cabecera flex">
            <div className="options">
            </div>
            <NavLink className="logo" to="./">
                <img src={logo} alt="KIDS made here" />
            </NavLink>
            <div className="options">
                <ul className="flex">
                    <li>
                        <button className="btn btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBuscador" aria-controls="offcanvasBuscador">
                            <i className="fas fa-search"></i>
                        </button>
                        <Buscador />
                    </li>
                    <li>
                        <button className="btn btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasUsuario" aria-controls="offcanvasUsuario">
                            <i className="fas fa-user"></i>
                        </button>
                        <Login />
                    </li>
                    <li>
                        <button className="btn btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBolsa" aria-controls="offcanvasBolsa">
                            <i className="fas fa-shopping-bag"></i>
                        </button>
                        <Bolsa />
                    </li>
                </ul>
            </div>
        </div>
        <nav>
            <ul className="flex">
                <li>
                    <NavLink to="./catalogo">NEW IN</NavLink>
                </li>
                <li>
                    <NavLink to="./ropa">Ropa</NavLink>
                </li>
                <li>
                    <NavLink to="./jeans">Jeans</NavLink>
                </li>
                <li>
                    <NavLink to="./polos">Polos</NavLink>
                </li>
                <li>
                    <NavLink to="./graficos">Gráficos</NavLink>
                </li>
                <li>
                    <NavLink to="./rebajas">Rebajas</NavLink>
                </li>
                <li>
                    <NavLink to="./accesorios">Accesorios</NavLink>
                </li>
                <li>
                    <NavLink to="./bikinis">Bikinis</NavLink>
                </li>
                <Outlet />
            </ul>
        </nav>
    </header>
)

export default Header