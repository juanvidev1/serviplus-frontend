import Imagenes from "../assets/img/imagenes";
const Landing = () => {
    return (
    <body>
        <div className="container mt-3 p-3 d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <img src={Imagenes.img2} alt="" height={"400"} width={"500"}></img>
            <main className="form-signin w-100 m-auto">
                <form>
                    <h1 className="h3 mb-3 mt-2" style={{fontWeight: "900"}} align="center">Bienvenido a ServiPlus</h1>
                    <div className="container justify-content">
                    </div>
                    <div className="form-floating mt-2 mb-2">
                    <input type="email" className="form-control" id="floatingInput" placeholder="alguien@mail.com" />
                    <label for="floatingInput">Correo electrónico</label>
                    </div>
                    <div className="form-floating mt-3 mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Contraseña" />
                    <label for="floatingPassword">Contraseña</label>
                    </div>

                    <div className="checkbox mb-3" style={{columnCount: "2"}}>
                    <label>
                        <input type="checkbox" value="remember-me" /> Recordar mis datos
                    </label>
                    <div className="container" align="right">
                    <label>
                        <a href="/">olvide mi contraseña</a>
                    </label>
                    </div>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <div className="container mt-3 mb-3 p-auto" align="left" style={{fontWeight: "700"}}>
                        <a href="../clientes/Formulario.js">Regístrate si aún no tienes cuenta</a>
                    </div>
                    <p className="mt-5 mb-3 text-muted">&copy; ServiPlus 2022 - Todos los derechos reservados</p>
                </form>
            </main>
        </div>
    </body>
    );
}

export default Landing;