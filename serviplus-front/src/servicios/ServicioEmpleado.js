import axios from "axios";
import baseURL from "../config";

const EmpleadosServicios = {};

EmpleadosServicios.listarEmpleados = () => {
    return axios.get(baseURL + "/empleados");
}

EmpleadosServicios.buscarEmpleado = (criterio) => {
    return axios.get("http://localhost:8080/empleados?q=" + criterio);
}

EmpleadosServicios.filtrarEmpleado = (id) => {

}

export default EmpleadosServicios;