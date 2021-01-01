import React, { Component } from 'react';
import { CardProject } from '../../components/common/CardProject';
import Layout from '../../components/layouts/Layout';
import "../../styles/page.css";
import * as img from '../../assets/img/projects/the_finder_app/';
export default class TheFinder extends Component {
  state = {
    data:{}
  };
  componentDidMount() {
    this.setState({
      data: this.props.location.state.props
    });
  }

  render() {
    return (
      <Layout>
        <div id="page">
          <CardProject {...this.state.data} />
          <p>
            Es una app web diseñada para el registro de actividades de compra y venta para pequeños negocios.
          </p>
          <img alt="imagen" src={img.imagen1} />
          <img alt="imagen" src={img.imagen2}/>
          <p>
            La aplicación permite el registro de clientes, el producto que compro, la fecha y el estado del pago.
          </p>
          <p>
            Logo en colaboración con 
            <a href="https://www.instagram.com/dona.intermitente/"> 
              &nbsp; @dona.intermitente 
            </a>
            .
          </p>
          <img alt="imagen" src={img.imagen9}/>
          <p>
            Puede ser utilizado por varios administradores, utiliza las herramientas de 
            <a href="https://es.wikipedia.org/wiki/Firebase"> 
              &nbsp;firebase&nbsp;
            </a>
            como la 
            <a href="https://es.wikipedia.org/wiki/Base_de_datos"> 
              &nbsp;base de datos&nbsp;
            </a>
            y el servicio de 
            <a href="https://es.wikipedia.org/wiki/Alojamiento_web"> 
              &nbsp;hosting
            </a>
            .
          </p>
          <p>
            Posee una experiencia laboral eficiente y agradable creada con el Sistema  
            <a href="https://www.instagram.com/dona.intermitente/"> 
              &nbsp;Ant Desing&nbsp;
            </a>
            hecho en 
            <a href="https://es.reactjs.org"> 
              &nbsp;React
            </a>
            .
          </p>
          <p>
            Ingreso del cliente
          </p>
          <img alt="imagen" src={img.imagen3} />
          <p>
            Ingreso de nueva compra/venta
          </p>
          <img alt="imagen" src={img.imagen4} />
          <p>
            Fecha de registro
          </p>
          <img alt="imagen" src={img.imagen5} />
          <p>
            La app ahorra la necesidad de diseñar un Sistema de  
            <a href="https://es.wikipedia.org/wiki/Microsoft_Excel"> 
              &nbsp;Excel&nbsp;
            </a>
            para negocios de simple procedimientos.
          </p>
          <img alt="imagen" src={img.imagen6} />
          <p>
            Ingreso de nuevo cliente
          </p>
          <img alt="imagen" src={img.imagen7} />
          <p>
            Ingreso de nuevo estado
          </p>
          <img alt="imagen" src={img.imagen8} />
          {/* <img alt="imagen" src={img.imagen9} /> */}
        </div>
      </Layout>
    );
  }
}
