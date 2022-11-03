import { useEffect, useState } from "react";
import Estados from "../../enums/Estados";
import ClientesServicios from "../../servicios/ServicioCliente";


const ListadoClientes = () => {
    // let listadoClientes = clientesServicios.listadoClientes();
    const [ clientesListado, setClientesListado ] = useState([]);
    const [ estado, setEstado ] = useState(Estados.CARGANDO);

    const cargarClientes = async () => {
        try {
            const respuesta = await ClientesServicios.listarClientes();
            console.log(respuesta.data);
            if (respuesta.data.length > 0) {
                setClientesListado(respuesta.data);
                setEstado(Estados.OK);
            } else {
                setEstado(Estados.VACIO);
            }
        } catch (error) {
            setEstado(Estados.ERROR);
        }
    }

    const buscarCliente = async (event) => {
        try {
            
        } catch (error) {
            
        }
    }

    useEffect(() => {
        cargarClientes();
    }, [])

    /*const cambiarCriterio = (event) => {
        setCriterio(event.target.value);
    }*/

    return(
        <div className="container">
            <h3 className="mt-2">Clientes</h3>
            <form action="">
                <input type="text" value={""} onChange={""} id="criterio" name="criterio" />
                <button id="buscar" name="buscar" onClick={""}>Buscar</button>
            </form>
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Usuario</th>
                        <th>Email</th>
                        <th>Identificación</th>
                        <th>Telefono</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        estado === Estados.CARGANDO ? (
                            <tr><td>
                                <div class="spinner-border text-secondary" role="status">
                                    <span class="sr-only"></span>
                                </div>
                            </td></tr>
                        )
                        :

                        estado === Estados.ERROR ? (<tr><td>Ocurrió un error, intente más tarde</td></tr>)
                        
                        :

                        clientesListado.map((cliente) => (
                            <tr>
                                <td>{ cliente.nombres + " " + cliente.apellidos }</td>
                                <td>{cliente.username}</td>
                                <td>{cliente.email}</td>
                                <td>{cliente.identificacion}</td>
                                <td>{cliente.telefono}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListadoClientes;