import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

import Background from '../assets/Home/Background.png'
import Lower from '../assets/Home/Lower.png'
import TradicionPeruana from '../assets/Home/TradicionPeruana.png'
import AderezoMagico from '../assets/Home/AderezoMagico.png'
import Clock from '../assets/Home/Clock.png'
import Location from '../assets/Home/Location.png'

function Home() {

    const cardClass = "flex flex-col gap-5 border rounded-md p-[2vh] items-center hover:scale-105 duration-300 cursor-pointer w-50";

    const openModal = (title, img, description) => {
        Swal.fire({
            title,
            text: description,
            imageUrl: img,
            imageWidth: 220,
            background: "#1C1C1C",
            color: "#ffffff",
            confirmButtonColor: "#ED6B00",
            customClass: {
                popup: "rounded-xl",
                confirmButton: "rounded-lg px-4 py-2 font-semibold"
            }
        });
    };

    return (
        <>
            <div
                className="absolute top-0 left-0 h-full w-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${Background})` }}
            ></div>

            <div className='relative flex-col flex z-10 h-screen justify-center w-1/3 ml-[10vh] select-none gap-5'>
                <h1 className='text-5xl font-bold font-serif'>¡El autentico sabor del pollo a la brasa que te hace agua la boca!</h1>
                <div className='flex gap-10 font'>
                    <Link to="/menu">
                        <button className='bg-[#ED6B00] rounded-2xl px-4 py-3 cursor-pointer hover:bg-[#CC5E00] duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] hover:scale-105'>
                            VER MENÚ COMPLETO
                        </button>
                    </Link>

                    <button
                        onClick={() => {
                            Swal.fire({
                                icon: "info",
                                title: "Función no disponible",
                                text: "Esta función no está integrada por el momento.",
                                background: "#1C1C1C",
                                color: "#ffffff",
                                confirmButtonColor: "#ED6B00",
                                customClass: {
                                    popup: "rounded-xl",
                                    confirmButton: "rounded-lg px-4 py-2 font-semibold"
                                }
                            });
                        }}
                        className="bg-[#1C1C1C] border rounded-2xl px-4 py-3 cursor-pointer hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] hover:scale-105 transition duration-300"
                    >
                        HAZ TU PEDIDO AHORA
                    </button>
                </div>
            </div>

            <a href='#speciality' className="absolute bottom-[1vh] left-1/2 transform -translate-x-1/2">
                <img src={Lower} alt="" className="h-15 animate-bounce cursor-pointer" />
            </a>

            <div id='speciality' className='flex justify-around'>
                <div className='flex flex-col'>
                    <h2 className='text-start text-2xl font-bold p-10'>Nuestra Especialidad</h2>
                    <div className='flex justify-around w-full gap-20'>

                        <div
                            className={cardClass}
                            onClick={() =>
                                openModal(
                                    "Tradición Peruana",
                                    TradicionPeruana,
                                    "Nuestro pollo a la brasa con el auténtico toque peruano."
                                )
                            }
                        >
                            <img src={TradicionPeruana} alt="Tradicion Peruana" className='w-30 h-30' />
                            <p className='text-center select-none'>Tradición Peruana</p>
                        </div>

                        <div
                            className={cardClass}
                            onClick={() =>
                                openModal(
                                    "Aderezo Mágico",
                                    AderezoMagico,
                                    "Sazonado con una receta secreta que resalta los sabores."
                                )
                            }
                        >
                            <img src={AderezoMagico} alt="Aderezo Magico" className='w-30 h-30' />
                            <p className='text-center select-none'>Aderezo Mágico</p>
                        </div>
                    </div>

                    <h2 className='text-center p-10 text-2xl font-bold w-full flex'>Encuentranos y Horarios</h2>
                    <div className='flex justify-between gap-x-10'>
                        <div className='flex items-center gap-5'>
                            <img src={Clock} alt="Reloj" className='w-10 h-10' />
                            <div className='flex flex-col'>
                                <p>Atención todos los días</p>
                                <p>11:00 am – 11:00 pm</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-5'>
                            <img src={Location} alt="Ubicacion" className='w-10 h-10' />
                            <div className='flex flex-col'>
                                <p>Calle Falsa 123, Ciudad Inventada</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='p-10 text-2xl font-bold'>¡Ven y Disfrutemos Juntos!</h2>
                    <div>
                        <iframe
                            className='rounded-lg w-full h-90'
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1593.7257633541983!2d-77.03486530130253!3d-12.070242740511565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2spe!4v1763913451174!5m2!1sen!2spe"
                            loading="lazy">
                        </iframe>
                    </div>
                </div>
            </div>

            <div className='bg-[#262626] w-full grow items-center justify-center flex flex-col gap-2 py-5 mt-15'>
                <h3 className='text-center text-2xl font-bold'>Listo para tu Antojo?</h3>
                <button className='bg-[#ED6B00] p-2 px-5 rounded-3xl font-bold hover:bg-[#C25800] duration-300 cursor-pointer animate-pulse'>
                    CONOCENOS MEJOR
                </button>
            </div>
        </>
    )
}

export default Home;
