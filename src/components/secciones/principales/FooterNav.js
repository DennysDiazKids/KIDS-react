import { Link } from "react-router-dom"

const FooterNav = () => (
    <div className="menuFooter row">
        <div className="col-12 col-md-3">
            <ul>
                <li>
                    <b>Atención al cliente</b>
                </li>
                <li>
                    <Link to="./terminos-y-condiciones">Términos y condiciones</Link>
                </li>
                <li>
                    <Link to="./cambios-y-devoluciones">Cambios y devoluciones</Link>
                </li>
                <li>
                    <Link to="./privacidad">Privacidad</Link>
                </li>
                <li>
                    <Link to="./libro-y-reclamaciones">Libro de reclamaciones</Link>
                </li>
            </ul>
        </div>
        <div className="col-12 col-md-3">
            <ul>
                <li>
                    <b>Comunidad</b>
                </li>
                <li>
                    <Link to="./gitf-card">Regala una Gift Card!</Link>
                </li>
                <li>
                    <Link to="./tiendas">Tiendas</Link>
                </li>
            </ul>
        </div>
        <div className="col-12 col-md-3">
            <ul>
                <li>
                    <b>Guía de compras</b>
                </li>
                <li>
                    <Link to="./como-comprar">¿Cómo comprar?</Link>
                </li>
                <li>
                    <Link to="./envios">Envíos</Link>
                </li>
                <li>
                    <Link to="./preguntas-frecuentes">Preguntas frecuentes</Link>
                </li>
            </ul>
        </div>
        <div className="col-12 col-md-3">
            <ul>
                <li>
                    <b>Social</b>
                </li>
                <li>
                    <Link to="./terminos-y-condiciones">
                        <span>Facebook</span>
                        <i className="fas fa-facebook"></i>
                    </Link>
                </li>
                <li>
                    <Link to="./terminos-y-condiciones">
                        <span>Instagram</span>
                        <i className="fas fa-instagram"></i>
                    </Link>
                </li>
                <li>
                    <Link to="./terminos-y-condiciones">
                        <span>Tiktok</span>
                        <i className="fas fa-tiktok"></i>
                    </Link>
                </li>
                <li>
                    <Link to="./terminos-y-condiciones">
                        <span>Spotify</span>
                        <i className="fas fa-shopify"></i>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
)

export default FooterNav