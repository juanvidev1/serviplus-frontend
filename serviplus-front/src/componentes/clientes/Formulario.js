import Imagenes from "../../assets/img/imagenes";
const FormularioCliente = () => {

    const MAIN_DIV_STYLE = {
      bottom: "40px"
    }
    
    const H1_STYLE = {
      color: "#4972b0", 
      fontWeight: "900"
    }

    const LABELS_STYLE = {
      color: "#4972b0", 
      fontWeight: "650"
    }

    const BUTTON_STYLE = {
      width: "100%",
      backgroundColor: "#4972b0",
      color: "white",
      fontWeight: "700"
    }

    const PARAGRAPH_STYLE = {
      color: "#4972b0", 
      fontWeight: "650",
    }

    const IMG_DIV_STYLE = {
      position: "relative"
    }

    const IMG_STYLE = {
      position: "absolute",
      top: "50%"
    }


    return(
      <div className="container d-flex" style={MAIN_DIV_STYLE}>
        <div className="container m-5">
        <h1 className="mb-4" align="center" style={H1_STYLE}>Registro de Usuario</h1>
        <form>
            <div className="form-control form-control-sm mb-2">
                <label className="me-2 mt-1 mb-1" htmlFor="nombres" style={LABELS_STYLE}>Nombres*</label>
                <input className="form-control form-control-sm mb-2" id="nombres" name="nombres" />
                <label className="me-2 mt-1 mb-1" style={LABELS_STYLE}>Apellidos*</label>
                <input className="form-control form-control-sm mb-2" id="apellidos" name="apellidos" />
                <label className="me-2 mt-2" style={LABELS_STYLE}>Tipo de documento*</label>
                <select className="form-control select select-sm mt-1 mb-1" id="tipo-id" name="tipo-id" >
                  <option value={""}>Seleccione una opción</option>
                  <option value={"Cédula"}>Cédula</option>
                  <option value={"Pasaporte"}>Pasaporte</option>
                  <option value={"Cédula de extranjería"}>Cédula de extranjería</option>
                  <option value={"Registro civil"}>Registro civil</option> 
                </select>
                <label className="me-2 mt-2 mb-1" style={LABELS_STYLE}>Número de documento*</label>
                <input className="form-control form-control-sm mb-2" id="numero-id" name="numero-id" />
                <label className="me-2 mt-1 mb-1" style={LABELS_STYLE}>Email*</label>
                <input className="form-control form-control-sm mb-2" id="email" name="email" />
                <label className="me-2 mt-1 mb-1" style={LABELS_STYLE}>Nombre de usuario*</label>
                <input className="form-control form-control-sm mb-2" id="username" name="username" />
                <div className="d-flex mt-2">
                  <div className="form-control form-control-sm me-2 mt-1 mb-1">
                    <label style={LABELS_STYLE}>Contraseña*</label>
                    <input className="form-control form-control-sm mb-2" id="password" name="password" />
                  </div>
                  <div className="form-control form-control-sm me-2 mt-1 mb-1" style={{position: "relative", left: "8px"}}>
                    <label style={LABELS_STYLE}>Confirmar contraseña*</label>
                    <input className="form-control form-control-sm mb-2" id="password-confirm" name="password-confirm" />
                  </div>
                </div>
                  <div className="form-control form-control-sm me-2 mt-1 mb-1">
                    <label style={LABELS_STYLE}>Dirección</label>
                    <input className="form-control form-control-sm mb-2" id="direccion" name="direccion" />
                  </div>
                  <div className="d-flex">
                    <div className="form-control form-control-sm me-2 mt-1 mb-1">
                      <label style={LABELS_STYLE}>Departamento</label>
                      <input className="form-control form-control-sm mb-2" id="departamento" name="departamento" /> 
                    </div>
                    <div className="form-control form-control-sm me-2 mt-1 mb-1" style={{position: "relative", left: "8px"}}>
                      <label style={LABELS_STYLE}>Ciudad</label>
                      <input className="form-control form-control-sm mb-2" id="ciudad" name="ciudad" />
                    </div>
                  </div>
                  <div className="form-control form-control-sm me-2 mt-1 mb-1">
                    <label style={LABELS_STYLE}>Número telefónico*</label>
                    <input className="form-control form-control-sm mb-2" id="numero-telefono" name="numero-telefono" />
                  </div>
                  <div className="me-2 mt-1 mb-1" align="center">
                    <button type="button" className="btn" style={BUTTON_STYLE} id="registro" name="registro">Registrarme</button>
                  </div>
                  <p className="mt-3" style={PARAGRAPH_STYLE} align="center"><a href="/">Ya tengo cuenta</a></p>
            </div>
          </form>
        </div>
        <div className="m-5" style={IMG_DIV_STYLE}>
          <img src={Imagenes.img3} alt="" height={"250"} width={"300"} style={IMG_STYLE}></img>
        </div>  
      </div>
    );
} 

export default FormularioCliente;