import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';
import './css/Elite.css';

function Elite(){
    return(
        <div class="container py-5">
            <div class="row align-items-center">
        
        
                <div class="col-md-6">
                    <div class="imagen-contenedor">
                        <img src="ruta_de_la_imagen" alt="Asesoría para Restaurantes" class="img-fluid imagen-estilo"/>
                    </div>
                </div>
        
                <div class="col-md-6">
                    <p class="titulo-seccion">Innoventa Élite</p>
                    <h2 class="subtitulo-seccion">Hecho a la medida de tu Restaurante</h2>
                    <p class="descripcion-seccion">
                        Con la membresía Élite de InnoVenta, tendrás acceso a un asesor personal que colaborará contigo para comprender a fondo la visión y las necesidades específicas de tu restaurante. Juntos, trabajaremos para diseñar soluciones personalizadas que se adapten perfectamente a tu negocio.
                    </p>
                    <p class="descripcion-seccion">
                        Personaliza completamente la interfaz de tu punto de venta, ajustándola a la dinámica única de tu operación. Configura categorías, secciones y flujos de trabajo específicos que optimicen la eficiencia diaria y potencien la experiencia de tus clientes.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Elite;