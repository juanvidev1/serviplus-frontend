import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componentes/general/Header";
import Landing from "./componentes/general/Landing";
import FormCliente from "./componentes/clientes/Formulario";
import ListadoClientes from "./componentes/clientes/TablaClientes"; 
// import imagenes from "./assets/img/imagenes";


function App() {
  return (
    <div className="App" >
      <Header />
      <div className="container mt-3 p-3">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} exact></Route>
          <Route path="/genera-ticket" element={<ListadoClientes />} exact ></Route>
          <Route path="/about-serviplus" element= {<FormCliente />} exact></Route>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
