import Imagenes from "../../assets/img/imagenes";
const FormularioCliente = () => {
    return(
      <div style={{columnCount: "2"}}>
        <img src={Imagenes.img3} alt="" height={"400"} width={"500"}></img>
          <form>
            <div className="form-control form-control-sm mb-2">
            <label>Email</label>
            <input className="form-control form-control-sm mb-2" />
            <label>Nombre de usuario</label>
            <input className="form-control form-control-sm mb-2" />
            <label>Contraseña</label>
            <input className="form-control form-control-sm mb-2" />
            <label>Nombres</label>
            <input className="form-control form-control-sm mb-2" />
            <label>Apellidos</label>
            <input className="form-control form-control-sm mb-2" />
            <label>Número de documento</label>
            <input className="form-control form-control-sm mb-2" />
            <label className="me-2">Tipo de documento</label>
            <select className="select select-sm mb-2">
              <option value={""}>Seleccione una opción</option>
              <option value={"Cédula"}>Cédula</option>
              <option value={"Pasaporte"}>Pasaporte</option>
              <option value={"Cédula de extranjería"}>Cédula de extranjería</option>
              <option value={"Registro civil"}>Registro civil</option> 
            </select>
            </div>
          </form>
        </div>
    );
} 

export default FormularioCliente;