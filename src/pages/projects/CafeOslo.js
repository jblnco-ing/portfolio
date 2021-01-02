import React, { Component } from 'react';
import { CardProject } from '../../components/common/CardProject';
import Layout from '../../components/layouts/Layout';
import * as img from '../../assets/img/projects/cafe_oslo/';
import "../../styles/page.css";

export default class CafeOslo extends Component {
  state = {
    data: {
      title: "Café de Oslo",
      description: "Landing Page",
      styles: {
        backgroundImage: `url(${img.logo})`,
        backgroundColor: "#D03B40",
      },
    }
  };
  
  render() {
    return (
      <Layout>
        <div id="page">
          <CardProject {...this.state.data} />
          <p>
            Página de café: <br/>
            Este proyecto era parte de un curso en dónde aprendí 
            <a href="https://es.wikipedia.org/wiki/HTML"> 
              &nbsp;HTML&nbsp;
            </a>
              y 
            <a href="https://es.wikipedia.org/wiki/Hoja_de_estilos_en_cascada"> 
              &nbsp;CSS
            </a>
            .
          </p>
          <img alt="imagen" src={img.imagen1}/>
          <p>
            La práctica final consistió en montar está página web con todas las herramientas que había dado el curso.
          </p>
          <img alt="imagen" src={img.imagen2}/>
          <p>
            Prácticamente fue mi primera experiencia de 
            <a href="https://es.wikipedia.org/wiki/Desarrollo_web_Front-end"> 
              &nbsp;frontend
            </a>
            , skill que estoy desarrollado bastante.
          </p>
          <img alt="imagen" src={img.imagen3}/>
          <p>
            Lo que mas me lleve de este curso fue el uso de las                  
            <a href="https://es.wikipedia.org/wiki/Media_query"> 
              &nbsp;media query&nbsp;
            </a>            
             para el diseño de paginas 
            <a href="https://es.wikipedia.org/wiki/Diseño_web_adaptable"> 
              &nbsp;resposive
            </a>
            .
          </p>
          <p>
            Diseño de la pagina por bloques
          </p>
          <img alt="imagen" src={img.imagen4}/>
          <p>
            Aplicando un menú distinto en el media query
          </p>
          <img alt="imagen" src={img.imagen5}/>
          <p>
            Vista móvil de la pagina
          </p>
          <img alt="imagen" src={img.imagen6} />
        </div>
      </Layout>
    );
  }
}
