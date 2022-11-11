import Sidebar from "../general/SidebarClientes";
// import ContenidoDashCliente from "./ClienteDashboard";
import FormularioCliente from './Formulario';

const DashboardCliente = () => {
  // Estilos

  // Funcionalidad

    

  /**/


  return (
    <div className="d-flex">
      <div className="col-2">
          <Sidebar />
      </div>
      <div className="container m-5">
          <FormularioCliente />
      </div>
    </div>
  );
};

export default DashboardCliente;
