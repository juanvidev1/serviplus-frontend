import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componentes/general/Header";
import Landing from "./componentes/general/Landing";
import FormCliente from "./componentes/clientes/Formulario";
import ListadoClientes from "./componentes/clientes/TablaClientes";
import ListadoEmpleados from "./componentes/empleados/TablaEmpleados";
import LoginEmpleados from "./componentes/empleados/EmpleadosLogin"; 
import Footer from "./componentes/general/Footer";
import ClienteDashboard from "./componentes/clientes/Dashboard";
import { useState } from "react";
import { ContextoUsuario } from "./servicios/ContextoUsuario";
import AdminDashboard from "./componentes/empleados/AdminDashboard";
import ClienteTicketForm from "./componentes/clientes/ClienteTicketForm";


function App() {

  const [usuario, setUsuario] = useState({nombres: "", estadoLogin: 0});

  return (
    <BrowserRouter>
      <ContextoUsuario.Provider value={{usuario, setUsuario}}>
        <div className="App" >
        <Header />
            
         <Routes>
           <Route path="/" element={<Landing />} exact></Route>
           <Route path="/clientes/form" element={<FormCliente />} exact></Route>
           <Route path="/empleados" element= {<LoginEmpleados /> } exact></Route>
           <Route path="/clientes/form" element= {<FormCliente />} exact></Route>
           <Route path="/adminDashboard" element= {<AdminDashboard />} exact></Route>
           <Route path="/tablaclientes" element={<ListadoClientes />} exact></Route>
           <Route path="/tablaempleados" element={<ListadoEmpleados />} exact></Route>
           <Route path="/clienteDashboard" element={<ClienteDashboard />} exact></Route>
           <Route path="/clienteticketform" element={<ClienteTicketForm />} exact></Route>
         </Routes>     
        </div>
        <Footer />
      </ContextoUsuario.Provider>
    </BrowserRouter>
  );
}

export default App;
