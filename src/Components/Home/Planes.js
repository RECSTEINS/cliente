import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';
import './css/Planes.css';

function Planes(){
    return(
        <div class="fondo-planes">
            <div class="container py-5">
            <center>
                <h1>Nuestros Planes Disponibles</h1>
                <p class="text-center mb-5">Después del período de prueba podrás elegir la versión que mejor se adapte a tus necesidades.</p>
            </center>
    
                <div class="row justify-content-center">
                    <div class="col-12 col-md-4 col-lg-4 mb-4 d-flex justify-content-center">
                        <div class="card shadow pricing-card">
                            <center>
                                <div class="basic-plan-header text-uppercase fw-bold">Gratuita</div>
                                <div class="card-body text-center price-section">
                                    <h3 class="plan-title">BÁSICA</h3>
                                    <p class="price">$0 US</p>
                                    <p class="billing-text">Por usuario al mes, facturado anualmente*</p>
                                </div>
                            </center>
                            <ul class="feature-list">
                                <li>Gestión completa del inventario📋</li>
                                <li>Supervisión de ventas📈</li>
                                <li>Soporte Limitado</li>
                                <li>Asignación de roles</li>
                                <li>Sin Acceso a Nuevas Características</li>
                                <li>Atención vía Email</li>
                                <li>Opciones de Personalización Limitadas</li>
                                <center>
                                <div>
                                    <a href="#" class="btn custom-btn">Empezar gratis</a>
                                </div></center>
                            </ul>
                        </div>
                    </div>
        
        
                    <div class="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                        <div class="card shadow pricing-card">
                            <div class="pro-plan-header text-uppercase fw-bold">Más Popular</div>
                                <div class="card-body text-center price-section">
                <center><h3 class="plan-title">PRO</h3>
                                    <p class="price">$299 US</p>
                                    <p class="billing-text">$399 Ahorro aproximado del 30%</p>
                                    <p class="billing-text">Por usuario al mes, facturado anualmente*</p>
                                    </center></div>
                                <ul class="feature-list">
                                    <li>Gestión completa del inventario</li>
                                    <li>Supervisión de ventas</li>
                                    <li>Ajustes de precios y promociones</li>
                                    <li>Asignación de roles</li>
                                    <li>Reportes avanzados</li>
                                    <li>Atención vía Email</li>
                                    <li>Todas las funciones de Básica</li>
                                    <center><div>
                                        <a href="#" class="btn custom-btn">Empezar gratis</a>
                                    </div></center>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Planes;