import axios from "axios";

const EmpleadosServicios = {};

EmpleadosServicios.listarEmpleados = () => {
    return axios.get("http://localhost:8080/empleados");
}

EmpleadosServicios.buscarEmpleado = (criterio) => {
    return axios.get("http://localhost:8080/empleados?q=" + criterio);
}

export default EmpleadosServicios;