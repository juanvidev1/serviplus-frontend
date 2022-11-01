import clientesServicios from "../../servicios/ServicioCliente";

const ListadoClientes = () => {
    let listadoClientes = clientesServicios.listadoClientes();
    return(
        <div className="container">
            <h3 className="mt-2">Clientes</h3>
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
                        listadoClientes.map((cliente) => (
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