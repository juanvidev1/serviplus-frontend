const Header = () => {
    return(
    <header className="p-3 mb-5" style={{backgroundColor: "#0041A3"}}>
        <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="/" className="nav-link px-2 text-secondary" style={{fontWeight:"700"}}>Inicio</a></li>
            <li><a href="/genera-ticket" className="nav-link px-2 text-white" style={{fontWeight:"700"}}>Genera un ticket</a></li>
            <li><a href="/about-serviplus" className="nav-link px-2 text-white" style={{fontWeight:"700"}}>Acerca de ServiPlus</a></li>
            <li><a href="/" className="nav-link px-2 text-white" style={{fontWeight:"700"}}>Acceso empleados</a></li>
            </ul>

            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
            </form>

            <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">Login</button>
            <button type="button" className="btn btn-warning">Registrarse</button>
            </div>
        </div>
        </div>
    </header>
    );
}

export default Header;