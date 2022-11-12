import Imagenes from '../../assets/img/imagenes';
import './styles/clienteTicket.css';

const ClienteTicketForm = () => {
    return(
        <div className='container mb-3' align='center'>
        <form className="formulario-tickets form-control form-control-sm">
            <h1 className='encabezado-cliente-ticket'>Genera un ticket</h1>
            <div className='d-flex'>
                <div className='asunto-seccion col-2 ms-2'>
                    <div className='asunto-seccion mb-1'>
                        <label className='etiqueta-asunto'>Asunto*</label>
                    </div>
                    <div className='asunto-seccion mb-1'>
                        <input type={"text"} className="asunto-entrada form-control form-control-sm" />
                    </div>
                    <div className='descripcion-seccion mb-1'>
                        <label className='etiqueta-descripcion'>Descripción solicitud*</label>
                    </div>
                    <div className='descripcion-seccion'>
                        <textarea type={"text"} className='entrada-grande form-control form-control-sm' />
                    </div>
                    </div>
            </div>
        </form>
        <div>
            <img src={Imagenes.img2} alt='' />
        </div>
        </div>
    );
}

export default ClienteTicketForm