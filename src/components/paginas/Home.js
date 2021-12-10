import { useState, useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Suscripcion from "../secciones/Suscripcion"

const Home = () => {

    const [dataslider, setDataslider] = useState()

    useEffect(() => {
        fetch("http://localhost:3050/slider")
        .then(response => response.json())
        .then(data => setDataslider(data))
    }, [])

    const settings = {
        arrows: true,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <div id="slider" className="wrap">
                {
                    // SI SLIDER EXISTE QUE RENDERIZE EL SLIDE
                    dataslider ? (
                        <Slider {...settings}>
                            {
                                dataslider.map((slider) => (
                                    <div key = {slider.id}>
                                        <img
                                            className="desktop"
                                            alt = {slider.nombre}
                                            src = {slider.imgDesktop}
                                        />
                                    </div>
                                ))
                            }
                        </Slider>
                    ) : (
                        <span>
                            Cargando...
                        </span>
                    )
                }
            </div>
            <Suscripcion />
        </>
    )
}

export default Home