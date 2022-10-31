import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./general/Header";
import Landing from "./general/Landing";
import FormCliente from "./clientes/Formulario";
import imagenes from "./assets/img/imagenes";


function App() {
  return (
    <div className="App" >
      <Header />
      <div className="container mt-3 p-3" style={{columnCount:"2"}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} exact></Route>
          <Route path="/genera-ticket" element={<FormCliente />} exact ></Route>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
