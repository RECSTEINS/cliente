import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';
import './css/Footer.css';
import facebook from '../../Assets/image.png'
import x from '../../Assets/twitter.png'
import instagram from '../../Assets/ig.png'

function Footer(){
    return(
      <footer class="footer mt-5">
      <div class="container py-5">
          <div class="row">
              <div class="col-md-4 mb-3">
                  <h5 class="text-white">Menú</h5>
                  <ul class="list-unstyled">
                      <li><a href="#" class="footer-link">Inicio</a></li>
                      <li><a href="#" class="footer-link">Registro</a></li>
                      <li><a href="#" class="footer-link">Membresía</a></li>
                  </ul>
              </div>
              <div class="col-md-4 mb-3">
                  <h5 class="text-white">Contáctanos</h5>
                  <div class="d-flex gap-5">
                      <a href="#"><img src={facebook} alt="Facebook" class="social-icon"/></a>
                      <a href="#"><img src={x} alt="Twitter" class="social-icon"/></a>
                      <a href="#"><img src={instagram} alt="Instagram" class="social-icon"/></a>
                  </div>
                  <p class="text-white mt-5">
                      <strong>Lorem ipsum dolor sit amet,</strong><br/>
                      consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.  

                      Vivamus a tellus.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
                      Aenean nec lorem. 
                  </p>
              </div>

              <div class="col-md-4 mb-3">
                  <h5 class="text-white">Suscríbete</h5>
                  <p class="text-white">Suscríbete para recibir notificaciones</p>
                  <form class="d-flex">
                      <input type="email" class="form-control me-2" placeholder="Correo electrónico"/>
                      <button type="submit" class="btn btn-warning">Enviar</button>
                  </form>
              </div>
          </div>
      </div>
  </footer>
    )
}

export default Footer;