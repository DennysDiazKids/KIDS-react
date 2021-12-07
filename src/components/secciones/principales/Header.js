import logo from "../../../assets/images/logo-kidsmadehere.png"
import Buscador from "../Buscador"
import Login from "../Login"
import Bolsa from "../Bolsa"

import { Link } from "react-router-dom"

import HeaderNav from "./HeaderNav"

const Header = () => (
    <header>
        <div className="aviso">COMPRA Y RETIRA GRATIS EN NUESTRAS TIENDAS MIRAFLORES, BALBOA, CHACARILLA, POLO Y OLIVAR</div>
        <div className="cabecera flex">
            <div className="options">
            </div>
            <Link className="logo" to="./">
                <img src={logo} alt="KIDS made here" />
            </Link>
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
        <HeaderNav />
    </header>
)

export default Header