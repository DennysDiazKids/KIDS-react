import { useState, useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

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
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            {
                // SI SLIDER EXISTE QUE RENDERIZE EL SLIDE
                dataslider ? (
                    <Slider {...settings}>
                        {
                            dataslider.map(({id, nombre, imgDesktop, imgMovil}) => (
                                <div>
                                    <img
                                        className="desktop"
                                        key = {id}
                                        alt = {nombre}
                                        src = {imgDesktop}
                                    />
                                    <img
                                        className="movil"
                                        key = {id}
                                        alt = {nombre}
                                        src = {imgMovil}
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
        </>
    )
}

export default Home