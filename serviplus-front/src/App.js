import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componentes/general/Header";
import Landing from "./componentes/general/Landing";
import FormCliente from "./componentes/clientes/Formulario";
import ListadoClientes from "./componentes/clientes/TablaClientes"; 
// import imagenes from "./assets/img/imagenes";


function App() {
  return (
    <BrowserRouter>
      <div className="App" >
        <Header />
        <div className="container mt-3 p-3">
          <Routes>
            <Route path="/" element={<Landing />} exact></Route>
            <Route path="/genera-ticket" element={<FormCliente />} exact></Route>
            <Route path="/cliente/Formulario.js" element= {<ListadoClientes />} exact></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
