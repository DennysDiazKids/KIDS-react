import { Link } from "react-router-dom"

const Suscripcion = () => (
    <form className="wrap" method="POST">
        <h3>SUBSCRÍBETE A LA NEWSLETTER</h3>
        <div className="d-flex campos">
            <input type="email" className="form-control" placeholder="DIRECCIÓN DE EMAIL" required />
            <button type="submit" className="btn btn-primary">ENVIAR</button>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
                Acepto 
                <Link to="./terminos-y-condiciones">Términos y Condiciones</Link>
            </label>
        </div>
    </form>
)

export default Suscripcion