import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componentes/general/Header";
import Landing from "./componentes/general/Landing";
import FormCliente from "./componentes/clientes/Formulario";
// import ListadoClientes from "./componentes/clientes/TablaClientes";
import ListadoEmpleados from "./componentes/empleados/TablaEmpleados"; 
import Footer from "./componentes/general/Footer";
// import imagenes from "./assets/img/imagenes";


function App() {
  return (
    <BrowserRouter>
      <div className="App" >
        <Header />
        <div className="container mt-3 p-3">
          <Routes>
            <Route path="/" element={<Landing />} exact></Route>
            <Route path="/clientes/form" element={<FormCliente />} exact></Route>
            <Route path="/empleados" element= {<ListadoEmpleados />} exact></Route>
            <Route path="/clientes/form" element= {<FormCliente />} exact></Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
