// COMPONENTE FUNCION
import { useState, useEffect, useRef } from "react"

const ProductoCard = ({ foto, color, nombre, precio }) => {

    // PARA EL MANEJO DE ESTADOS
    const [vendido, setVendido] = useState (false)
    const [reservado, setReservado] = useState (false)

    const fotoProducto = useRef()

    const vender = () => {
        setVendido (true)
        setReservado (true)
    }
    const reservar = () => setReservado (true)

    // MANEJO DE CICLO DE VIDA
    useEffect (() => {
        /* console.log("Bienvenido", Date.now()) */
        if (reservado) {
        const elemento = fotoProducto.current
        elemento.classList.add("vendido")
        }
    }, [reservado])

    return (
        <div className="cardProduct">
        <img ref={fotoProducto} src={foto} alt="foto" />
        <p>{color}</p>
        <h4>{nombre}</h4>
        <p>{precio}</p>
        <p>
            <b>Estado: </b>
            {
            // SI EXISTE EL ELEMENTO IMPRIME VENDIDO SI NO A LA VENTA - IF ELSE
            reservado ? "Reservado" : "Libre"
            }
        </p>
        {
            // SI ES FALSO IMPRIMIR EL BOTON Y QUE AL HACER CLICK EJECUTE UN MÉTODO
            !reservado && <button onClick={reservar}>Reservar</button>
        }
        <p>
            <b>Estado: </b>
            {
            // SI EXISTE EL ELEMENTO IMPRIME VENDIDO SI NO A LA VENTA - IF ELSE
            vendido ? "Vendido" : "A la venta"
            }
        </p>
        {
            // SI ES FALSO IMPRIMIR EL BOTON Y QUE AL HACER CLICK EJECUTE UN MÉTODO
            !vendido && <button onClick={vender}>Vender</button>
        }
        </div>
    )
}

export default ProductoCard;