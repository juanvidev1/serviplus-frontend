import { useLocation } from 'react-router-dom';
import Imagenes from '../../assets/img/imagenes';

const Header = () => {

    const HEADER_STYLE = {
        backgroundColor: "#4972b0"
    }

    const LINKS_STYLE = {
        fontWeight: "700"
    }

    const HEADER_LOGO = {
        width: "8%",
        height: "8%",
        opacity: ""
    }

    const location = useLocation();
    console.log(location);

    return(
    <header className="p-3 mb-5" style={HEADER_STYLE}>
        <div className="container">
        
                {
                    location.pathname === "/" ? (
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <img src= {Imagenes.img4} alt="" style={HEADER_LOGO}/ >
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="/" className="nav-link px-2 text-white" style={LINKS_STYLE}>Inicio</a></li>
                            <li><a href="/clientes/form" className="nav-link px-2 text-white" style={LINKS_STYLE}>Genera un ticket</a></li>
                            <li><a href="/about-serviplus" className="nav-link px-2 text-white" style={LINKS_STYLE}>Acerca de ServiPlus</a></li>
                            <li><a href="/empleados" className="nav-link px-2 text-white" style={LINKS_STYLE}>Acceso empleados</a></li>
                        </ul>
                            <div className="text-end">
                                <a href='/clientes/form' type='button' className='btn btn-warning'>Registrarse</a>
                            </div>
                    </div>
                    )

                    :

                    location.pathname === "/clientes/form" ? (
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <img src= {Imagenes.img4} alt="" style={HEADER_LOGO}/ >
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="/" className="nav-link px-2 text-white" style={LINKS_STYLE}>Regresar</a></li>
                        </ul>
                        <div className="text-end">
                                <a href='/' type='button' className='btn btn-outline-light me-2'>login</a>
                            </div>
                    </div>
                    )

                    :

                    location.pathname === "/empleados" ? (
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <img src= {Imagenes.img4} alt="" style={HEADER_LOGO}/ >
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="/" className="nav-link px-2 text-white" style={LINKS_STYLE}>Regresar</a></li>
                        </ul>
                    </div>
                    )

                    :

                    location.pathname === "/about-serviplus" ? (
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <img src= {Imagenes.img4} alt="" style={HEADER_LOGO}/ >
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="/" className="nav-link px-2 text-white" style={LINKS_STYLE}>Regresar</a></li>
                            <li><a href="/empleados" className="nav-link px-2 text-white" style={LINKS_STYLE}>Empleados</a></li>
                        </ul>
                        <div className='text-end'>
                            <a href='/' type='button' className='btn btn-outline-light me-2'>Login</a>
                            <a href='/clientes/form' type='button' className='btn btn-warning'>Registro</a>
                        </div>
                    </div>
                    )

                    :

                    ""
                }

            
        </div>
    </header>
    );
}

export default Header;