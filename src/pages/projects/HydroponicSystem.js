import React, { Component } from 'react';
import { CardProject } from '../../components/common/CardProject';
import Layout from '../../components/layouts/Layout';
import "../../styles/page.css";
import * as img from '../../assets/img/projects/hydroponic_system';

export default class HydroponicSystem extends Component {
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
            El sistema 
            <a href="https://es.wikipedia.org/wiki/Hidroponía"> 
              &nbsp;Hidropónico
            </a>
            , otra idea de mi hermano y yo su ejecutor. Aunque fue al principio un proyecto universitario, actualmente lo estamos actualizando con el fin de producir alimentos para el hogar.
          </p>
          <img alt="imagen" src={img.imagen1}/>
          <p>
            Consiste en un sistema que recircula agua por unas tuberías, las mismas por la cuáles sobresalen las raíces que las plantas para su crecimiento y desarrollo.
          </p>
          <img alt="imagen" src={img.imagen2}/>
          <p>
            El agua que circula por el sistema contiene los nutrientes necesarios para el desarrollo de las plantas.
          </p>
          <img alt="imagen" src={img.imagen3}/>
          <p>
            Aunque en el proyecto no aplicó mucho de mis conocimientos de programación. si implementó las bases de mi profesion.
          </p>
          <p>
            Simulación de circuito de control con arduino
          </p>
          <img alt="imagen" src={img.imagen4}/>
          <p>
            Mi objetivo principal es 
            <a href="http://www.sc.ehu.es/sbweb/webcentro/automatica/WebCQMH1/PAGINA%20PRINCIPAL/Automatizacion/Automatizacion.htm"> 
              &nbsp;automatizar&nbsp;
            </a>
            el sistema. Actualmente solo hemos automatizado el encendido y apagado de la bomba de agua según el nivel de agua en el tanque.
          </p>
          <p>
            Código del arduino
          </p>
          <img alt="imagen" src={img.imagen5}/>              
        </div>
      </Layout>
    );
  }
}
