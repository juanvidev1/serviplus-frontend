import Imagenes from "../../assets/img/imagenes";
const FormularioCliente = () => {
    return(
      <div className="container d-flex" style={{bottom: "40px"}}>
        <div className="container m-5">
        <h1 className="mb-4" align="center" style={{color: "#0041A3", fontWeight: "900"}}>Registro de Usuario</h1>
        <form>
            <div className="form-control form-control-sm mb-2">
                <label className="me-2 mt-1 mb-1" htmlFor="nombres" style={{color: "#0041A3", fontWeight: "650"}}>Nombres*</label>
                <input className="form-control form-control-sm mb-2" id="nombres" name="nombres" />
                <label className="me-2 mt-1 mb-1" style={{color: "#0041A3", fontWeight: "650"}}>Apellidos*</label>
                <input className="form-control form-control-sm mb-2" id="" name="" />
                <label className="me-2 mt-2" style={{color: "#0041A3", fontWeight: "650"}}>Tipo de documento*</label>
                <select className="form-control select select-sm mt-1 mb-1" id="" name="" >
                  <option value={""}>Seleccione una opción</option>
                  <option value={"Cédula"}>Cédula</option>
                  <option value={"Pasaporte"}>Pasaporte</option>
                  <option value={"Cédula de extranjería"}>Cédula de extranjería</option>
                  <option value={"Registro civil"}>Registro civil</option> 
                </select>
                <label className="me-2 mt-2 mb-1" style={{color: "#0041A3", fontWeight: "650"}}>Número de documento*</label>
                <input className="form-control form-control-sm mb-2" id="" name="" />
                <label className="me-2 mt-1 mb-1" style={{color: "#0041A3", fontWeight: "650"}}>Email*</label>
                <input className="form-control form-control-sm mb-2" id="" name="" />
                <label className="me-2 mt-1 mb-1" style={{color: "#0041A3", fontWeight: "650"}}>Nombre de usuario*</label>
                <input className="form-control form-control-sm mb-2" id="" name="" />
                <div className="d-flex mt-2">
                  <div className="form-control form-control-sm me-2 mt-1 mb-1">
                    <label style={{color: "#0041A3", fontWeight: "650"}}>Contraseña*</label>
                    <input className="form-control form-control-sm mb-2" id="" name="" />
                  </div>
                  <div className="form-control form-control-sm me-2 mt-1 mb-1" style={{position: "relative", left: "8px"}}>
                    <label style={{color: "#0041A3", fontWeight: "650"}}>Confirmar contraseña*</label>
                    <input className="form-control form-control-sm mb-2" id="" name="" />
                  </div>
                </div>
                  <div className="form-control form-control-sm me-2 mt-1 mb-1">
                    <label style={{color: "#0041A3", fontWeight: "650"}}>Dirección</label>
                    <input className="form-control form-control-sm mb-2" id="" name="" />
                  </div>
                  <div className="d-flex">
                    <div className="form-control form-control-sm me-2 mt-1 mb-1">
                      <label style={{color: "#0041A3", fontWeight: "650"}}>Departamento</label>
                      <input className="form-control form-control-sm mb-2" id="" name="" /> 
                    </div>
                    <div className="form-control form-control-sm me-2 mt-1 mb-1" style={{position: "relative", left: "8px"}}>
                      <label style={{color: "#0041A3", fontWeight: "650"}}>Ciudad</label>
                      <input className="form-control form-control-sm mb-2" id="" name="" />
                    </div>
                  </div>
                  <div className="form-control form-control-sm me-2 mt-1 mb-1">
                    <label style={{color: "#0041A3", fontWeight: "650"}}>Número telefónico*</label>
                    <input className="form-control form-control-sm mb-2" id="" name="" />
                  </div>
                  <div className="me-2 mt-1 mb-1" align="center">
                    <button type="button" className="btn btn-dark" id="registro" name="registro">Registrarme</button>
                  </div>
            </div>
          </form>
        </div>
        <div className="m-5">
          <img src={Imagenes.img3} alt="" height={"250"} width={"300"}></img>
        </div>  
      </div>
    );
} 

export default FormularioCliente;