import { useEffect, useState } from "react"
import Cargando from "../secciones/Cargando"
import ProductoCard from "../secciones/ProductoCard"

const Catalogo = () => {

    const [productos, setProductos] = useState()

    useEffect(() => {
        fetch("http://localhost:3050/productos")
        .then(response => response.json())
        .then(data => setProductos(data))
    }, [])

    return (
        <>
            <h1>Hola, es el NEW IN</h1>
            {
                // SI PRODUCTOS EXISTE QUE RENDERIZE LA GRILLA
                productos ? (
                    <section>
                        {
                            productos.map(({id, foto, color, nombre, precio}) => 
                                <ProductoCard
                                    key = {id}
                                    foto = {foto}
                                    color = {color}
                                    nombre = {nombre}
                                    precio = {precio}
                                />
                            )
                        }
                    </section>
                // SINO 
                ) : (
                    <Cargando />
                )
            }
        </>
    )
}

export default Catalogo