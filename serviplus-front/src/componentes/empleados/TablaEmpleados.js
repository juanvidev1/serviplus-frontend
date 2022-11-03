import { useEffect, useState } from "react";
import Estados from "../../enums/Estados";
import EmpleadosServicios from "../../servicios/ServicioEmpleado";


const ListadoEmpleados = () => {

    // Estilos
    const TITLE_STYLE = {
        color: "#4972b0",
        fontWeight: "700"
    }

    const BUSCAR_STYLE = {
        backgroundColor: "#4972b0",
        color: "white",
        fontWeight: "700",
        width: "50%"
    }

    const BUSCAR_BAR_STYLE = {
        width: "50%"
    }

    const TABLE_HEADERS_STYLE = {
        color: "#4972b0",
        fontWeight: "700"
    }

    /*const DIV_CONT_STYLE = {
        width: "100%"
    }*/

    // Funcionalidad de la tabla
    const [ empleadosListado, setEmpleadosListado ] = useState([]);
    const [ estado, setEstado ] = useState(Estados.CARGANDO);
    const [ criterio, setCriterio ] = useState("");

    const cargarEmpleados = async () => {
        try {
            const respuesta = await EmpleadosServicios.listarEmpleados();
            console.log(respuesta.data);
            if (respuesta.data.length > 0) {
                setEmpleadosListado(respuesta.data);
                setEstado(Estados.CARGANDO);
            } else {
                setEstado(Estados.VACIO);
            }
        } catch (error) {
            setEstado(Estados.ERROR);
        }
    }

    const buscarEmpleado = async (event) => {
        event.preventDefault();
        try {
            const respuesta = await EmpleadosServicios.buscarEmpleado(criterio);
            console.log(respuesta.data);
            if (respuesta.data.length > 0) {
                setEmpleadosListado(respuesta.data);
                setEstado(Estados.OK);
            } else {
                setEstado(Estados.VACIO);
            }
        } catch (error) {
            setEstado(Estados.ERROR);
        }
    }

    useEffect(() => {
        cargarEmpleados();
    }, [])

    const cambiarCriterio = (event) => {
        setCriterio(event.target.value);
    }

    return (
        <div className="container">
            <h2 className="mt-2" style={TITLE_STYLE}>Empleados</h2>
            <form action="">
                <input className="form-control text-bg-dark" type="search" value={criterio} onChange={cambiarCriterio} id="criterio" name="criterio" style={BUSCAR_BAR_STYLE} />
                <button className="form-control mt-2" id="buscar" name="buscar" onClick={buscarEmpleado} style={BUSCAR_STYLE}>Buscar empleado</button>
            </form>
            <table className="table table-sm mt-4">
            <thead className="m-5" align="center">
                <tr>
                    <th style={TABLE_HEADERS_STYLE}>Nombre</th>
                    <th style={TABLE_HEADERS_STYLE}>Usuario</th>
                    <th style={TABLE_HEADERS_STYLE}>Email</th>
                    <th style={TABLE_HEADERS_STYLE}>Identificación</th>
                    <th style={TABLE_HEADERS_STYLE}>area</th>
                </tr>
            </thead>
            <tbody align="center">
                {
                    estado === Estados.CARGANDO ? (
                        <tr>
                            <td><div class="spinner-grow text-dark" role="status">
                                <span class="visually-hidden"></span>
                            </div></td>
                        </tr>
                    )

                    :

                    estado === Estados.ERROR ? (
                        <tr><td>Hubo un error en la carga de los archivos</td></tr>
                    )

                    :

                    estado === Estados.VACIO ? 
                            (<tr><td>No hay datos</td></tr>)

                    :

                    empleadosListado.map((empleado) => (
                        <tr>
                            <td>{ empleado.nombres + " " + empleado.apellidos }</td>
                            <td>{ empleado.username }</td>
                            <td>{ empleado.email }</td>
                            <td>{ empleado.identificacion }</td>
                            <td>{ empleado.area }</td>
                        </tr>
                    ))
                }
            </tbody>
            </table>
        </div>
    );
}
 
export default ListadoEmpleados;