import Imagenes from "../../assets/img/imagenes";
import './styles/SideBar.css'
import EstadoLogin from '../../enums/EstadoLogin';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextoUsuario } from '../../servicios/ContextoUsuario';


const Sidebar = () => {

  const navigateTo = useNavigate();
  const { usuario, setUsuario } = useContext(ContextoUsuario);

  const revisarSesion = () => {
      if (sessionStorage.getItem("estadoLogin") != null) {
          const sesionUsuario = {
              nombres: sessionStorage.getItem("nombres"),
              EstadoLogin: parseInt(sessionStorage.getItem("estadoLogin"))
          }
          console.log(sesionUsuario);
          console.log(usuario);
          setUsuario(sesionUsuario);
      } else {
          setUsuario({nombres: "", estadoLogin: EstadoLogin.NO_LOGIN});
      }
  }

  const cerrarSesion = () => {
    sessionStorage.clear();
    revisarSesion();
    navigateTo("/");
  }

  useEffect(() => {
    revisarSesion();
  }, [])

  return (
      <div
        className="sidebar col-12 align-items-stretch"
        align="center"
      >
        <div className="m-0" align="center">
          <img src={Imagenes.img4} alt="" width="200" height="200" />
        </div>
        <div className="flex-row mt-2 mb-2" align="center">
          {
            usuario.estadoLogin === EstadoLogin.ADMIN_LOGIN ? (
              <ul className="list-unstyled">
                <li><a href="/asesores" type="button" className="btn btn-md btn-warning mt-3 mb-3">Empleados</a></li>
                <li><a href="/tablaclientes" type="button" className="btn btn-md btn-warning mt-3 mb-3">Tickets</a></li>
                <li><a href="/tablaclientes" type="button" className="btn btn-md btn-warning mt-3 mb-3">Clientes</a></li>
              </ul>
            )
            :
            usuario.estadoLogin === EstadoLogin.ASESOR_LOGIN ? (
              <ul className="list-unstyled">
                <li><a href="/tablaclientes" type="button" className="btn btn-md btn-warning mt-3 mb-3">Editar perfil</a></li>
                <li><a href="/tablaclientes" type="button" className="btn btn-md btn-warning mt-3 mb-3">Listar mis tickets</a></li>
                <li><a href="/tablaclientes" type="button" className="btn btn-md btn-warning mt-3 mb-3">Ver clientes</a></li>
              </ul>
            )
            :
            usuario.estadoLogin === EstadoLogin.CLIENTE_LOGIN ? (
              <ul className="list-unstyled">
                <li><a href="/tablaclientes" type="button" className="btn btn-md btn-warning mt-3 mb-3">Editar perfil</a></li>
                <li><a href="/tablaclientes" type="button" className="btn btn-md btn-warning mt-3 mb-3">Listar mis tickets</a></li>
                <li><a href="/tablaclientes" type="button" className="btn btn-md btn-warning mt-3 mb-3">Crear un ticket</a></li>
              </ul>
            )
            : (
              <>
              </>
            )
          }
        </div>
        <div className="flex-row">
          <div className="mt-5 p-5" align="center">
            <img src={Imagenes.exiticon} alt="" width="30" height="30" />
            <button
              type="button"
              className="btn btn-dark"
              onClick={cerrarSesion}
            >
              Salir
            </button>
          </div>
        </div>
      </div>
  );
};

export default Sidebar;
